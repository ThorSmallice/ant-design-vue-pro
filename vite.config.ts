import terser from '@rollup/plugin-terser'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import { resolve } from 'path'
import { defineConfig, ServerOptions } from 'vite'
import { compression } from 'vite-plugin-compression2'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import removeConsole from 'vite-plugin-remove-console'
import pkg from './package.json'
import { envResolve } from './utils/env'

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
export const external = Object.keys(pkg.peerDependencies)
export const globals = generateGlobals(external)

export const proxy: ServerOptions['proxy'] = {
    '/api': {
        target: 'https://www.dbice.cn',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '/admin-server/api/v1'),
    },
    '/admin-api': {
        target: 'https://iot.scet.com.cn',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/admin-api/, '/micro-dev-api'),
    },
    '/test-api': {
        target: 'http://localhost:30001',
        changeOrigin: false,
        rewrite: (path: string) => path.replace(/^\/test-api/, '/api/v1'),
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
    '@/': resolve(__dirname, './'),
    [pkg.name]: resolve(
        __dirname,
        process.env.NODE_ENV === 'production' ? './dist/lib/index.es.js' : './src/main.ts'
    ),
}

export const define = {
    __PKG_NAME__: JSON.stringify(pkg.name),
}

const { VITE_DOCS_BASE_URL } = envResolve()

export default defineConfig({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
    plugins: [
        Vue(),
        vueJsx(),
        dts({
            outDir: 'dist',
            staticImport: true,
            insertTypesEntry: true,
            exclude: ['node_modules'],
        }),
        compression(),
        cssInjectedByJsPlugin({
            topExecutionPriority: true,
        }),
        removeConsole({
            includes: ['log'],
        }),
        ReactivityTransform({
            version: 3,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: pkg.name,
            fileName: (format) => {
                return `lib/index.${format}.js`
            },
        },

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
            ],
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
    define,
})
