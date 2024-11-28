import { TableProps } from '@src/components'
import { objectType } from '@src/tools/type'

const GlobalComponentDefalutPropsConfig = {
    Table: {
        fieldsNames: objectType<TableProps['fieldsNames']>({
            list: 'list',
            page: 'page',
            pageSize: 'pageSize',
            total: 'total',
        }),
    },
}

export default GlobalComponentDefalutPropsConfig
