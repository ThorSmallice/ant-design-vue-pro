import {
    TableColumnProps as ATableColumnProps,
    Button,
    ButtonProps,
    message,
    Popconfirm,
    Space,
} from 'ant-design-vue'
import { AxiosResponse } from 'axios'
import Big from 'big.js'
import dayjs from 'dayjs'
import { cloneDeep, isFunction } from 'es-toolkit'
import { get, isObject } from 'es-toolkit/compat'
import numeral from 'numeral'
import { createSSRApp, EmitFn, Reactive, Ref, ref, useSlots, VNode, watch } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { TableProps, TableSlots, TableTextConfig } from './index.type'
import { TableUseCUFormItemProps, TableUseCUReturnOptions } from './useCU'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { JSX } from 'vue/jsx-runtime'
import { TableDescItemsProps } from './useDetail'
dayjs.extend(customParseFormat)

export const formatterObjValueWithDate = (
    obj: { [key: string]: any },
    columns: TableColumnProps[]
) => {
    const temp = cloneDeep(obj)

    for (let k in temp) {
        const colType = columns?.find?.(({ dataIndex }) => dataIndex === k)?.type
        if (colType === 'date' && isDate(temp[k])) {
            temp[k] = dayjs(temp[k])
        }
    }
    return temp
}
export type TableColumnType = 'index' | 'control' | 'date' | 'number'
export interface TableColumnProps extends ATableColumnProps {
    hidden?: boolean
    type?: TableColumnType
    nowrap?: boolean
    emptyText?: VNode | string
    timeFormat?: string
    numberFormat?:
        | numeral.Numeral
        | ((val: numeral.Numeral, local: string | number) => string | number | VNode)
    numberComputed?: (val: Big.Big, Big: Big) => number

    formItemProps?: TableUseCUFormItemProps
    descItemProps?: TableDescItemsProps
}

export type TableColumnCustomRenderArgs = {
    value: any
    text: any
    record: any
    index: number
    renderIndex: number
    column: ATableColumnProps
}

export type TableColumnRowMethods = {
    editRow: (record: any) => Promise<void>
    deleteRow: (record: any) => Promise<void>
    openRowDetails: (record: any) => Promise<void>
}
export interface TableUseColumnsProps {
    apis?: TableProps['apis']
    columns?: TableColumnProps[]
    columnsAlign?: TableColumnProps['align']
    indexColumn?: boolean
    controlColumn?: boolean
    pagination?: Ref<{
        page: number
        pageSize: number
    }>
    columnsTimeFormat?: string
    columnsEmptyText?: VNode | string
    columnsTitleNoWrap?: boolean
    controlColumnBtns?:
        | {
              detail: false | (ButtonProps & { children?: VNode | string })
              edit: false | (ButtonProps & { children?: VNode | string })
              delete: false | (ButtonProps & { children?: VNode | string })
          }
        | ((
              orgNode: {
                  DetailBtn: VNode
                  EditBtn: VNode
                  DeleteBtn: VNode
              },
              methods: TableColumnRowMethods
          ) => VNode | JSX.Element)
    slots?: TableSlots
    openCUModalForm?: TableUseCUReturnOptions['openCUModalForm'] | any
    updateSource?: () => Promise<void>
    cuFormModel?: TableUseCUReturnOptions['cuFormModel']
    emits?: EmitFn
    onBeforeRowEditBackFill?: (
        res: AxiosResponse | any,
        record?: any
    ) => Promise<{ [key: string]: any }>

    cuFormBackFillByGetDetail?: boolean
    cuModalLoading?: Ref<boolean> | Reactive<boolean>

