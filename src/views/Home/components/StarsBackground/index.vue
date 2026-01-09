<script setup lang='ts'>
import { useElementSize } from '@vueuse/core'
import localforage from 'localforage'
import Sparticles from 'sparticles'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
    homeBackground: {
        type: Object,
        default: () => ({
            id: '',
            name: '',
            url: '',
        }),
    },
})
const imageDbStore = localforage.createInstance({
    name: 'imgStore',
})
const imgUrl = ref('')
const starRef = ref()

const { width, height } = useElementSize(starRef)
const options = ref({ shape: 'star', parallax: 1.2, rotate: true, twinkle: true, speed: 10, count: 200 })
function addSparticles(node: any, width: number, height: number) {
    const sparticleInstance = new Sparticles(node, options.value, width, height)
    return sparticleInstance
}
// When page size changes
function listenWindowSize() {
    window.addEventListener('resize', () => {
        if (width.value && height.value) {
            addSparticles(starRef.value, width.value, height.value)
        }
    })
}

async function getImageStoreItem(item: any): Promise<string> {
    let image = ''
    if (item.url === 'Storage') {
        const key = item.id
        const imageData = await imageDbStore.getItem(key) as any
        image = URL.createObjectURL(imageData.data)
    }
    else {
        image = item.url
    }

    return image
}
onMounted(() => {
    getImageStoreItem(props.homeBackground).then((image) => {
        imgUrl.value = image
    })
    addSparticles(starRef.value, width.value, height.value)
    listenWindowSize()
})
onUnmounted(() => {
    window.removeEventListener('resize', listenWindowSize)
})
</script>

<template>
  <div v-if="homeBackground.url" class="home-background w-screen h-screen overflow-hidden">
    <img :src="imgUrl" class="w-full h-full object-cover" alt="">
  </div>
  <div v-else ref="starRef" class="w-screen h-screen overflow-hidden aurora-background">
    <div class="aurora-layer aurora-layer-1" />
    <div class="aurora-layer aurora-layer-2" />
    <div class="aurora-layer aurora-layer-3" />
  </div>
</template>

<style lang='scss' scoped>
.aurora-background {
    position: relative;
    background: linear-gradient(135deg, #1a0a0a 0%, #2d1b1b 25%, #1a0a0a 50%, #2d1b1b 75%, #1a0a0a 100%);
    background-size: 400% 400%;
    animation: gradient-shift 15s ease infinite;
    overflow: hidden;
}

.aurora-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    mix-blend-mode: screen;
    animation: aurora-flow 20s ease-in-out infinite;
}

.aurora-layer-1 {
    background: radial-gradient(ellipse at 20% 50%, rgba(139, 0, 0, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 80%, rgba(255, 215, 0, 0.3) 0%, transparent 50%);
    animation-delay: 0s;
}

.aurora-layer-2 {
    background: radial-gradient(ellipse at 60% 20%, rgba(255, 215, 0, 0.3) 0%, transparent 50%),
                radial-gradient(ellipse at 40% 70%, rgba(139, 0, 0, 0.4) 0%, transparent 50%);
    animation-delay: -7s;
}

.aurora-layer-3 {
    background: radial-gradient(ellipse at 90% 40%, rgba(255, 140, 0, 0.25) 0%, transparent 50%),
                radial-gradient(ellipse at 10% 60%, rgba(139, 0, 0, 0.35) 0%, transparent 50%);
    animation-delay: -14s;
}

@keyframes gradient-shift {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes aurora-flow {
    0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.6;
    }
    33% {
        transform: translate(5%, -5%) scale(1.1);
        opacity: 0.8;
    }
    66% {
        transform: translate(-5%, 5%) scale(0.9);
        opacity: 0.5;
    }
}
</style>
