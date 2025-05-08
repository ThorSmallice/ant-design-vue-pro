import { TableConfig } from 'antd-vue-dbthor'

export default () => {
    TableConfig.indexColumnWidth = 40
    TableConfig.controlColumnWidth = 150
    TableConfig.cuFormProps = {
        labelCol: {
            span: 4,
        },
    }
    TableConfig.fieldsNames = {
        ...TableConfig.fieldsNames,
        list: ['data', 'data', 'list'],
        total: ['data', 'data', 'total'],
        details: ['data', 'data'],
    }
}
