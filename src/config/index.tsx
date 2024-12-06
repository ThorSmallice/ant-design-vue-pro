import { TableProps } from '@src/components'

export const TableConfig: TableProps = {
    fieldsNames: {
        list: 'list',
        page: 'page',
        pageSize: 'pageSize',
        total: 'total',
    },
}

const GlobalComponentDefalutPropsConfig = {
    Table: TableConfig,
}

export default GlobalComponentDefalutPropsConfig
