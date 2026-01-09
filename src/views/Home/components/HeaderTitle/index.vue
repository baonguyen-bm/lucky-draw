<script setup lang='ts'>
import type { CSSProperties } from 'vue'
import { computed, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { rgbToHex } from '@/utils/color'

interface Props {
    textSize: number
    textColor: string
    topTitle: string
    tableData: any[]
    setDefaultPersonList: () => void
    isInitialDone: boolean
    titleFont: string
    titleFontSyncGlobal: boolean
}

const props = defineProps<Props>()
const router = useRouter()
const { tableData, textSize, textColor, topTitle, setDefaultPersonList, titleFont, titleFontSyncGlobal } = toRefs(props)
const isTextColor = computed(() => {
    return rgbToHex(textColor.value) !== '#00000000'
})
const titleStyle = computed(() => {
    const style: CSSProperties = {
        fontSize: `${textSize.value * 1.5}px`,
        fontFamily: titleFontSyncGlobal.value ? `"${titleFont.value}", "Cinzel", "Georgia", serif` : `"${titleFont.value}", "Cinzel", serif`,
        fontWeight: 'bold',
    }
    if (isTextColor.value) {
        style.color = textColor.value
    }

    return style
})
const { t } = useI18n()
</script>

<template>
  <div class="absolute z-10 flex flex-col items-center justify-center -translate-x-1/2 left-1/2">
    <h2
      class="pt-12 m-0 mb-12 tracking-wide text-center leading-12 title-gold"
      :class="{ 'animate-pulse': !isTextColor }"
      :style="titleStyle"
    >
      {{ topTitle }}
    </h2>
    <div v-if="isInitialDone" class="flex gap-3">
      <button
        v-if="tableData.length <= 0" class="cursor-pointer btn btn-outline btn-secondary btn-lg"
        @click="router.push('config')"
      >
        {{ t('button.noInfoAndImport') }}
      </button>
      <button
        v-if="tableData.length <= 0" class="cursor-pointer btn btn-outline btn-secondary btn-lg"
        @click="setDefaultPersonList"
      >
        {{ t('button.useDefault') }}
      </button>
    </div>
    <!-- Loading -->
    <div v-else class="flex gap-3 items-center">
      <span class="loading loading-spinner loading-xl" />
      <span>{{ t('button.loading') }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-title {
    -webkit-animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

@-webkit-keyframes tracking-in-expand-fwd {
    0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px);
        transform: translateZ(-700px);
        opacity: 0;
    }

    40% {
        opacity: 0.6;
    }

    100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}

@keyframes tracking-in-expand-fwd {
    0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px);
        transform: translateZ(-700px);
        opacity: 0;
    }

    40% {
        opacity: 0.6;
    }

    100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}

.title-gold {
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gold-shimmer 3s ease-in-out infinite;
    text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
    filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3));
}

@keyframes gold-shimmer {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}
</style>
