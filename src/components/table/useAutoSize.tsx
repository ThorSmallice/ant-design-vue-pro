import { ColumnProps } from 'ant-design-vue/es/table'
import { debounce } from 'es-toolkit'
import { has, isNumber, isString, merge } from 'es-toolkit/compat'
import { computed, nextTick, onBeforeMount, onMounted, Ref, ref, watch } from 'vue'

export interface TableUseAutoSizeProps {
    scroll: {
        x?: string | 'max-content' | number | true
        y?: string | number | 'auto'
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
    isTree?: boolean
    subtractEleClasses?: string[]
    tableRealRegionClasses?: string[]
    tableScrollWrapClass?: string
    resColumns?: ColumnProps[]
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
        tableScrollWrapClass,
        isTree,
        resColumns,
    } = $(props)
    const y = ref<string | number>(null)

    const x = computed(() => {
        // const reg = /\d+/
        // if (scroll?.x === 'auto') {
        //     return resColumns?.reduce?.((pre: number, cur: ColumnProps) => {
        //         const width = cur?.width
        //         let computedWidth = 0
        //         if (isNumber(width)) {
        //             computedWidth = width
        //         }
        //         if (isString(width)) {
        //             computedWidth = Number(width.match(reg)?.[0] || 0)
        //         }

        //         return pre + computedWidth
        //     }, 0)
        // }

        return scroll?.x
    })

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

            // console.log('wrapEffectiveHeight', wrapEffectiveHeight)

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

            if (y.value === maxHeight || maxHeight === tbodyRegionHeight.value) {
                console.warn('与更新前高度一致,已阻止高度重置!')
                return
            }

            tbodyRegionHeight.value = tableRealHeight

            if (isTree) {
                y.value = maxHeight
            } else {
                y.value = tableRealHeight >= maxHeight ? maxHeight : null
            }
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

        return (
            ele?.offsetHeight +
            parseFloat(styles.marginTop || '0') +
            parseFloat(styles.marginBottom || '0')
        )
    }

    onMounted(() => {
        setY()
    })
    onBeforeMount(() => {
        wrapContainer && resizeObserver?.value?.disconnect()
    })

    watch(
        () => source,
        async (cur, pre) => {
            if (scroll.scrollToFirstRowOnChange === true) {
                await nextTick()

                wrapContainer
                    ?.querySelector?.(tableScrollWrapClass)
                    ?.scrollTo({ top: 0, behavior: 'smooth' })
            }
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
