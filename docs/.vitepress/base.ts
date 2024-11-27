import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import pkg from '../../package.json'
import { search as zhSearch } from './zh'
export const base = defineConfig({
    title: 'Ant-Design-Pro-Vue',
    description: 'Antd增强版',
    srcDir: 'md',
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    base: '/docs/',
    rewrites: {
        'zh/:rest*': ':rest*',
    },
    vite: {
        plugins: [vueJsx({})],
        resolve: {
            alias: {
                [pkg.name]: resolve(__dirname, '../../src/components/components.ts'),
                '@src': resolve(__dirname, '../../src'),
                '@comps': resolve(__dirname, '../../src/components'),
                '@hooks': resolve(__dirname, '../../src/hooks'),
                '@examples': resolve(__dirname, '../examples'),
            },
        },
        server: {
            host: '0.0.0.0',
            port: 13801,
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
