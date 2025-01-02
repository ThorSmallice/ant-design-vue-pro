import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import removeConsole from 'vite-plugin-remove-console'
import terser from '@rollup/plugin-terser'
import { compression } from 'vite-plugin-compression2'

export const generateGlobals = (arr: string[]) => {
    const obj = {}
    arr?.forEach?.((key) => {
        const val = key
            .replace(/^@/, '')
            .split(/[-_]/) // 按照 `-` 或 `_` 分割
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每部分首字母大写
            .join('')

        obj[`${key}`] = val
    })
    return obj
}
export const external = [
    'vue',
    'ant-design-vue',
    'dayjs',
    'numeral',
    'es-toolkit',
    'big.js',
    'qs',
    'mime',
    'pinyin-pro',
    'js-file-downloader',
    'axios',
    '@ant-design/icons-vue',
]
export const globals = generateGlobals(external)

export const proxy = {
    '/api': {
        target: 'http://116.177.41.89:8888',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '/hnz/admin-api'),
    },
    '/admin-api': {
        target: 'http://10.10.1.217:48081',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '/admin-api'),
    },
}
export const alias = {
    '@src': resolve(__dirname, './src'),
    '@comps': resolve(__dirname, './src/components'),
    '@hooks': resolve(__dirname, './src/hooks'),
    '@config': resolve(__dirname, './src/config'),
    '@tools': resolve(__dirname, './src/tools'),
    '@examples': resolve(__dirname, './docs/examples'),
    '@docs': resolve(__dirname, './docs'),
    [pkg.name]: resolve(__dirname, './src/main.ts'),
}
export default defineConfig({
    plugins: [
        Vue(),
        vueJsx(),
        dts({
            outDir: 'dist',
            staticImport: true,
            insertTypesEntry: true,
        }),
        compression(),
        cssInjectedByJsPlugin({
            topExecutionPriority: true,
        }),
        removeConsole({
            includes: ['log'],
        }),
        ReactivityTransform(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: pkg.name,
            fileName: (format) => `lib/index.${format}.js`,
        },

        rollupOptions: {
            plugins: [terser()],
            external,
            output: {
                exports: 'named',
                globals,
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 13800,
        proxy,
    },
    resolve: {
        alias,
    },
})
