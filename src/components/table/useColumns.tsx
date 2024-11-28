import { computed } from 'vue'
import { TableProps } from './index.type'

export default ({ columns }) => {
    const resColumns = computed<TableProps['columns']>(() => {
        return columns as TableProps['columns']
    })
    return {
        resColumns,
    }
}
