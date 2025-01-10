import { AxiosResponse } from 'axios'
import { get, isEmpty, isObject } from 'es-toolkit/compat'
import { isFunction } from 'es-toolkit/predicate'
import { computed, EmitFn, onBeforeUnmount, ref, unref, watch, WatchOptions } from 'vue'
import { RequestParams, TableProps } from './index.type'
export interface TableSourceResult {
    total: number
    list: any[] | null
    page?: number | string
    pageSize?: number | string
}

type AutoRequestOptions = false | WatchOptions
export interface TableUseDataSourceProps {
    api: any
    fieldsNames: TableProps['fieldsNames']
    params: TableProps['params']
    onSourceSuccess: (res: AxiosResponse) => Promise<TableSourceResult>
    onSourceError: (err: Error) => void
    emits?: EmitFn
    dataSource?: any
    autoRequest?: AutoRequestOptions
    onBeforeRequestSource?: (params: { [key: string]: any }) => Promise<any | boolean>
}

export default (props: TableUseDataSourceProps) => {
    const {
        api,
        fieldsNames,
        params,
        onSourceSuccess,
        onSourceError,
        onBeforeRequestSource,
        emits,
        autoRequest,
        dataSource,
    } = $(props)

    const own_source = ref([])
    const loading = ref(false)
    const total = ref(0)
    let controller: AbortController | null

    const getSource = async (params: RequestParams) => {
        if (
            isFunction(onBeforeRequestSource) &&
            (await onBeforeRequestSource?.(params)) === false
        ) {
            return
        }

        controller?.abort?.()
        loading.value = true

        controller = new AbortController()
        api?.list?.(params, {
            signal: controller?.signal,
        })
            ?.then(async (res: AxiosResponse) => {
                const res_trans = await new Promise(async (resolve, reject) => {
                    try {
                        return isFunction(onSourceSuccess)
                            ? resolve(await onSourceSuccess?.(res))
                            : resolve(res)
                    } catch (error) {
                        return reject(error)
                    }
                })

                own_source.value = get(res_trans, fieldsNames.list) || []
                total.value = get(res_trans, fieldsNames.total) || 0
            })
            ?.catch?.((err) => {
                own_source.value = []
                total.value = 0
                onSourceError?.(err)
            })
            ?.finally?.(() => {
                loading.value = false
                controller = null
            })
    }

    const updateSource = async () => {
        api?.list && getSource(params)
    }

    if (autoRequest !== false && isObject(autoRequest) && !dataSource) {
        watch(
            () => params,
            () => {
                requestAnimationFrame(() => {
                    updateSource()
                })
            },
            autoRequest
        )
    }

    const source = computed(() => {
        if (dataSource) return unref(dataSource)
        return unref(own_source)
    })

    onBeforeUnmount(() => {
        controller?.abort?.()
    })
    return {
        source,
        loading,
        total,
        updateSource,
    }
}
