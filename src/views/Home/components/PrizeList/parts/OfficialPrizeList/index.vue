<script setup lang='ts'>
import type { IPrizeConfig } from '@/types/storeType'
import { computed, ref, watch } from 'vue'
import defaultPrizeImage from '@/assets/images/dragon.png'
import { useGsap } from './useGsap'

const props = defineProps<{
    isMobile: boolean
    localPrizeList: IPrizeConfig[]
    currentPrize: IPrizeConfig
    temporaryPrizeShow: boolean
    addTemporaryPrize: () => void
}>()

const prizeShow = defineModel<boolean>('prizeShow')
const scrollContainerRef = ref<any>(null)
const ulContainerRef = ref<any>(null)
const isScroll = ref(false)
const liRefs = ref([])

const {
    showUpButton,
    showDownButton,
    handleScroll,
} = useGsap(scrollContainerRef, liRefs, isScroll, prizeShow, props.temporaryPrizeShow)

// Separate current prize from upcoming prizes
const upcomingPrizes = computed(() => {
    return props.localPrizeList.filter(
        item => item.isShow && 
        item.id !== props.currentPrize.id && 
        !item.isUsed && 
        item.isUsedCount < item.count
    )
})

// Get height of ulContainerRef
function getUlContainerHeight() {
    if (ulContainerRef.value) {
        return ulContainerRef.value.offsetHeight
    }
    return 0
}
// Get height of scrollContainerRef
function getScrollContainerHeight() {
    if (scrollContainerRef.value) {
        return scrollContainerRef.value.offsetHeight
    }
    return 0
}

function getIsScroll() {
    const ulHeight = getUlContainerHeight()
    const scrollHeight = getScrollContainerHeight()
    if (ulHeight > scrollHeight + 20) {
        isScroll.value = true
    }
    else {
        isScroll.value = false
        scrollContainerRef.value.style.height = `${ulHeight}px`
    }
}

watch ([prizeShow, () => props.temporaryPrizeShow], (val) => {
    if (!val[0]) {
        return
    }
    setTimeout (() => {
        getIsScroll()
    }, 0)
}, { immediate: true })
</script>

<template>
  <transition name="prize-list" class="h-full" :appear="true">
    <div v-show="prizeShow && !isMobile && !temporaryPrizeShow" class="flex flex-col h-full relative gap-4">
      <!-- Current Prize Showcase - Prominent Display -->
      <div v-if="currentPrize.isShow" class="current-prize-showcase">
        <div class="relative flex flex-col items-center justify-center w-72 h-40 px-6 gap-4 prize-card-3d">
          <div
            v-if="currentPrize.isUsed"
            class="absolute z-50 w-full left-0 h-full bg-gray-800/70 item-mask rounded-xl"
          />
          <figure class="w-20 h-20 rounded-2xl prize-image-3d">
            <ImageSync v-if="currentPrize.picture.url" :img-item="currentPrize.picture" />
            <img
              v-else :src="defaultPrizeImage" alt="Prize"
              class="object-cover h-full w-full rounded-2xl"
            >
          </figure>
          <div class="flex flex-col items-center gap-2">
            <h2 class="text-xl font-bold text-center text-white drop-shadow-lg">
              {{ currentPrize.name }}
            </h2>
            <div class="flex items-center gap-2 text-sm text-gray-200">
              <span>{{ currentPrize.isUsedCount }}/{{ currentPrize.count }}</span>
              <progress
                class="w-32 h-2 progress bg-[#52545b] progress-primary" :value="currentPrize.isUsedCount"
                :max="currentPrize.count"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Next Up Queue - Smaller Secondary Display -->
      <div v-if="upcomingPrizes.length > 0" class="next-up-queue">
        <h3 class="text-sm font-semibold text-gray-300 mb-2 px-2">Next Up</h3>
        <div ref="scrollContainerRef" :class="isScroll ? (showDownButton ? 'scroll-container' : 'scroll-container-end') : 'no-scroll'" class="h-full no-before overflow-y-auto overflow-x-hidden scroll-smooth hide-scrollbar z-20">
          <ul ref="ulContainerRef" class="flex flex-col gap-2 p-2">
            <li
              v-for="item in upcomingPrizes"
              ref="liRefs" :key="item.id"
              class="prize-item-queue"
            >
              <div class="relative flex flex-row items-center justify-between w-64 h-16 px-3 gap-4 prize-card-3d">
                <figure class="w-12 h-12 rounded-xl prize-image-3d">
                  <ImageSync v-if="item.picture.url" :img-item="item.picture" />
                  <img
                    v-else :src="defaultPrizeImage" alt="Prize"
                    class="object-cover h-full w-full rounded-xl"
                  >
                </figure>
                <div class="flex-1 items-center p-0">
                  <div class="tooltip tooltip-left w-full" :data-tip="item.name">
                    <h3 class="text-sm font-medium text-white truncate">
                      {{ item.name }}
                    </h3>
                  </div>
                  <p class="text-xs text-gray-300 mt-1">
                    {{ item.isUsedCount }}/{{ item.count }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div v-if="isScroll" class="h-24" />
        </div>
        <div v-if="isScroll" class="w-full h-8 flex justify-center scroll-button scroll-button-down absolute bottom-0 z-50">
          <SvgIcon v-show="showDownButton" name="chevron-down" size="32px" class="text-gray-200/80 cursor-pointer" @click="handleScroll(150)" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@use "./index.scss";
</style>