    detailModalLoading?: Ref<boolean> | Reactive<boolean>
    detailBackFillByGetDetail?: boolean
    tableTextConfig?: TableTextConfig
    [key: string]: any
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

export default (props: TableUseColumnsProps) => {
    const {
        apis,
        columns,
        columnsAlign,
        pagination,
        columnsTimeFormat,
        columnsEmptyText,
        controlColumnBtns,
        indexColumn,
        controlColumn,
        openCUModalForm,
        columnsTitleNoWrap,
        cuFormModel,
        emits,
        cuModalLoading,
        onBeforeRowEditBackFill,
        fieldsNames,
        onGetRowDetail,
        cuFormBackFillByGetDetail,
        updateSource,
        onBeforeRowDelete,
        onRowDeleteSuccess,
        onRowDeleteError,

        detailModalLoading,
        openDetailModal,
        detailsDataSource,
        detailBackFillByGetDetail,
        tableTextConfig,
    } = $(props)
    const _cuModalLoading = $$(cuModalLoading)
    const _detailModalLoading = $$(detailModalLoading)
    const columnsTitleString = ref([])
    const resColumns = ref([])

    const slots = useSlots()
    const transformColumns = (
        columns: TableColumnProps[],
        titleArr: string[]
    ): ATableColumnProps[] => {
        const tempColumns = cloneDeep(columns)
        if (indexColumn) {
            tempColumns?.unshift?.({
                title: '序号',
                type: 'index',
                width: 80,
            })
        }

        if (controlColumn) {
            tempColumns?.push?.({
                title: '操作',
                type: 'control',
                fixed: 'right',
                width: 220,
            })
        }
        const arr = tempColumns
            ?.filter?.(({ hidden }) => !hidden)
            ?.map?.((col: TableColumnProps, i: number) => {
                const {
                    title,
                    nowrap,
                    type,
                    emptyText,
                    align,
                    numberFormat,
                    numberComputed,
                    ...o
                } = col
                const resCol: ATableColumnProps = {
                    title: (
                        <div class={[(nowrap ?? columnsTitleNoWrap) && 'whitespace-nowrap']}>
                            {title}
                        </div>
                    ),
                    width: computedTitleWidth(titleArr[i]) || String(title)?.length * 16,
                    align: columnsAlign,
                    customRender: (...args) =>
                        getCustomRender(...args, col, pagination, {
                            columnsTimeFormat,
                            columnsEmptyText,
                            controlColumnBtns,
                            apis,
                            slots,
                            openCUModalForm,
                            cuFormModel,
                            emits,
                            _cuModalLoading,
                            cuFormBackFillByGetDetail,
                            columns,
                            onBeforeRowEditBackFill,
                            fieldsNames,
                            onGetRowDetail,
                            updateSource,
                            onBeforeRowDelete,
                            onRowDeleteSuccess,
                            onRowDeleteError,
                            deleteRow,
                            getDetails,
                            editRow,
                            openRowDetails,
                        }),
                    ...o,
                }
                return resCol
            })

        return arr
    }

    const openRowDetails = async (record: any) => {
        _detailModalLoading.value = true
        openDetailModal()

        try {
            const detail = detailBackFillByGetDetail ? await getDetails?.(record) : record
            const res = formatterObjValueWithDate(detail, columns)
            detailsDataSource.values = res
        } catch (error) {}
        _detailModalLoading.value = false
    }

    const deleteRow = async (record: any) => {
        try {
            const data = (await onBeforeRowDelete?.(record)) || { id: record?.id }
            const res = await apis?.delete?.(data, record)
            updateSource?.()

            if (onRowDeleteSuccess?.(res) === false) {
                return
            }
            message.success(tableTextConfig?.message?.deleteSuccess)
        } catch (error) {
            if (onRowDeleteError?.(error) === false) {
                return
            }
            message.error(tableTextConfig?.message?.deleteError)
        }
    }

    const getDetails = async (record: any) => {
        return new Promise(async (resolve, reject) => {
            return apis
                ?.details?.({ id: record?.id }, record)
                ?.then(async (res) => {
                    return resolve(
                        (await onGetRowDetail?.(res)) || get(res, fieldsNames?.detail) || {}
                    )
                })
                .catch((error) => reject(error))
        })
    }

    const editRow = async (record: any) => {
        _cuModalLoading.value = true
        openCUModalForm(true)

        try {
            const detail = cuFormBackFillByGetDetail ? await getDetails?.(record) : record

            const res = formatterObjValueWithDate(detail, columns)

            const backFill = (await onBeforeRowEditBackFill?.(res, record)) || res

            cuFormModel.values = backFill
        } catch (error) {}
        _cuModalLoading.value = false
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
        [() => columns],
        () => {
            updateColumns(columns)
        },
        { immediate: true }
    )

    return { resColumns }
}

const getCustomRender = (
    opt: TableColumnCustomRenderArgs,
    metaColumn: TableColumnProps,
    pagination: {
        page: number
        pageSize: number
    },
    {
        columnsEmptyText,
        columnsTimeFormat,
        controlColumnBtns,

        slots,

        deleteRow,
        editRow,
        openRowDetails,
    }: TableUseColumnsProps
) => {
    const { text, record, index, column } = opt
    const { type, customRender, emptyText, timeFormat, numberFormat, numberComputed } = metaColumn

    if (customRender && isFunction(customRender)) return customRender?.(opt)
    if (type === 'index') {
        return pagination.page * pagination.pageSize - pagination.pageSize + (index + 1)
    }

    if (type === 'date') {
        return text
            ? dayjs(text)?.format?.(timeFormat || columnsTimeFormat)
            : text || emptyText || columnsEmptyText
    }

    if (type === 'number') {
        const val = Number(text)
        return isFunction(numberFormat)
            ? numberFormat?.(numeral(val), text)
            : numeral?.(
                  isFunction(numberComputed) ? numberComputed?.(new Big(val), Big) : val
              )?.format?.((numberFormat as unknown as string) || '0[.]00') ||
                  emptyText ||
                  columnsEmptyText
    }

    if (type === 'control') {
        const { children: detailBtnChildren, ...detailsBtnProps } =
            (controlColumnBtns as any)?.detail || {}
        const { children: editBtnChildren, ...editBtnProps } =
            (controlColumnBtns as any)?.edit || {}
        const { children: deleteBtnChildren, ...deleteBtnProps } =
            (controlColumnBtns as any)?.delete || {}

        const DetailBtn =
            controlColumnBtns && isObject((controlColumnBtns as any)?.detail) ? (
                <Button class="p-0" onClick={() => openRowDetails(record)} {...detailsBtnProps}>
                    {detailBtnChildren}
                </Button>
            ) : null

        const EditBtn =
            controlColumnBtns && isObject((controlColumnBtns as any)?.edit) ? (
                <Button class="p-0" onClick={() => editRow(record)} {...editBtnProps}>
                    {editBtnChildren}
                </Button>
            ) : null
        const DeleteBtn =
            controlColumnBtns && isObject((controlColumnBtns as any)?.delete) ? (
                <Popconfirm
                    onConfirm={() => deleteRow(record)}
                    title="确定删除吗?"
                    okText="确定"
                    cancelText="取消"
                >
                    <Button class="p-0" {...deleteBtnProps}>
                        {deleteBtnChildren}
                    </Button>
                </Popconfirm>
            ) : null
        return (
            <Space>
                {isFunction(controlColumnBtns) ? (
                    controlColumnBtns?.(
                        { DetailBtn, EditBtn, DeleteBtn },
                        {
                            deleteRow,
                            editRow,
                            openRowDetails,
                        }
                    )
                ) : (
                    <>
                        {slots?.controlColumnBtnExtraDetailStart?.({ opt, metaColumn })}

                        {DetailBtn}
                        {slots?.controlColumnBtnExtraEditLeft?.({ opt, metaColumn })}

                        {EditBtn}
                        {slots?.controlColumnBtnExtraEditRight?.({ opt, metaColumn })}

                        {DeleteBtn}

                        {slots?.controlColumnBtnExtraEnd?.({ opt, metaColumn })}
                    </>
                )}
            </Space>
        )
    }

    return text || emptyText || columnsEmptyText
}
const possibleFormats = [
    'YYYY-MM-DD',
    'DD/MM/YYYY',
    'MM-DD-YYYY',
    'YYYY/MM/DD',
    'MM/DD/YYYY',
    'YYYY',
    'YYYY-MM-DD HH:mm:ss',
    'MM-DD',
    'HH:mm:ss',
    'x',
]
const isDate = (str: number | string) => {
    if (isNaN(Number(dayjs(str).valueOf())) || String(str).length >= 10) {
        return possibleFormats?.some?.((format) => dayjs?.(str, format, true)?.isValid?.())
    }
    return false
}
