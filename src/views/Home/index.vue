<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useStore from '@/store'
import HeaderTitle from './components/HeaderTitle/index.vue'
import OptionButton from './components/OptionsButton/index.vue'
import PrizeList from './components/PrizeList/index.vue'
import StarsBackground from './components/StarsBackground/index.vue'
import { useViewModel } from './useViewModel'
import 'vue-toast-notification/dist/theme-sugar.css'

const viewModel = useViewModel()
const { setDefaultPersonList, tableData, currentStatus, enterLottery, stopLottery, containerRef, startLottery, continueLottery, quitLottery, isInitialDone, titleFont, titleFontSyncGlobal } = viewModel
const globalConfig = useStore().globalConfig

const { getTopTitle: topTitle, getTextColor: textColor, getTextSize: textSize, getBackground: homeBackground } = storeToRefs(globalConfig)
</script>

<template>
  <HeaderTitle
    :table-data="tableData"
    :text-size="textSize"
    :text-color="textColor"
    :top-title="topTitle"
    :set-default-person-list="setDefaultPersonList"
    :is-initial-done="isInitialDone"
    :title-font="titleFont"
    :title-font-sync-global="titleFontSyncGlobal"
  />
  <div id="container" ref="containerRef" class="container-3d">
    <OptionButton
      :current-status="currentStatus"
      :table-data="tableData"
      :enter-lottery="enterLottery"
      :start-lottery="startLottery"
      :stop-lottery="stopLottery"
      :continue-lottery="continueLottery"
      :quit-lottery="quitLottery"
    />
  </div>
  <StarsBackground :home-background="homeBackground" />
  <PrizeList class="absolute left-0 top-32" />
</template>

<style scoped lang="scss">
.container-3d {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
}

#container {
    width: 100%;
    height: 100%;
}
</style>
