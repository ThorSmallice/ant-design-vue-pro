import {
    TableColumnProps as ATableColumnProps,
    Button,
    ButtonProps,
    Checkbox,
    Col,
    Flex,
    message,
    Popconfirm,
    Popover,
    Row,
    Space,
} from 'ant-design-vue'
import { AxiosResponse } from 'axios'
import Big from 'big.js'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { cloneDeep, isFunction, merge } from 'es-toolkit'
import { get, isEmpty, isObject } from 'es-toolkit/compat'
import numeral from 'numeral'
import { pinyin } from 'pinyin-pro'
import {
    computed,
    createSSRApp,
    EmitFn,
    Events,
    FunctionalComponent,
    Reactive,
    Ref,
    ref,
    SetupContext,
    useAttrs,
    useSlots,
    VNode,
    watch,
} from 'vue'
import { renderToString } from 'vue/server-renderer'
import {
    OwnBtnProps,
    ownBtnProps,
    OwnPopoverProps,
    ownPopoverProps,
    RequestParamsFormatter,
    TableProps,
    TableSlots,
    TableTextConfig,
} from './index.type'
import { TableUseCUFormItemProps, TableUseCUReturnOptions } from './useCU'
import { TableDescItemsProps } from './useDetail'

dayjs.extend(customParseFormat)

const excludesBaseColumns = ['index', 'control']
const excludesSortColumnTypes = [...excludesBaseColumns]
const exculdesFilterColumnTypes = [...excludesBaseColumns]
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
    columnsEllipsis?: boolean
    columnsSorter?: ATableColumnProps['sorter']
    filterPlaceholder?: string
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
    indexColumnWidth?: number
    indexColumnProps?: TableColumnProps
    controlColumn?: boolean
    controlColumnWidth?: number
    controlColumnWidthProps?: TableColumnProps
    pagination?: Ref<{
        page: number
        pageSize: number
    }>
    columnsTimeFormat?: string
    columnsEmptyText?: VNode | string
    columnsTitleNoWrap?: boolean
    controlColumnBtns?: {
        detail: false | (ButtonProps & { children?: VNode | string })
        edit: false | (ButtonProps & { children?: VNode | string })
        delete: false | (ButtonProps & { children?: VNode | string })
    }

    slots?: TableSlots
    openCUModalForm?: TableUseCUReturnOptions['openCUModalForm'] | any
    updateSource?: () => Promise<void>
    cuFormModel?: TableUseCUReturnOptions['cuFormModel']
    emits?: EmitFn
    onBeforeRequestDetails?: RequestParamsFormatter
    onBeforeRowEditBackFill?: (
        res: AxiosResponse | any,
        record?: any
    ) => Promise<{ [key: string]: any }>

    cuFormBackFillByGetDetail?: boolean
    cuModalLoading?: Ref<boolean> | Reactive<boolean>

    detailModalLoading?: Ref<boolean> | Reactive<boolean>
    detailBackFillByGetDetail?: boolean
    tableTextConfig?: TableTextConfig
    onGetRowDetail?: (res: AxiosResponse) => Promise<{
        [key: string]: any
    }>
    columnSettingBtn?: ownPopoverProps
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

