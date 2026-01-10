<script setup lang='ts'>
import type { IFileData } from '../FileUpload/type'
import type { IImage } from '@/types/storeType'
import localforage from 'localforage'
import { onMounted, onUnmounted, ref } from 'vue'

interface IProps {
    imgItem: IImage
}
const props = defineProps<IProps>()
const imageDbStore = localforage.createInstance({
    name: 'imgStore',
})

const imgUrl = ref('')
const objectUrls = ref<string[]>([]) // Track object URLs for cleanup

async function getImageStoreItem(item: IImage): Promise<string> {
    let image = ''
    if (item.url === 'Storage') {
        const key = item.id
        const imageData = await imageDbStore.getItem<IFileData>(key)
        const url = URL.createObjectURL(imageData?.data as Blob)
        objectUrls.value.push(url) // Track for cleanup
        image = url
    }
    else {
        image = item.url as string
    }

    return image
}

onMounted(async () => {
    imgUrl.value = await getImageStoreItem(props.imgItem)
})

onUnmounted(() => {
    // Clean up object URLs to prevent memory leaks
    objectUrls.value.forEach(url => URL.revokeObjectURL(url))
    objectUrls.value = []
})
</script>

<template>
  <img :src="imgUrl" alt="Image" class="object-cover h-full rounded-xl">
</template>

<style lang='scss' scoped>

</style>
