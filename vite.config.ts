import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'
// import VueMacros from 'unplugin-vue-macros/vite'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import removeConsole from 'vite-plugin-remove-console'
import terser from '@rollup/plugin-terser'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
    plugins: [
        // VueMacros({
        //     plugins: {
        //         vue: Vue(),
        //         vueJsx: vueJsx(), // 如有需要
        //     },
        // }),
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
            name: '@dbthor/ant-design-vue-pro',
            fileName: (format) => `lib/index.${format}.js`,
        },
        rollupOptions: {
            plugins: [terser()],
            external: ['vue', 'ant-design-vue', 'dayjs', 'numeral', 'es-toolkit', 'big.js', 'qs'],
            output: {
                exports: 'named',
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
    server: {
        host: '0.0.0.0',
        port: 13800,
        proxy: {
            '/api': {
                target: 'http://116.177.41.89:8888',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/hnz/admin-api'),
            },
        },
    },
    resolve: {
        alias: {
            '@src': resolve(__dirname, './src'),
            '@comps': resolve(__dirname, './src/components'),
            '@hooks': resolve(__dirname, './src/hooks'),
            '@config': resolve(__dirname, './src/config'),
            '@tools': resolve(__dirname, './src/tools'),
            '@examples': resolve(__dirname, './docs/examples'),
            [pkg.name]: resolve(__dirname, './src/main.ts'),
        },
    },
})
