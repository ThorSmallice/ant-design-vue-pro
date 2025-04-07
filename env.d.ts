/// <reference types="unplugin-vue-macros/macros-global" />
declare global {
    var __PKG_NAME__: string
}
declare namespace globalThis {
    export interface JSX {}
}
declare module '*.vue' {
    import { defineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
