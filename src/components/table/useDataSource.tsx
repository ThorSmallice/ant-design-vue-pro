import { onBeforeMount, reactive, ref, watchEffect } from 'vue'
import { TableProps } from './index.type'

export interface TableUseDataSourceProps {
    apis: TableProps['apis']
    ownPagin: boolean
    fieldsNames: TableProps['fieldsNames']
    pagination: any
}

export default ({ apis, ownPagin, fieldsNames, pagination }: TableUseDataSourceProps) => {
    const source = reactive([])
    const loading = ref(false)
    const total = ref(100)

    const getSource = async () => {
        if (loading) return
        apis?.list?.()?.then()?.catch?.()?.finally?.()
    }
    const updateSource = () => {
        const paginParams = ownPagin
            ? {
                  [fieldsNames.page]: pagination?.page,
                  [fieldsNames.pageSize]: pagination?.pageSize,
              }
            : {}
    }

    watchEffect(() => {
        updateSource()
    }, {})
    onBeforeMount(() => {})
    return {
        source,
        loading,
        total,
    }
}
