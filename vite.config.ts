import { defineConfig } from 'vite'
import { resolve } from 'path'
import compression from 'vite-plugin-compression2'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
// import writeRoutes from './script/write-route'
// import writeComps from './script/write-exports'
// writeComps()
// writeRoutes()
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
            // fileName: (format) => `maptalks-react.${format}.js`,
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
        },
    },
})
