/// <reference types="unplugin-vue-macros/macros-global" />
declare global {
    var __PKG_NAME__: string
}
declare module '*.vue' {
    import { defineComponent } from 'vue'
    const component: ReturnType<typeof defineComponent>
    export default component
}
