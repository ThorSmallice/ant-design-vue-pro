import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'
import VueMacros from 'unplugin-vue-macros/vite'
export default defineConfig({
    plugins: [
        VueMacros({
            plugins: {
                vue: Vue(),
                vueJsx: vueJsx(), // 如有需要
            },
        }),
        dts({
            outDir: 'dist',
            staticImport: true,
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: '@dbthor/ant-design-vue-pro',
            fileName: (format) => `@dbthor/ant-design-vue-pro.${format}.js`,
        },
        rollupOptions: {
            plugins: [],
            external: ['vue', 'ant-design-vue'],
            output: {
                globals: {
                    vue: 'Vue',
                    'ant-design-vue': 'AntDesignVue',
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
