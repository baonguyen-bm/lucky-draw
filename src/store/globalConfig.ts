import type { IImage, IMusic } from '@/types/storeType'
import { defineStore } from 'pinia'
import i18n, { browserLanguage } from '@/locales/i18n'
import { defaultImageList, defaultMusicList, defaultPatternList } from './data'
// import { IPrizeConfig } from '@/types/storeType';
export const useGlobalConfig = defineStore('global', {
    state() {
        return {
            globalConfig: {
                rowCount: 17,
                isSHowPrizeList: true,
                isShowAvatar: false,
                topTitle: i18n.global.t('data.defaultTitle'),
                language: browserLanguage,
                definiteTime: null as number | null,
                winMusic: false,
                theme: {
                    name: 'dracula',
                    detail: { primary: '#0f5fd3' },
                    cardColor: '#ff79c6',
                    cardWidth: 140,
                    cardHeight: 200,
                    textColor: '#00000000',
                    luckyCardColor: '#ECB1AC',
                    textSize: 30,
                    patternColor: '#1b66c9',
                    patternList: defaultPatternList as number[],
                    background: {}, // Background color or image
                    font: 'sans-serif',
                    titleFont: 'sans-serif',
                    titleFontSyncGlobal: true,
                },
                musicList: defaultMusicList as IMusic[],
                imageList: defaultImageList as IImage[],
            },
            currentMusic: {
                item: defaultMusicList[0] as IMusic,
                paused: true,
            },
        }
    },
    getters: {
        // Get all configurations
        getGlobalConfig(state) {
            return state.globalConfig
        },
        // Get title
        getTopTitle(state) {
            return state.globalConfig.topTitle
        },
        // Get row count
        getRowCount(state) {
            return state.globalConfig.rowCount
        },
        // Get theme
        getTheme(state) {
            return state.globalConfig.theme
        },
        // Get card color
        getCardColor(state) {
            return state.globalConfig.theme.cardColor
        },
        // Get winning color
        getLuckyColor(state) {
            return state.globalConfig.theme.luckyCardColor
        },
        // Get text color
        getTextColor(state) {
            return state.globalConfig.theme.textColor
        },
        // Get card dimensions
        getCardSize(state) {
            return {
                width: state.globalConfig.theme.cardWidth,
                height: state.globalConfig.theme.cardHeight,
            }
        },
        // Get text size
        getTextSize(state) {
            return state.globalConfig.theme.textSize
        },
        // Get pattern color
        getPatterColor(state) {
            return state.globalConfig.theme.patternColor
        },
        // Get pattern list
        getPatternList(state) {
            return state.globalConfig.theme.patternList
        },
        // Get music list
        getMusicList(state) {
            return state.globalConfig.musicList
        },
        // Get current music
        getCurrentMusic(state) {
            return state.currentMusic
        },
        // Get image list
        getImageList(state) {
            return state.globalConfig.imageList
        },
        // Get whether to show prize list
        getIsShowPrizeList(state) {
            return state.globalConfig.isSHowPrizeList
        },
        // Get current language
        getLanguage(state) {
            return state.globalConfig.language
        },
        // Get background settings
        getBackground(state) {
            return state.globalConfig.theme.background
        },
        // Get font
        getFont(state) {
            return state.globalConfig.theme.font
        },
        // Get title font
        getTitleFont(state) {
            return state.globalConfig.theme.titleFont
        },
        // Get title font sync global
        getTitleFontSyncGlobal(state) {
            return state.globalConfig.theme.titleFontSyncGlobal
        },
        // Get whether to show avatar
        getIsShowAvatar(state) {
            return state.globalConfig.isShowAvatar
        },
        // Get scheduled draw time
        getDefiniteTime(state) {
            return state.globalConfig.definiteTime
        },
        // Whether to play winning music
        getWinMusic(state) {
            return state.globalConfig.winMusic
        },
    },
    actions: {
        // Set global configuration
        setGlobalConfig(data: any) {
            this.globalConfig = data
        },
        // Set rowCount
        setRowCount(rowCount: number) {
            this.globalConfig.rowCount = rowCount
        },
        // Set title
        setTopTitle(topTitle: string) {
            this.globalConfig.topTitle = topTitle
        },
        // Set theme
        setTheme(theme: any) {
            const { name } = theme
            this.globalConfig.theme.name = name
        },
        // Set card color
        setCardColor(cardColor: string) {
            this.globalConfig.theme.cardColor = cardColor
        },
        // Set winning color
        setLuckyCardColor(luckyCardColor: string) {
            this.globalConfig.theme.luckyCardColor = luckyCardColor
        },
        // Set text color
        setTextColor(textColor: string) {
            this.globalConfig.theme.textColor = textColor
        },
        // Set card dimensions
        setCardSize(cardSize: { width: number, height: number }) {
            this.globalConfig.theme.cardWidth = cardSize.width
            this.globalConfig.theme.cardHeight = cardSize.height
        },
        // Set text size
        setTextSize(textSize: number) {
            this.globalConfig.theme.textSize = textSize
        },
        // Set pattern color
        setPatterColor(patterColor: string) {
            this.globalConfig.theme.patternColor = patterColor
        },
        // Set pattern list
        setPatternList(patternList: number[]) {
            this.globalConfig.theme.patternList = patternList
        },
        // Reset pattern list
        resetPatternList() {
            this.globalConfig.theme.patternList = defaultPatternList
        },
        // Add music
        addMusic(music: IMusic) {
            // Validate if music exists by name field
            for (let i = 0; i < this.globalConfig.musicList.length; i++) {
                if (this.globalConfig.musicList[i].name === music.name) {
                    return
                }
            }
            this.globalConfig.musicList.push(music)
        },
        // Remove music
        removeMusic(musicId: string) {
            for (let i = 0; i < this.globalConfig.musicList.length; i++) {
                if (this.globalConfig.musicList[i].id === musicId) {
                    this.globalConfig.musicList.splice(i, 1)
                    break
                }
            }
        },
        // Set current playing music
        setCurrentMusic(musicItem: IMusic, paused: boolean = true) {
            this.currentMusic = {
                item: musicItem,
                paused,
            }
        },
        // Reset music list
        resetMusicList() {
            this.globalConfig.musicList = JSON.parse(JSON.stringify(defaultMusicList)) as IMusic[]
        },
        // Clear music list
        clearMusicList() {
            this.globalConfig.musicList = [] as IMusic[]
        },
        // Add image
        addImage(image: IImage) {
            for (let i = 0; i < this.globalConfig.imageList.length; i++) {
                if (this.globalConfig.imageList[i].name === image.name) {
                    return
                }
            }
            this.globalConfig.imageList.push(image)
        },
        // Remove image
        removeImage(imageId: string) {
            for (let i = 0; i < this.globalConfig.imageList.length; i++) {
                if (this.globalConfig.imageList[i].id === imageId) {
                    this.globalConfig.imageList.splice(i, 1)
                    break
                }
            }
        },
        // Reset image list
        resetImageList() {
            this.globalConfig.imageList = defaultImageList as IImage[]
        },
        // Clear image list
        clearImageList() {
            this.globalConfig.imageList = [] as IImage[]
        },
        // Set whether to show prize list
        setIsShowPrizeList(isShowPrizeList: boolean) {
            this.globalConfig.isSHowPrizeList = isShowPrizeList
        },
        // Set language
        setLanguage(language: string) {
            this.globalConfig.language = language
            i18n.global.locale.value = language
        },
        // Set background image
        setBackground(background: any) {
            this.globalConfig.theme.background = background
        },
        // Set font
        setFont(font: any) {
            this.globalConfig.theme.font = font
        },
        // Set title font
        setTitleFont(titleFont: any) {
            this.globalConfig.theme.titleFont = titleFont
        },
        // Set sync global font
        setTitleFontSyncGlobal(titleFontSyncGlobal: boolean) {
            this.globalConfig.theme.titleFontSyncGlobal = titleFontSyncGlobal
        },
        // Set whether to show avatar
        setIsShowAvatar(isShowAvatar: boolean) {
            this.globalConfig.isShowAvatar = isShowAvatar
        },
        // Set scheduled draw time
        setDefiniteTime(definiteTime: number | null) {
            this.globalConfig.definiteTime = definiteTime
        },
        // Set whether to play winning music
        setIsPlayWinMusic(winMusic: boolean) {
            this.globalConfig.winMusic = winMusic
        },
        // Reset all configurations
        reset() {
            this.globalConfig = {
                rowCount: 17,
                winMusic: false,
                isSHowPrizeList: true,
                isShowAvatar: false,
                topTitle: i18n.global.t('data.defaultTitle'),
                language: browserLanguage,
                definiteTime: null,
                theme: {
                    name: 'dracula',
                    detail: { primary: '#0f5fd3' },
                    cardColor: '#ff79c6',
                    cardWidth: 140,
                    cardHeight: 200,
                    textColor: '#00000000',
                    luckyCardColor: '#ECB1AC',
                    textSize: 30,
                    patternColor: '#1b66c9',
                    patternList: defaultPatternList as number[],
                    background: {}, // Background color or image
                    font: 'sans-serif',
                    titleFont: 'sans-serif',
                    titleFontSyncGlobal: true,
                },
                musicList: defaultMusicList as IMusic[],
                imageList: defaultImageList as IImage[],
            }
            this.currentMusic = {
                item: defaultMusicList[0],
                paused: true,
            }
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                // If stored in localStorage
                storage: localStorage,
                key: 'globalConfig',
                paths: ['globalConfig'],
            },
        ],
    },
})
