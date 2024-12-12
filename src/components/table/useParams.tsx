import dayjs, { Dayjs } from 'dayjs'
import { isFunction } from 'es-toolkit/predicate'
import qs from 'qs'
import { computed, reactive, unref } from 'vue'
import { TableProps } from './index.type'
export interface TableUseParmasProps {
    ownPagin: boolean

    queryFormParams: {
        [key: string]: any
    }
    fieldsNames: TableProps['fieldsNames']
    params: TableProps['params']
    requestParamsFormatter: TableProps['requestParamsFormatter']
}
export default (props: TableUseParmasProps) => {
    const { params, queryFormParams, ownPagin, fieldsNames, requestParamsFormatter } = $(props)

    const pagination = reactive({
        page: 1,
        pageSize: 10,
    })
    const resultParams = computed(() => {
        const paginParams = ownPagin
            ? {
                  [fieldsNames.page]: pagination?.page,
                  [fieldsNames.pageSize]: pagination?.pageSize,
              }
            : {}

        const queryFormParamsRaw = unref({ ...queryFormParams.values })

        for (let k in queryFormParamsRaw) {
            if (dayjs.isDayjs(queryFormParamsRaw[k])) {
                queryFormParamsRaw[k] = queryFormParamsRaw[k].format('YYYY-MM-DD HH:mm:ss')
            }
            if (queryFormParamsRaw[k]?.every?.((t: any) => dayjs.isDayjs(t))) {
                queryFormParamsRaw[k] = queryFormParamsRaw[k]?.map?.((t: Dayjs) =>
                    t?.format?.('YYYY-MM-DD HH:mm:ss')
                )
            }
        }

        const requestParams = unref({
            ...queryFormParamsRaw,
            ...params,
            ...paginParams,
        })

        return isFunction(requestParamsFormatter)
            ? requestParamsFormatter?.(requestParams)
            : qs.parse(requestParams)
    })

    return { resultParams, pagination }
}
