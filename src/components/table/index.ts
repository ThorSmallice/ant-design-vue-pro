import { App } from 'vue'
import Table from './table.vue'
export * from './index.type'
export * from './control'
Table.install = (app: App) => {
    app?.component?.(Table?.name!, Table)
    return app
}
export default Table
