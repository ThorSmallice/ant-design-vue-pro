import { TableConfig } from 'antd-vue-dbthor'

export default () => {
    TableConfig.indexColumnWidth = 40
    TableConfig.controlColumnWidth = 80
    TableConfig.cuFormProps = {
        labelCol: {
            span: 4,
        },
    }
    TableConfig.fieldsNames = {
        ...TableConfig.fieldsNames,
        list: ['data', 'list'],
        total: ['data', 'total'],
    }
}
