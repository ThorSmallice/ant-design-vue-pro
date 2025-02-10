import vueJsx from '@vitejs/plugin-vue-jsx'

import terser from '@rollup/plugin-terser'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import { defineConfig } from 'vitepress'
import { envResolve } from '../../utils/env'
import { alias, define, external, globals, proxy } from '../../vite.config'
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
    head: [
        [
            'link',
            { rel: 'icon', type: 'image/svg+xml', href: `${VITE_DOCS_BASE_URL}images/logo.svg` },
        ],
    ],
    vite: {
        plugins: [vueJsx(), ReactivityTransform()],
        build: {
            rollupOptions: {
                plugins: [terser()],

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
        // define: define,
    },

    themeConfig: {
        logo: { src: '/images/logo.svg', width: 24, height: 24 },
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
