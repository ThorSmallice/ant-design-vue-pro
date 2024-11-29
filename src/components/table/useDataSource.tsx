import { get } from 'es-toolkit/compat'
import { isFunction } from 'es-toolkit/predicate'
import { computed, EmitFn, ref, watch } from 'vue'
import { requestParams, TableProps } from './index.type'
export interface TableUseDataSourceProps {
    api: TableProps['apis']['list']
    ownPagin: boolean
    fieldsNames: TableProps['fieldsNames']
    pagination: any
    params: TableProps['params']
    requestParamsFormatter: TableProps['requestParamsFormatter']
    onSourceSuccess: TableProps['onSourceSuccess']
    onSourceError: TableProps['onSourceError']
    emit: EmitFn
}

let controller: AbortController

export default ({
    api,
    ownPagin,
    fieldsNames,
    pagination,
    params,
    requestParamsFormatter,
    onSourceSuccess,
    onSourceError,
}: TableUseDataSourceProps) => {
    const source = ref([])
    const loading = ref(false)
    const total = ref(0)

    const getSource = async (params: requestParams) => {
        controller?.abort?.()
        loading.value = true
        controller = new AbortController()
        api?.(params, {
            signal: controller.signal,
        })
            ?.then(async (res) => {
                const res_trans = await new Promise(async (resolve, reject) => {
                    try {
                        return isFunction(onSourceSuccess)
                            ? resolve(await onSourceSuccess?.(res))
                            : resolve(res)
                    } catch (error) {
                        return reject(error)
                    }
                })

                source.value = get(res_trans, fieldsNames.list) || []
                total.value = get(res_trans, fieldsNames.total) || 0
            })
            ?.catch?.((err) => {
                source.value = []
                total.value = 0
                onSourceError?.(err)
            })
            ?.finally?.(() => {
                loading.value = false
            })
    }

    const resultParams = computed(() => {
        const paginParams = ownPagin
            ? {
                  [fieldsNames.page]: pagination?.page,
                  [fieldsNames.pageSize]: pagination?.pageSize,
              }
            : {}

        const requestParams = {
            ...params,
            ...paginParams,
        }

        return isFunction(requestParamsFormatter)
            ? requestParamsFormatter?.(requestParams)
            : requestParams
    })

    const updateSource = async () => {
        getSource(resultParams.value)
    }

    watch(
        [resultParams],
        () => {
            updateSource()
        },
        {
            immediate: true,
        }
    )
    return {
        source,
        loading,
        total,
        updateSource,
    }
}
