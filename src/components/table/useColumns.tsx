import { TableColumnProps as ATableColumnProps } from 'ant-design-vue'
import { createSSRApp, ref, VNode, watch } from 'vue'
import { renderToString } from 'vue/server-renderer'
export type TableColumnType = 'index' | 'control'
export interface TableColumnProps extends ATableColumnProps {
    hidden?: boolean
    type?: TableColumnType
}

export interface TableUseColumnsProps {
    columns: TableColumnProps[]
    colResizable?: boolean
}

const vnodeToString = async (vnode: VNode) => {
    const app = createSSRApp({
        render: () => vnode,
    })
    return await renderToString(app)
}

const computedTitleWidth = (title: string): number => {
    const rootFontSize = parseFloat(
        window.getComputedStyle(document.querySelector('html')).fontSize
    )
    return title?.length ? title?.length * Math.floor(rootFontSize) : rootFontSize * 6
}

export default (props: any) => {
    const { columns, colResizable } = $(props)
    const columnsTitleString = ref([])
    const resColumns = ref([])

    const transformColumns = (
        columns: TableColumnProps[],
        titleArr: string[]
    ): ATableColumnProps[] => {
        const arr = columns
            ?.filter?.(({ hidden }) => !hidden)
            ?.map?.((col: TableColumnProps, i: number) => {
                const { ...o } = col
                const resCol: ATableColumnProps = {
                    resizable: colResizable,
                    width: computedTitleWidth(titleArr[i]),
                    ...o,
                }
                return resCol
            })

        return arr
    }

    const updateColumnsTitleString = async (columns: TableColumnProps[]) => {
        const str_arr = await Promise.all(
            columns?.map?.(async ({ title }) => await vnodeToString(title as VNode))
        )
        columnsTitleString.value = str_arr

        return str_arr
    }

    const updateColumns = async (columns: TableColumnProps[]) => {
        const title_arr = await updateColumnsTitleString(columns)
        const arr = transformColumns(columns, title_arr)
        resColumns.value = arr
    }

    watch(
        [() => columns, () => colResizable],
        () => {
            updateColumns(columns)
        },
        { immediate: true }
    )

    return { resColumns }
}
