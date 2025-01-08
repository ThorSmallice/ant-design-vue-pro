import { computed, nextTick, onBeforeMount, onMounted, Ref, ref, toRaw, watch } from 'vue'
import { TableProps } from './index.type'
import { debounce } from 'es-toolkit'
import { merge } from 'es-toolkit/compat'

export interface TableUseAutoSizeProps {
    scroll: {
        x?: string | 'max-content' | number | true
        y: string | number
        scrollToFirstRowOnChange?: boolean
    }
    wrapContainer: Ref<HTMLElement>
    source?: any[]
    minScollHeight?: number
    autoSizeConfig?: Partial<{
        wait?: number
        options?: {
            signal?: AbortSignal
            edges?: Array<'leading' | 'trailing'>
        }
    }>
    subtractEleClasses?: string[]
    tableRealRegionClasses?: string[]
}
const useAutoSize = (props: TableUseAutoSizeProps) => {
    const {
        scroll,
        source,
        wrapContainer,
        autoSizeConfig,
        subtractEleClasses,
        tableRealRegionClasses,
        minScollHeight = 50,
    } = $(props)
    const y = ref<string | number>(null)
    const x = ref(scroll?.x)
    const scrollToFirstRowOnChange = ref<boolean>(scroll?.scrollToFirstRowOnChange || false)
    const resizeConfig = computed((): TableUseAutoSizeProps['autoSizeConfig'] => {
        return merge(
            {
                wait: 300,
            },
            autoSizeConfig
        )
    })

    const tbodyRegionHeight = ref(0)
    watch(
        y,
        (cur, pre) => {
            if (pre !== cur) {
                console.info(`高度已重置 -- height : ${cur}`)
            }
        },
        {
            deep: true,
        }
    )
    const onResize = debounce(
        async (entries?: any) => {
            await nextTick()
            if (!wrapContainer) return
            const wrapStyles = getComputedStyle(wrapContainer)
            const wrapEffectiveHeight =
                wrapContainer?.clientHeight -
                parseFloat(wrapStyles?.paddingTop) -
                parseFloat(wrapStyles?.paddingBottom)

            const eles_height = subtractEleClasses?.map?.((className) =>
                computedHeight(wrapContainer?.querySelector(`${className}`))
            ) || [0]

            const height = eles_height?.reduce?.(
                (prev, current) => prev - current,
                wrapEffectiveHeight
            )

            const tableRegion_eles_height = tableRealRegionClasses?.map?.((className) =>
                computedHeight(wrapContainer?.querySelector(`${className}`))
            )

            const tableRealHeight = tableRegion_eles_height?.reduce?.((prev, cur) => prev + cur, 0)

            const maxHeight = Math?.max?.(height, minScollHeight)

            if (y.value === maxHeight && maxHeight === tbodyRegionHeight.value) {
                console.warn('与更新前高度一致,已阻止高度重置!')
                return
            }
            tbodyRegionHeight.value = tableRealHeight
            y.value = tableRealHeight > maxHeight ? maxHeight : null
        },
        resizeConfig?.value?.wait,
        resizeConfig?.value?.options
    )
    const resizeObserver = ref<ResizeObserver>(new ResizeObserver(onResize))

    const setY = async () => {
        if (scroll?.y !== 'auto') {
            y.value = scroll?.y
            return
        }

        wrapContainer && resizeObserver?.value?.observe?.(wrapContainer)
    }

    const computedHeight = (ele: HTMLElement) => {
        if (!ele) return 0
        const styles = getComputedStyle(ele)

        return ele?.offsetHeight + parseFloat(styles.marginTop) + parseFloat(styles.marginBottom)
    }

    onMounted(() => {
        setY()
    })
    onBeforeMount(() => {
        wrapContainer && resizeObserver?.value?.disconnect()
    })

    watch(
        () => source,
        (cur, pre) => {
            if (cur?.length === pre?.length) return
            onResize?.()
        }
    )
    return {
        x,
        y,
        scrollToFirstRowOnChange,
        onResize,
    }
}
export default useAutoSize
