import { TableProps } from '@src/components'
import { objectType } from '@src/tools/type'

export const TableConfig = {
    fieldsNames: objectType<TableProps['fieldsNames']>({
        list: 'list',
        page: 'page',
        pageSize: 'pageSize',
        total: 'total',
    }),
}

const GlobalComponentDefalutPropsConfig = {
    Table: TableConfig,
}

export default GlobalComponentDefalutPropsConfig
