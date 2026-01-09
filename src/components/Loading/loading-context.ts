// src/contexts/loading-context.ts
import type { InjectionKey, Ref } from 'vue'
import { ref } from 'vue'

// Define Loading configuration type
export interface LoadingOptions {
    visible: Ref<boolean>
    text: Ref<string>
    fullscreen: Ref<boolean>
    zIndex: Ref<number>
    count: Ref<number>
    show: (options?: Partial<{ text: string, fullscreen: boolean, zIndex: number }>) => void
    hide: () => void
}

// Injection key (Symbol ensures uniqueness)
export const loadingKey: InjectionKey<LoadingOptions> = Symbol('loading')

// Global state (singleton)
const visible = ref(false)
const text = ref('')
const fullscreen = ref(true)
const zIndex = ref(9999)
const count = ref(0)

// Show Loading
function show(options?: Partial<{ text: string, fullscreen: boolean, zIndex: number }>) {
    count.value++
    if (count.value > 1)
        return
    visible.value = true
    if (options) {
        text.value = options.text || ''
        fullscreen.value = options.fullscreen ?? true
        zIndex.value = options.zIndex || 9999
    }
}

// Hide Loading
function hide() {
    if (count.value <= 0)
        return
    count.value--
    if (count.value === 0) {
        visible.value = false
        text.value = ''
        fullscreen.value = true
        zIndex.value = 9999
    }
}

// Export global state (for root component to provide)
export const loadingState: LoadingOptions = {
    visible,
    text,
    fullscreen,
    zIndex,
    count,
    show,
    hide,
}
