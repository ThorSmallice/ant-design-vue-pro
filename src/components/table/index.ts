import { App } from 'vue'
import Table from './table.vue'
export type * from './index.type'
export type * from './control'
Table.install = (app: App) => {
    app?.component?.(Table?.name!, Table)
    return app
}
export default Table
