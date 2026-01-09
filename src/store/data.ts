import type { IPersonConfig, IPrizeConfig } from '@/types/storeType'

const originUrl = 'https://to2026.xyz'
type IPersonConfigWithoutUuid = Omit<IPersonConfig, 'uuid'>
export const defaultPersonList = <IPersonConfigWithoutUuid[]>
    [
        { uid: 'U100156001', name: 'Zhu Houcong', department: 'Imperial', identity: 'Emperor', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 1, y: 1, id: 0, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156002', name: 'Zhu Zaihou', department: 'Imperial', identity: 'Prince Yu', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 2, y: 1, id: 1, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156003', name: 'Zhu Yijun', department: 'Imperial', identity: 'Prince Yu Heir', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 3, y: 1, id: 2, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156004', name: 'Yan Song', department: 'Cabinet', identity: 'Senior Grand Secretary', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 4, y: 1, id: 3, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156005', name: 'Xu Jie', department: 'Cabinet', identity: 'Junior Grand Secretary', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 5, y: 1, id: 4, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156006', name: 'Zhang Juzheng', department: 'Cabinet', identity: 'Cabinet Member', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 6, y: 1, id: 5, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156007', name: 'Gao Gong', department: 'Cabinet', identity: 'Cabinet Member', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 7, y: 1, id: 6, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156008', name: 'Yan Shifan', department: 'Cabinet', identity: 'Vice Minister of Personnel', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 8, y: 1, id: 7, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156009', name: 'Hu Zongxian', department: 'Official', identity: 'Viceroy of Zhe-Zhi', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 9, y: 1, id: 8, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156010', name: 'Qi Jiguang', department: 'Official', identity: 'Assistant Commissioner', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 10, y: 1, id: 9, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156011', name: 'Gao Hanwen', department: 'Official', identity: 'Prefect of Hangzhou', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 11, y: 1, id: 10, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156012', name: 'Zhao Zhenji', department: 'Official', identity: 'Governor of Jiangsu', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 12, y: 1, id: 11, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156013', name: 'Hai Rui', department: 'Official', identity: 'Magistrate of Chun\'an', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 13, y: 1, id: 12, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156014', name: 'He Maocai', department: 'Official', identity: 'Provincial Commissioner', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 14, y: 1, id: 13, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156015', name: 'Zheng Bichang', department: 'Official', identity: 'Governor of Zhejiang', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 15, y: 1, id: 14, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156016', name: 'Wang Yongji', department: 'Official', identity: 'Magistrate of Jiande', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 16, y: 1, id: 15, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156017', name: 'Tan Lun', department: 'Official', identity: 'Staff Officer', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 17, y: 1, id: 16, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156018', name: 'Zhu Qi', department: 'Official', identity: 'Beizhen Fusi Official', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 1, y: 2, id: 17, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156019', name: 'Luo Longwen', department: 'Official', identity: 'Transmission Commissioner', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 2, y: 2, id: 18, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156020', name: 'Ma Ningyuan', department: 'Official', identity: 'Prefect of Hangzhou', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 3, y: 2, id: 19, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156021', name: 'Tian Youlu', department: 'Official', identity: 'Assistant Magistrate', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 4, y: 2, id: 20, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156022', name: 'Zhou Yunyi', department: 'Official', identity: 'Director of Imperial Observatory', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 5, y: 2, id: 21, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156023', name: 'Commander Jiang', department: 'Official', identity: 'Surveillance Bureau', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 6, y: 2, id: 22, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156024', name: 'Commander Xu', department: 'Official', identity: 'Surveillance Bureau', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 7, y: 2, id: 23, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156025', name: 'Jailer Wang', department: 'Official', identity: 'Head Jailer', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 8, y: 2, id: 24, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156026', name: 'Bailiff Zhao', department: 'Official', identity: 'Head Bailiff', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 9, y: 2, id: 25, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156027', name: 'Lyu Fang', department: 'Eunuch', identity: 'Director of Ceremonial Eunuch', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 10, y: 2, id: 26, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156028', name: 'Yang Jinshui', department: 'Eunuch', identity: 'Imperial Silk Bureau', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 11, y: 2, id: 27, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156029', name: 'Chen Hong', department: 'Eunuch', identity: 'Chief Scribe Eunuch', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 12, y: 2, id: 28, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156030', name: 'Huang Jin', department: 'Eunuch', identity: 'Scribe Eunuch', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 13, y: 2, id: 29, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156031', name: 'Li Xuan', department: 'Eunuch', identity: 'River Supervisor', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 14, y: 2, id: 30, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156032', name: 'Feng Bao', department: 'Eunuch', identity: 'Prince Companion', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 15, y: 2, id: 31, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156033', name: 'Li Shizhen', department: 'Commoner', identity: 'Famous Doctor', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 16, y: 2, id: 32, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156034', name: 'Shen Yishi', department: 'Commoner', identity: 'Merchant', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 17, y: 2, id: 33, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156035', name: 'Inoue Jushiro', department: 'Commoner', identity: 'Japanese Pirate', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 1, y: 3, id: 34, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
        { uid: 'U100156036', name: 'Yunniang', department: 'Commoner', avatar: 'https://img1.baidu.com/it/u=2165937980,813753762&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500', x: 2, y: 3, id: 35, isWin: false, createTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', updateTime: 'Tue Jan 09 2024 23:20:07 GMT+0800 (China Standard Time)', prizeName: [], prizeTime: [], prizeId: [] },
    ]

export const defaultMusicList = [
    {
        id: `Geoff Knorr - China (The Industrial Era).ogg${new Date().getTime().toString()}`,
        name: 'Geoff Knorr - China (The Industrial Era).ogg',
        url: `${originUrl}/resource/audio/Geoff Knorr - China (The Industrial Era).ogg`,
    },
    {
        id: `Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg${new Date().getTime().toString()}`,
        name: 'Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg',
        url: `${originUrl}/resource/audio/Geoff Knorr&Phill Boucher - China (The Atomic Era).ogg`,
    },
    {
        id: `Radetzky March.mp3${new Date().getTime().toString()}`,
        name: 'Radetzky March.mp3',
        url: `${originUrl}/resource/audio/Radetzky March.mp3`,
    },
    {
        id: `Shanghai.mp3${new Date().getTime().toString()}`,
        name: 'Shanghai.mp3',
        url: `${originUrl}/resource/audio/Shanghai.mp3`,
    },
    {
        id: `Waltz No.2.mp3${new Date().getTime().toString()}`,
        name: 'Waltz No.2.mp3',
        url: `${originUrl}/resource/audio/Waltz No.2.mp3`,
    },
    {
        id: `WildChinaTheme.mp3${new Date().getTime().toString()}`,
        name: 'WildChinaTheme.mp3',
        url: `${originUrl}/resource/audio/WildChinaTheme.mp3`,
    },
    {
        id: `Bian Cheng & Landlord's Cat - Beautiful Things-Meeting Youth Again.ogg${new Date().getTime().toString()}`,
        name: 'Bian Cheng & Landlord\'s Cat - Beautiful Things-Meeting Youth Again.ogg',
        url: `${originUrl}/resource/audio/边程&房东的猫 - 美好事物-再遇少年.ogg`,
    },
    {
        id: `Big Qiao & Little Qiao - Hard to Meet, Hard to Part.ogg${new Date().getTime().toString()}`,
        name: 'Big Qiao & Little Qiao - Hard to Meet, Hard to Part.ogg',
        url: `${originUrl}/resource/audio/大乔小乔 - 相见难别亦难.ogg`,
    },
    {
        id: `Do You Want to Dance - New Pants.mp3${new Date().getTime().toString()}`,
        name: 'Do You Want to Dance - New Pants.mp3',
        url: `${originUrl}/resource/audio/你要跳舞吗-新裤子.mp3`,
    },
    {
        id: `Life - Sound Toy.mp3${new Date().getTime().toString()}`,
        name: 'Life - Sound Toy.mp3',
        url: `${originUrl}/resource/audio/生命-声音玩具.mp3`,
    },
    {
        id: `Yu Fei Men - Happy New Year.ogg${new Date().getTime().toString()}`,
        name: 'Yu Fei Men - Happy New Year.ogg',
        url: `${originUrl}/resource/audio/与非门 - Happy New Year.ogg`,
    },

]

export const defaultPrizeList = <IPrizeConfig[]>[
    {
        id: '001',
        name: 'Third Prize',
        sort: 1,
        isAll: false,
        count: 3,
        isUsedCount: 0,
        picture: {
            id: '2',
            name: 'Third Prize',
            url: `${originUrl}/resource/image/image3.png`,
        },
        separateCount: {
            enable: true,
            countList: [],
        },
        desc: 'Third Prize',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '002',
        name: 'Second Prize',
        sort: 2,
        isAll: false,
        count: 2,
        isUsedCount: 0,
        picture: {
            id: '1',
            name: 'Second Prize',
            url: `${originUrl}/resource/image/image2.png`,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: 'Second Prize',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '003',
        name: 'First Prize',
        sort: 3,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '0',
            name: 'First Prize',
            url: `${originUrl}/resource/image/image1.png`,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: 'First Prize',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '004',
        name: 'Grand Prize',
        sort: 4,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '3',
            name: 'Grand Prize',
            url: `${originUrl}/resource/image/image4.png`,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: 'Grand Prize',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
    {
        id: '005',
        name: 'Special Prize',
        sort: 5,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        picture: {
            id: '4',
            name: 'Special Prize',
            url: `${originUrl}/resource/image/image5.png`,
        },
        separateCount: {
            enable: false,
            countList: [],
        },
        desc: 'Special Prize',
        isShow: true,
        isUsed: false,
        frequency: 1,
    },
]
export const defaultCurrentPrize = <IPrizeConfig>{
    id: '001',
    name: 'Third Prize',
    sort: 1,
    isAll: false,
    count: 12,
    isUsedCount: 0,
    picture: {
        id: '2',
        name: 'Third Prize',
        url: `${originUrl}/resource/image/image3.png`,
    },
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: 'Third Prize',
    isShow: true,
    isUsed: false,
    frequency: 1,
}
export const defaultTemporaryPrize = <IPrizeConfig>{
    id: '',
    name: '',
    sort: 0,
    isAll: false,
    count: 1,
    isUsedCount: 0,
    picture: {
        id: '-1',
        name: '',
        url: '',
    },
    separateCount: {
        enable: true,
        countList: [],
    },
    desc: '',
    isShow: false,
    isUsed: false,
    frequency: 1,
}

export const defaultImageList = [
    {
        id: '0',
        name: 'First Prize',
        url: `${originUrl}/resource/image/image1.png`,
    },
    {
        id: '1',
        name: 'Second Prize',
        url: `${originUrl}/resource/image/image2.png`,
    },
    {
        id: '2',
        name: 'Third Prize',
        url: `${originUrl}/resource/image/image3.png`,
    },
    {
        id: '3',
        name: 'Grand Prize',
        url: `${originUrl}/resource/image/image4.png`,
    },
    {
        id: '4',
        name: 'Special Prize',
        url: `${originUrl}/resource/image/image5.png`,
    },
]
export const defaultPatternList = [21, 38, 55, 54, 53, 70, 87, 88, 89, 23, 40, 57, 74, 91, 92, 76, 59, 42, 25, 24, 27, 28, 29, 46, 63, 62, 61, 78, 95, 96, 97, 20, 19, 31, 48, 66, 67, 84, 101, 100, 32, 33, 93, 65, 82, 99]
