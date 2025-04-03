import dayjs, { Dayjs, isDayjs } from 'dayjs'

import { isFunction } from 'es-toolkit/predicate'
import qs from 'qs'
import { computed, ComputedRef, Reactive, reactive, Ref, toRaw, unref, watch } from 'vue'
import { TableProps } from './index.type'
type paramsObj = {
    [key: string]: any
}
export interface TableUseParmasProps {
    ownPagin: boolean
    ownPaginProps?: TableProps['ownPaginProps']
    queryFormTimeFormat?: string
    queryFormParams: {
        [key: string]: any
    }
    fieldsNames: TableProps['fieldsNames']
    params: Ref<paramsObj> | Reactive<paramsObj> | ComputedRef<paramsObj>
    requestParamsFormatter: TableProps['requestParamsFormatter']
}
export default (props: TableUseParmasProps) => {
    const {
        params,
        queryFormParams,
        ownPagin,
        ownPaginProps,
        queryFormTimeFormat,
        fieldsNames,
        requestParamsFormatter,
    } = $(props)

    const pagination = reactive({
        page: ownPaginProps?.defaultCurrent || 1,
        pageSize: ownPaginProps?.defaultPageSize || 10,
    })

    const resetPage = () => {
        pagination.page = 1
    }

    watch(
        () => [queryFormParams?.values, params],
        (cur, pre) => {
            const preQueryFormParamsRaw = unref(pre?.[0])
            const preParamsRaw = unref(pre?.[1])

            const curQueryFormParamsRaw = unref(cur?.[0])
            const curParamsRaw = unref(cur?.[1])

            const preResparams = { ...(preQueryFormParamsRaw || {}), ...(preParamsRaw || {}) }
            const curResparams = { ...(curQueryFormParamsRaw || {}), ...(curParamsRaw || {}) }

            for (let k in curResparams) {
                if (!isSameValue(curResparams[k], preResparams[k])) {
                    resetPage()
                    break
                }
            }
        },
        { deep: true }
    )

    const resultParams = computed(() => {
        const paginParams = ownPagin
            ? {
                  [fieldsNames.page]: pagination?.page,
                  [fieldsNames.pageSize]: pagination?.pageSize,
              }
            : {}

        const queryFormParamsRaw = unref({ ...queryFormParams.values })
        const paramsValue = unref(params)
        for (let k in queryFormParamsRaw) {
            if (dayjs.isDayjs(queryFormParamsRaw[k])) {
                queryFormParamsRaw[k] = queryFormParamsRaw[k].format(queryFormTimeFormat)
            }
            if (queryFormParamsRaw[k]?.every?.((t: any) => dayjs.isDayjs(t))) {
                if (k?.split('-')?.length === 2) {
                    const ks = k?.split?.('-')
                    queryFormParamsRaw[k]?.forEach?.(
                        (t: Dayjs, i: number) =>
                            (queryFormParamsRaw[ks[i]] = t?.format?.(queryFormTimeFormat))
                    )
                    delete queryFormParamsRaw[k]
                    break
                }

                queryFormParamsRaw[k] = queryFormParamsRaw[k]?.map?.((t: Dayjs) =>
                    t?.format?.(queryFormTimeFormat)
                )
            }
        }

        const requestParams = unref({
            ...queryFormParamsRaw,
            ...paramsValue,
            ...paginParams,
        })

        return isFunction(requestParamsFormatter)
            ? requestParamsFormatter?.(JSON.parse(JSON.stringify(requestParams)))
            : qs.parse(requestParams)
    })

    return { resultParams, pagination }
}

const isSameValue = (a: unknown, b: unknown) => {
    if (isDayjs(a) || isDayjs(b)) {
        return (a as Dayjs)?.isSame(b as Dayjs)
    }

    return a === b
}
