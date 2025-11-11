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

        return api
            ?.list?.(params, {
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

                return Promise.resolve({
                    total: total.value,
                    list: own_source.value,
                })
            })
            ?.catch?.((err) => {
                own_source.value = []
                total.value = 0
                onSourceError?.(err)

                return Promise.reject({
                    err,
                    total: 0,
                    list: [],
                })
            })
            ?.finally?.(() => {
                loading.value = false
            })
    }

    const updateSource = async (extraParams?: any) => {
        return api?.list && (await getSource(Object.assign({}, toValue(params), extraParams || {})))
    }

    const requestDependencies = computed(() => {
        const options = deepFreeze({
            params: { ...(params?.value || {}) },
            apis: { ...(api?.value || {}) },
        })

        return autoRequestDependencies?.(options) || params || {}
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
        () => [autoRequest, dataSource],
        () => {
            if (listener.value) {
                listener.value.stop()
                listener.value = null
            }
            if (autoRequest === false && dataSource) {
                own_source.value = dataSource
                total.value = dataSource?.length
                return
            }

            if (autoRequest === false) {
                return
            }
            listener.value = createListener()
        },
        {
            immediate: true,
        }
    )

    const source = computed(() => {
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
