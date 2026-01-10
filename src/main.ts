// pinia
import { createPinia } from 'pinia'
// pinia persistence
import piniaPluginPersist from 'pinia-plugin-persist'
// Three.js is now lazy loaded only when needed (in Home component)
// Removed global import to reduce initial bundle size by ~600KB
import { createApp } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import svgIcon from '@/components/SvgIcon/index.vue'
import i18n from '@/locales/i18n'
// SVG global component / Router
import router from '@/router'
import App from './App.vue'
import './style.css'
import './style/markdown.css'
import './style/style.scss'
// Global SVG components
import 'virtual:svg-icons-register'

// Set theme and font early during application initialization to avoid flickering during page load
(function initializeThemeAndFont() {
    try {
        // Get global configuration from localStorage
        const globalConfigStr = localStorage.getItem('globalConfig')

        if (globalConfigStr) {
            const storageData = JSON.parse(globalConfigStr)
            // According to the persist strategy, data is stored under the globalConfig property
            const globalConfig = storageData.globalConfig || storageData

            // Set theme
            if (globalConfig.theme?.name) {
                const html = document.documentElement
                html.setAttribute('data-theme', globalConfig.theme.name)
            }

            // Set font
            if (globalConfig.theme?.font) {
                // Update CSS variables
                document.documentElement.style.setProperty('--app-font-family', `"${globalConfig.theme.font}", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
            }
        }
    }
    catch (e) {
        console.warn('Failed to set initial theme and font:', e)
    }
})()

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersist)

// Removed $THREE global property - Three.js is imported directly where needed
app.component('svg-icon', svgIcon)
app.use(router).use(VueDOMPurifyHTML).use(pinia).use(i18n).mount('#app')
