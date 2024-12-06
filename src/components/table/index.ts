import { App } from 'vue'
import Table from './table.vue'
export type * from './index.type'
Table.install = (app: App) => {
    app?.component?.(Table?.name!, Table)
    return app
}
export default Table