type TransedColumns = ATableColumnProps & { show?: boolean; filterPlaceholder?: string }
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
        indexColumnWidth,
        indexColumnProps,
        controlColumn,
        controlColumnWidth,
        controlColumnWidthProps,
        openCUModalForm,
        columnsTitleNoWrap,
        columnsEllipsis,
        columnsSorter,
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
        onBeforeRequestDetails,
        detailBackFillByGetDetail,
        tableTextConfig,
        columnSettingBtn,
    } = $(props)
    const _cuModalLoading = $$(cuModalLoading)
    const _detailModalLoading = $$(detailModalLoading)
    const columnsTitleString = ref([])
    const transedColumns = ref([])

    const resColumns = computed(() => transedColumns?.value?.filter?.(({ show }) => show))

    const slots = useSlots()
    const transformColumns = (
        columns: TableColumnProps[],
        titleArr: string[]
    ): TransedColumns[] => {
        if (isEmpty(columns)) {
            return null
        }
        const tempColumns = cloneDeep(columns)
        if (indexColumn) {
            tempColumns?.unshift?.({
                title: '序号',
                type: 'index',
                fixed: 'left',
                align: 'center',
                width: indexColumnWidth,
                ...indexColumnProps,
            })
        }

        if (controlColumn) {
            tempColumns?.push?.({
                title: '操作',
                type: 'control',
                fixed: 'right',
                align: 'center',
                width: controlColumnWidth,
                ...controlColumnWidthProps,
            })
        }

        const fixedLeftColumns = []
        const fixedRightColumns = []
        const centerColumns = []

        tempColumns?.forEach?.((col: TableColumnProps, i: number) => {
            const {
                title,
                nowrap,
                type,
                emptyText,
                ellipsis,
                align,
                numberFormat,
                numberComputed,
                width,
                hidden,
                fixed,
                sorter = columnsSorter,
                filterPlaceholder,
                customFilterDropdown = false,
                ...o
            } = col
            if (hidden) return
            const resCol: TransedColumns = {
                title: (
                    <span
                        class={[
                            (nowrap ?? columnsTitleNoWrap) &&
                                'block whitespace-nowrap overflow-hidden text-ellipsis',
                        ]}
                    >
                        {title}
                    </span>
                ),
                width: width || computedTitleWidth(titleArr[i]) || String(title)?.length * 16,
                align: columnsAlign,
                fixed,
                ellipsis: columnsEllipsis ?? ellipsis,
                filterPlaceholder: filterPlaceholder || `请输入${title}`,
                defaultSortOrder: 'ascend',
                sorter: localSort(col),
                customFilterDropdown:
                    customFilterDropdown ?? !exculdesFilterColumnTypes?.includes(col?.type),
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
                show: true,
                ...o,
            }
            if (fixed === 'left') {
                return fixedLeftColumns.push(resCol)
            }
            if (fixed === 'right') {
                return fixedRightColumns.push(resCol)
            }

            centerColumns.push(resCol)
        })

        return [...fixedLeftColumns, ...centerColumns, ...fixedRightColumns]
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
            const params = isFunction(onBeforeRequestDetails)
                ? await onBeforeRequestDetails?.(record)
                : { id: record?.id }

            return apis
                ?.details?.(params, record)
                ?.then(async (res) => {
                    return resolve(
                        (await onGetRowDetail?.(res)) || get(res, fieldsNames?.details) || {}
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
        if (isEmpty(columns)) return []
        const str_arr = await Promise.all(
            columns?.map?.(async ({ title }) => await vnodeToString(title as VNode))
        )
        columnsTitleString.value = str_arr

        return str_arr
    }

    const updateColumns = async (columns: TableColumnProps[]) => {
        const title_arr = await updateColumnsTitleString(columns)
        const arr = transformColumns(columns, title_arr)
        transedColumns.value = arr
    }

    const ColumnSettingBtn = (props: OwnPopoverProps) => {
        if (columnSettingBtn === false) return null
        const { children, buttonProps, ...popverProps } = merge(
            columnSettingBtn || {},
            props || {}
        ) as OwnPopoverProps

        const content = (
            <Flex vertical>
                {transedColumns.value?.map?.((col: TableColumnProps & { show }, i) => {
                    const { dataIndex, title } = col
                    return (
                        <Space key={JSON.stringify(dataIndex) || i}>
                            <Checkbox v-model:checked={col.show} />
                            <span>{title}</span>
                        </Space>
                    )
                })}
            </Flex>
        )

        return (
            <Popover
                placement="leftTop"
                arrow={false}
                title="列配置"
                {...popverProps}
                content={content}
            >
                <Button class="flex justify-center items-center" {...buttonProps}>
                    {children}
                </Button>
            </Popover>
        )
    }
    watch(
        [() => columns],
        () => {
            updateColumns(columns)
        },
        { immediate: true }
    )

    return { resColumns, ColumnSettingBtn }
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
        const DetailBtn = (props?: OwnBtnProps) => {
            if (!(controlColumnBtns && isObject((controlColumnBtns as any)?.detail))) return null
            const { children, ...btnProps } = merge(
                controlColumnBtns?.detail || {},
                props || {}
            ) as OwnBtnProps

            return (
                <Button class="p-0" onClick={() => openRowDetails(record)} {...btnProps}>
                    {children}
                </Button>
            )
        }

        const EditBtn = (props?: OwnBtnProps) => {
            if (!(controlColumnBtns && isObject((controlColumnBtns as any)?.edit))) return null
            const { children, ...btnProps } = merge(
                controlColumnBtns?.edit || {},
                props || {}
            ) as OwnBtnProps

            return (
                <Button class="p-0" onClick={() => editRow(record)} {...btnProps}>
                    {children}
                </Button>
            )
        }
        const DeleteBtn: FunctionalComponent<OwnBtnProps> = (props: OwnBtnProps, { attrs }) => {
            if (!(controlColumnBtns && isObject((controlColumnBtns as any)?.delete))) return null
            const { children, ...btnProps } = merge(
                controlColumnBtns?.delete || {},
                props || {}
            ) as OwnBtnProps

            return (
                <div>
                    <Popconfirm
                        onConfirm={() => deleteRow(record)}
                        title="确定删除吗?"
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button class="p-0" {...btnProps} {...attrs}>
                            {children}
                        </Button>
                    </Popconfirm>
                </div>
            )
        }

        return (
            <Space>
                {slots?.customControlColumnBtns && isFunction(slots?.customControlColumnBtns) ? (
                    slots?.customControlColumnBtns?.({
                        DetailBtn,
                        EditBtn,
                        DeleteBtn,
                        deleteRow,
                        editRow,
                        openRowDetails,
                        rowInfo: opt,
                        metaColumnInfo: metaColumn,
                    })
                ) : (
                    <>
                        <DetailBtn></DetailBtn>
                        <EditBtn></EditBtn>
                        <DeleteBtn></DeleteBtn>
                    </>
                )}
            </Space>
        )
    }

    return text || emptyText || columnsEmptyText
}

const localSort = ({ type, dataIndex, sorter }: TableColumnProps) => {
    if (excludesSortColumnTypes?.includes?.(type)) return false
    if (sorter === false) return false
    if (!isEmpty(sorter)) return sorter
    return (a: any, b: any, sortType: string) => {
        const aVal = get(a, dataIndex)
        const bVal = get(b, dataIndex)

        return compareValues(aVal, bVal)
    }
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

// 工具函数：处理字符为英文首字符
// 转换为首字母
function toEnglishFirstChar(str) {
    if (!str) return ''
    const firstChar = str.trim().charAt(0)
    return pinyin(firstChar, { pattern: 'first' })
}

// 工具函数：处理日期为时间戳
function toTimestamp(value) {
    return new Date(value).getTime()
}

// 工具函数：转为数字
function toNumber(value) {
    if (typeof value === 'number') return value
    const num = parseFloat(value)
    return isNaN(num) ? 0 : num // 无法转为数字时返回 0
}

// 通用比较器
function compareValues(a, b) {
    if (typeof a === 'number' && typeof b === 'number') return a - b // 数字比较
    if (!isNaN(a) && !isNaN(b)) return toNumber(a) - toNumber(b) // 字符串数字与数字混合比较
    if (Date.parse(a) && Date.parse(b)) return toTimestamp(a) - toTimestamp(b) // 日期比较

    // 字符串比较（中文/英文/混合）
    const firstA = toEnglishFirstChar(a)
    const firstB = toEnglishFirstChar(b)
    return firstA.localeCompare(firstB) // 按英文顺序比较
}
