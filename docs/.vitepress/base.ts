import vueJsx from '@vitejs/plugin-vue-jsx'
// import Vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import terser from '@rollup/plugin-terser'

// import VueMacros from 'unplugin-vue-macros/vite'
import pkg from '../../package.json'
import { search as zhSearch } from './zh'

export const base = defineConfig({
    title: 'Antd-Vue-Dbthor',
    description: 'Antd增强版',
    srcDir: 'md',
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    base: '/docs',
    rewrites: {
        'zh/:rest*': ':rest*',
    },
    vite: {
        plugins: [
            // VueMacros({
            //     plugins: {
            //         vueJsx: vueJsx(),
            //     },
            // }),
            // Vue(),
            vueJsx(),
            ReactivityTransform(),
        ],
        build: {
            rollupOptions: {
                plugins: [terser()],
                external: [
                    'vue',
                    'ant-design-vue',
                    'dayjs',
                    'numeral',
                    'es-toolkit',
                    'big.js',
                    'qs',
                ],
                output: {
                    globals: {
                        vue: 'Vue',
                        'ant-design-vue': 'AntDesignVue',
                        dayjs: 'Dayjs',
                        numeral: 'Numeral',
                        'es-toolkit': 'EsToolkit',
                        'big.js': 'BigJs',
                        qs: 'Qs',
                    },
                },
            },
        },
        resolve: {
            alias: {
                [pkg.name]: resolve(__dirname, '../../src/main.ts'),
                '@src': resolve(__dirname, '../../src'),
                '@comps': resolve(__dirname, '../../src/components'),
                '@hooks': resolve(__dirname, '../../src/hooks'),
                '@config': resolve(__dirname, '../../src/config'),
                '@examples': resolve(__dirname, '../examples'),
            },
        },
        server: {
            host: '0.0.0.0',
            port: 13801,
            proxy: {
                '/api': {
                    target: 'http://116.177.41.89:8888',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '/hnz/admin-api'),
                },
            },
        },
    },

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ThorSmallice/ant-design-pro-vue' },
        ],
        search: {
            provider: 'local',
            options: {
                locales: {
                    ...zhSearch,
                },
            },
        },
    },
})
