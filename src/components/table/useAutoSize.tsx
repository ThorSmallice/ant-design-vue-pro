import { computed, nextTick, onBeforeMount, onMounted, Ref, ref, toRaw, watch } from 'vue'
import { TableProps } from './index.type'
import { debounce } from 'es-toolkit'
import { merge } from 'es-toolkit/compat'

export interface TableUseAutoSizeProps {
    scroll: TableProps['scroll']
    wrapContainer: Ref<HTMLElement>

    minScollHeight?: number
    autoSizeConfig?: Partial<{
        wait?: number
        options?: {
            signal?: AbortSignal
            edges?: Array<'leading' | 'trailing'>
        }
    }>
    subtractEleClasses?: string[]
}
const useAutoSize = (props: TableUseAutoSizeProps) => {
    const {
        scroll,
        wrapContainer,
        autoSizeConfig,
        subtractEleClasses,
        minScollHeight = 50,
    } = $(props)
    const y = ref<any>(null)
    const x = ref(scroll?.x)

    const resizeConfig = computed((): TableUseAutoSizeProps['autoSizeConfig'] => {
        return merge(
            {
                wait: 300,
            },
            autoSizeConfig
        )
    })

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
        async (entries) => {
            await nextTick()
            if (!wrapContainer) return
            const wrapStyles = getComputedStyle(wrapContainer)
            const wrapEffectiveHeight =
                wrapContainer?.clientHeight -
                parseFloat(wrapStyles?.paddingTop) -
                parseFloat(wrapStyles?.paddingBottom)

            const eles_height = subtractEleClasses?.map?.((className) =>
                computedHeight(wrapContainer?.querySelector(`${className}`))
            )

            const height = eles_height?.reduce?.(
                (prev, current) => prev - current,
                wrapEffectiveHeight
            )

            y.value = Math?.max?.(height, minScollHeight || 0)
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

    return {
        x,
        y,
    }
}
export default useAutoSize
