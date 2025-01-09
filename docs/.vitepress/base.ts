import vueJsx from '@vitejs/plugin-vue-jsx'

import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import terser from '@rollup/plugin-terser'
import { external, globals, proxy, alias } from '../../vite.config'
import { envResolve } from '../../utils/env'
import { search as zhSearch } from './zh'

const { VITE_DOCS_BASE_URL } = envResolve()
export const base = defineConfig({
    title: 'Antd-Vue-Dbthor',
    description: 'Antd增强版',
    srcDir: 'md',
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    base: VITE_DOCS_BASE_URL,
    rewrites: {
        'zh/:rest*': ':rest*',
    },
    vite: {
        plugins: [vueJsx(), ReactivityTransform()],
        build: {
            rollupOptions: {
                plugins: [terser()],
                external,

                output: {
                    globals,
                },
            },
        },
        resolve: {
            alias,
        },
        server: {
            host: '0.0.0.0',
            port: 13801,

            proxy,
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
