import { envResolve } from './../../utils/env'
import vueJsx from '@vitejs/plugin-vue-jsx'

import terser from '@rollup/plugin-terser'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import { defineConfig } from 'vitepress'
import { alias, define, external, globals, proxy } from '../../vite.config'
import { search as zhSearch } from './zh'
import resizeObserverPolyfill from 'resize-observer-polyfill'
import { visualizer } from 'rollup-plugin-visualizer'
import pkg from '../../package.json'

// 判断是否在 Node.js 环境中（SSR）
if (typeof window === 'undefined') {
    // 模拟 requestAnimationFrame（这里使用 setTimeout 模拟，16ms 大致等于 60fps）
    global.requestAnimationFrame = (callback) => setTimeout(callback, 16)
    // 引入并赋值 ResizeObserver 的 polyfill
    global.ResizeObserver = resizeObserverPolyfill
}
const { VITE_DOCS_BASE_URL, VITE_REQUEST_BASE_URL } = envResolve()
console.log('🚀 ~ process.env.NODE_ENV base:', process.env.NODE_ENV)

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
    markdown: {
        lineNumbers: true,
    },
    vite: {
        mode: process.env.NODE_ENV,
        envDir: process.cwd(),
        plugins: [vueJsx(), ReactivityTransform()],
        build: {
            target: 'esnext',
            minify: 'terser',
            cssCodeSplit: true,
            rollupOptions: {
                plugins: [
                    terser({
                        compress: {
                            drop_console: true,
                            drop_debugger: true,
                            pure_funcs: ['console.log'],
                        },
                        format: {
                            comments: false,
                        },
                    }),
                    // visualizer({
                    //     open: true,
                    //     gzipSize: true,
                    //     brotliSize: true,
                    // }),
                ],

                output: {
                    globals,
                    manualChunks: (id) => {
                        if (id.includes('node_modules')) {
                            // 更细致的依赖分包策略
                            const libMatch = id.match(/node_modules\/(@[^/]+\/[^/]+|[^/]+)/)
                            if (libMatch) {
                                const packageName = libMatch[1]
                                // 将大体积依赖单独分块
                                const largeLibs = external.concat([pkg.name])
                                if (largeLibs.some((lib) => packageName.startsWith(lib))) {
                                    return packageName
                                }
                            }
                            // 其他依赖合并到 vendor
                            return 'vendor'
                        }
                    },
                },
            },
            chunkSizeWarningLimit: 1500,
        },

        // ssr: {
        //     noExternal: ['dayjs'],
        // },
        resolve: {
            alias,
        },
        server: {
            host: '0.0.0.0',
            port: 13801,
            proxy,
        },
        define: define,
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
