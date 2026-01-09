/// <reference types="vitest" />

import { createRequire } from 'node:module'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/

const require = createRequire(import.meta.url)
const process = require('node:process')

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, __dirname)
    const chunkName = mode === 'prebuild' ? '[name]' : 'chunk'
    return {
        base: (mode === 'file' || process.env.TAURI_ENV_PLATFORM) ? './' : '/log-lottery/',
        plugins: [
            vue(),
            tailwindcss(),
            mode === 'file'
                ? legacy({
                    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
                })
                : null,
            // vueDevTools(),
            viteCompression({
                verbose: true,
                disable: false,
                threshold: 10240,
                algorithm: 'gzip',
                ext: '.gz',
            }),
            mode === 'prebuild' ? visualizer({
                emitFile: true, // Whether to touch
                filename: 'test.html', // Analysis page filename
                open: true, // Open generated file in default browser
                gzipSize: true, // Collect gzip size and show in chart
                brotliSize: true, // Collect brotli size and show in chart
            }) : null,

            createSvgIconsPlugin({
                // Directory for icons to be cached
                iconDirs: [path.resolve(process.cwd(), 'src/icons')],
                // symbolId format
                symbolId: 'icon-[dir]-[name]',
            }),
            AutoImport({
                resolvers: [
                    // Auto import icon components
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
                dts: path.resolve(path.resolve(__dirname, 'src'), 'auto-imports.d.ts'),
            }),
            Components({
                resolvers: [
                    // Auto register icon components
                    IconsResolver({
                        enabledCollections: ['ep'],
                    }),
                ],
                dts: path.resolve(path.resolve(__dirname, 'src'), 'components.d.ts'),
            }),
            Icons({
                autoInstall: true,
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/style/global.scss" as *;',
                },
            },
            // postcss: {
            //     plugins: [
            //         require('tailwindcss'),
            //         require('autoprefixer'),
            //     ]
            // }
        },
        clearScreen: false,
        server: {
            host: 'localhost',
            port: 6719,
            strictPort: true,
            watch: {
                // Tell Vite to ignore `src-tauri` directory
                ignored: ['**/src-tauri/**'],
            },
            proxy: {
                '/api': {
                    target: env.VITE_BASE_URL,
                    // Whether to cross-domain
                    changeOrigin: true,
                    // Path rewrite
                    rewrite: path => path.replace(/^\/api/, ''),
                },
            },
        },
        // Add extra prefixes for current build target to make Tauri env variables accessible in client code
        envPrefix: ['VITE_', 'TAURI_ENV_*'],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        build: {
            outDir: mode === 'file' ? 'dist-file' : 'dist',
            // Tauri uses Chromium on Windows, WebKit on macOS and Linux
            // target: (process.env.TAURI_ENV_PLATFORM && mode !== 'file')
            //     ? (process.env.TAURI_ENV_PLATFORM === 'windows' ? 'chrome105' : 'safari13')
            //     : 'es2020', // Higher JS support for regular frontend
            minify: process.env.TAURI_ENV_PLATFORM
                ? (!process.env.TAURI_ENV_DEBUG ? 'esbuild' : false)
                : 'terser', // Recommended to use terser for better compression
            terserOptions: {
                compress: {
                    // Remove console in production
                    drop_console: true,
                    drop_debugger: true,
                },
            },
            //   Disable file calculation
            reportCompressedSize: false,
            //   Disable map file generation to reduce bundle size
            sourcemap: process.env.NODE_ENV === 'development' || !!process.env.TAURI_ENV_DEBUG, // Should be off in production
            rollupOptions: {
                output: {
                    chunkFileNames: `js/${chunkName}-[hash].js`, // Filename for chunks
                    entryFileNames: `js/${chunkName}-[hash].js`, // Entry point filename
                    assetFileNames: `[ext]/${chunkName}-[hash].[ext]`, // Asset filenames (fonts, images, etc.)
                    manualChunks(id: any): string {
                        if (id.includes('node_modules')) {
                            return id
                                .toString()
                                .split('node_modules/')[1]
                                .split('/')[0]
                                .toString()
                        }
                    },
                },
            },
        },
        // Must add /// <reference types="vitest" /> above or there will be type errors
        test: {
            globals: true, // --> 0.8.1+ please change to globals
            environment: 'jsdom',
            // include: ['**/__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
            // passWithNoTests: true,
            testTimeout: 10000,
            transformMode: {
                web: [/\.[jt]sx$/],
            },
        },
    }
})
