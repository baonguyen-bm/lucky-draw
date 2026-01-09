import type { Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { onMounted, provide, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { loadingKey, loadingState } from '@/components/Loading'
import useStore from '@/store'
import { themeChange } from '@/utils'

export function useMounted(tipDialog: Ref<any>) {
    provide(loadingKey, loadingState)
    const globalConfig = useStore().globalConfig
    const prizeConfig = useStore().prizeConfig
    const system = useStore().system
    const { getTheme: localTheme } = storeToRefs(globalConfig)
    const { getPrizeConfig: prizeList, getTemporaryPrize: temporaryPrize } = storeToRefs(prizeConfig)
    const tipDesc = ref('')
    const { t } = useI18n()
    // Set current prize list
    function setCurrentPrize() {
        if (prizeList.value.length <= 0) {
            return
        }
        if (temporaryPrize.value && temporaryPrize.value.isShow) {
            prizeConfig.setCurrentPrize(temporaryPrize.value)
            return
        }
        for (let i = 0; i < prizeList.value.length; i++) {
            if (!prizeList.value[i].isUsed) {
                prizeConfig.setCurrentPrize(prizeList.value[i])

                break
            }
        }
    }
    // Determine if it is a mobile access
    function judgeMobile() {
        const ua = navigator.userAgent
        const isAndroid = ua.includes('Android') || ua.includes('Adr')
        const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

        system.setIsMobile(isAndroid || isIOS)

        return isAndroid || isIOS
    }
    // Determine if it is Chrome or Edge access
    function judgeChromeOrEdge() {
        const ua = navigator.userAgent
        const isChrome = ua.includes('Chrome')
        const isEdge = ua.includes('Edg')

        system.setIsChrome(isChrome)

        return isChrome || isEdge
    }
    onMounted(() => {
        themeChange(localTheme.value.name)
        setCurrentPrize()
        if (judgeMobile()) {
            tipDialog.value.showDialog()
            tipDesc.value = t('dialog.dialogPCWeb')
        }
        else if (!judgeChromeOrEdge()) {
            tipDialog.value.showDialog()
            tipDesc.value = t('dialog.dialogLatestBrowser')
        }
    })

    return { tipDesc }
}
