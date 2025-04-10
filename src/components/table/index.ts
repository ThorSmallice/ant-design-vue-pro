import { App } from 'vue'
import Table from './table.vue'
export * from './index.d'
export * from './control'
export { default as TableUseAutoSize } from './useAutoSize'
Table.install = (app: App) => {
    app?.component?.(Table?.name!, Table)
    return app
}
export default Table
