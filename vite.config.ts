import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
    plugins: [
        Vue(),
        vueJsx({}),
        dts({
            outDir: 'dist',
            staticImport: true,
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
        },
        rollupOptions: {
            plugins: [],
            external: ['vue', 'ant-design-vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 13800,
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
