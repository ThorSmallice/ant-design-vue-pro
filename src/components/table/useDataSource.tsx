import { deepFreeze } from '@src/tools'
import { AxiosResponse } from 'axios'
import { get } from 'es-toolkit/compat'
import { isFunction } from 'es-toolkit/predicate'
import {
    computed,
    ComputedRef,
    EmitFn,
    onBeforeUnmount,
    onWatcherCleanup,
    Ref,
    ref,
    toValue,
    unref,
    watch,
    WatchCallback,
    WatchHandle,
    WatchOptions,
    WatchSource,
} from 'vue'
import { RequestParams, TableProps } from '.'
export interface TableSourceResult {
    total: number
    list: any[] | null
    page?: number | string
    pageSize?: number | string
}

export type AutoRequestOptions = false | WatchOptions | Ref<false | WatchOptions>
export type AutoRequestDependenciesSource = {
    params: TableProps['params']
    apis: TableProps['apis']
}
export interface TableUseDataSourceProps {
    api: any
    fieldsNames: TableProps['fieldsNames']
    params: TableProps['params']
    onSourceSuccess: (res: AxiosResponse) => Promise<TableSourceResult | false>
    onSourceError: (err: Error) => void
    emits?: EmitFn
    dataSource?: any
    autoRequest?: AutoRequestOptions
    autoRequestDependencies?: <T>(
        obj: AutoRequestDependenciesSource
    ) =>
        | WatchSource<Ref<any> | ComputedRef<any> | (() => T)>
        | WatchSource<Ref<any> | ComputedRef<any>>[]
    onBeforeUpdateSourceFromWatch?: WatchCallback
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
        autoRequestDependencies,
        onBeforeUpdateSourceFromWatch,
        dataSource,
    } = $(props)

    const own_source = ref([])
    const loading = ref(false)
    const total = ref(0)
    let controller: AbortController | null
    const cancelRequest = () => {
        controller?.abort?.()
    }
    const getSource = async (params: RequestParams) => {
        if (
            isFunction(onBeforeRequestSource) &&
            (await onBeforeRequestSource?.(params)) === false
        ) {
            return
        }
        cancelRequest()

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

                total.value = get(res_trans, fieldsNames.total) || 0
                own_source.value =
                    fieldsNames?.total === 'self'
                        ? res_trans
                        : get(res_trans, fieldsNames.list) || []
            })
            ?.catch?.((err) => {
                own_source.value = []
                total.value = 0
                onSourceError?.(err)
            })
            ?.finally?.(() => {
                loading.value = false
            })
    }

    const updateSource = (extraParams?: any) => {
        return api?.list && getSource(Object.assign({}, toValue(params), extraParams || {}))
    }

    const requestDependencies = computed(() => {
        const options = deepFreeze({
            params: { ...(params?.value || {}) },
            apis: { ...(api?.value || {}) },
        })
        return autoRequestDependencies?.(options) || { ...(params?.value || {}) }
    })

    const createListener = () => {
        return watch(
            () => requestDependencies.value,
            (...args) => {
                if (
                    onBeforeUpdateSourceFromWatch &&
                    onBeforeUpdateSourceFromWatch(...args) === false
                ) {
                    return
                }

                onWatcherCleanup(cancelRequest)
                updateSource()
            },
            toValue(autoRequest as WatchOptions)
        )
    }
    const listener = ref<WatchHandle>(null)
    watch(
        () => [autoRequest, props?.dataSource],
        () => {
            if (listener.value) {
                listener.value.stop()
                listener.value = null
            }
            if (autoRequest === false || dataSource) {
                return (own_source.value = dataSource)
            }

            listener.value = createListener()
        },
        {
            immediate: true,
        }
    )

    const source = computed(() => {
        // if (dataSource) return unref(dataSource)
        return unref(own_source)
    })

    onBeforeUnmount(() => {
        cancelRequest()
    })
    return {
        source,
        loading,
        total,
        updateSource,
    }
}
