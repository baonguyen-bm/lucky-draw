import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import i18n from '@/locales/i18n'
// Lazy load Home component to reduce initial bundle size
// Home component includes Three.js (~600KB) and other heavy dependencies

export const configRoutes = {
    path: '/log-lottery/config',
    name: 'Config',
    component: () => import('@/views/Config/index.vue'),
    children: [
        {
            path: '',
            redirect: '/log-lottery/config/person',
        },
        {
            path: '/log-lottery/config/person',
            name: 'PersonConfig',
            component: () => import('@/views/Config/Person/index.vue'),
            meta: {
                title: i18n.global.t('sidebar.personConfiguration'),
                icon: 'person',
            },
            children: [
                {
                    path: '',
                    redirect: '/log-lottery/config/person/all',
                },
                {
                    path: '/log-lottery/config/person/all',
                    name: 'AllPersonConfig',
                    component: () => import('@/views/Config/Person/PersonAll/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.personList'),
                        icon: 'all',
                    },
                },
                {
                    path: '/log-lottery/config/person/already',
                    name: 'AlreadyPerson',
                    component: () => import('@/views/Config/Person/PersonAlready/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.winnerList'),
                        icon: 'already',
                    },
                },
                // {
                //     path:'other',
                //     name:'OtherPersonConfig',
                //     component:()=>import('@/views/Config/Person/OtherPersonConfig.vue'),
                //     meta:{
                //         title:'Other Configuration',
                //         icon:'other'
                //     }
                // }
            ],
        },
        {
            path: '/log-lottery/config/prize',
            name: 'PrizeConfig',
            component: () => import('@/views/Config/Prize/PrizeConfig.vue'),
            meta: {
                title: i18n.global.t('sidebar.prizeConfiguration'),
                icon: 'prize',
            },
        },
        {
            path: '/log-lottery/config/global',
            name: 'GlobalConfig',
            redirect: '/log-lottery/config/global/all',
            meta: {
                title: i18n.global.t('sidebar.globalSetting'),
                icon: 'global',
            },
            children: [
                {
                    path: '/log-lottery/config/global/face',
                    name: 'FaceConfig',
                    component: () => import('@/views/Config/Global/FaceConfig/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.viewSetting'),
                        icon: 'face',
                    },
                },
                {
                    path: '/log-lottery/config/global/image',
                    name: 'ImageConfig',
                    component: () => import('@/views/Config/Global/ImageConfig/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.imagesManagement'),
                        icon: 'image',
                    },
                },
                {
                    path: '/log-lottery/config/global/music',
                    name: 'MusicConfig',
                    component: () => import('@/views/Config/Global/MusicConfig/index.vue'),
                    meta: {
                        title: i18n.global.t('sidebar.musicManagement'),
                        icon: 'music',
                    },
                },
            ],
        },
        {
            path: '/log-lottery/config/readme',
            name: 'Readme',
            component: () => import('@/views/Config/Readme/index.vue'),
            meta: {
                title: i18n.global.t('sidebar.operatingInstructions'),
                icon: 'readme',
            },
        },
    ],
}
const routes = [
    {
        path: '/',
        redirect: '/log-lottery',
    },
    {
        path: '/log-lottery',
        component: Layout,
        redirect: '/log-lottery/home',
        children: [
            {
                path: '/log-lottery/home',
                name: 'Home',
                component: () => import('@/views/Home/index.vue'),
            },
            {
                path: '/log-lottery/demo',
                name: 'Demo',
                component: () => import('@/views/Demo/index.vue'),
            },
            configRoutes,
        ],
    },
]
const envMode = import.meta.env.MODE
const router = createRouter({
    // Read environment variables
    history: (envMode === 'file' || import.meta.env.TAURI_PLATFORM) ? createWebHashHistory() : createWebHistory(),
    routes,
})

export default router
