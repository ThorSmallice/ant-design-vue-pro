import { defineConfig } from 'vitepress'

import { base } from './base'
import { zh } from './zh'
import { en } from './en'
export default defineConfig({
    ...base,
    locales: {
        root: { label: '简体中文', ...zh },
        en: { label: 'English', ...en },
    },
})
