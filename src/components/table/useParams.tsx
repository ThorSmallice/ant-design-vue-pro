import { isFunction } from 'es-toolkit/predicate'
import { computed, reactive, unref } from 'vue'
import { TableProps } from './index.type'
import dayjs, { Dayjs } from 'dayjs'
import qs from 'qs'
export interface TableUseParmasProps {
    ownPagin: boolean
    fieldsNames: TableProps['fieldsNames']
    params: TableProps['params']
    requestParamsFormatter: TableProps['requestParamsFormatter']
}
export default ({ params, queryFormParams, ownPagin, fieldsNames, requestParamsFormatter }) => {
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
                console.log(queryFormParamsRaw[k])
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

    return {
        pagination,
        resultParams,
    }
}
