import { AxiosResponse } from 'axios'
import { get } from 'es-toolkit/compat'
import { isFunction } from 'es-toolkit/predicate'
import { EmitFn, ref, watch } from 'vue'
import { RequestParams, TableProps } from './index.type'
export interface TableSourceResult {
    total: number
    list: any[] | null
    page?: number | string
    pageSize?: number | string
}

export interface TableUseDataSourceProps {
    api: any
    fieldsNames: TableProps['fieldsNames']
    params: TableProps['params']
    onSourceSuccess: (res: AxiosResponse) => Promise<TableSourceResult>
    onSourceError: (err: Error) => void
    emits?: EmitFn
    dataSource?: any
}

let controller: AbortController

export default (props: TableUseDataSourceProps) => {
    const { api, fieldsNames, dataSource, params, onSourceSuccess, onSourceError, emits } = $(props)

    const source = ref([])
    const loading = ref(false)
    const total = ref(0)

    const getSource = async (params: RequestParams) => {
        controller?.abort?.()
        loading.value = true
        controller = new AbortController()
        api?.list?.(params, {
            signal: controller.signal,
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

    const updateSource = async () => {
        if (dataSource) {
            return (source.value = dataSource)
        }
        api?.list && getSource(params)
    }

    watch(
        () => params,
        () => {
            requestAnimationFrame(() => {
                updateSource()
            })
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
