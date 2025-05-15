import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue'

import {
    TableColumnProps as ATableColumnProps,
    Button,
    ButtonProps,
    Checkbox,
    Flex,
    message,
    Popconfirm,
    Popover,
    Space,
} from 'ant-design-vue'
import { AxiosResponse } from 'axios'
import Big from 'big.js'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs/esm'

import customParseFormat from 'dayjs/plugin/customParseFormat'
import { cloneDeep, flatten, isFunction, isString, merge, omit } from 'es-toolkit'
import { get, has, isEmpty, isNumber, isObject, set } from 'es-toolkit/compat'
import numeral from 'numeral'
import { pinyin } from 'pinyin-pro'
import {
    computed,
    createSSRApp,
    FunctionalComponent,
    nextTick,
    Reactive,
    Ref,
    ref,
    UnwrapRef,
    useSlots,
    VNode,
    watch,
} from 'vue'
import { renderToString } from 'vue/server-renderer'
import { ControlMapProps, FormItemControl } from './control'
import {
    OwnBtnProps,
    OwnPopoverProps,
    ownPopoverProps,
    RequestParamsFormatter,
    TableProps,
    TableSlots,
    TableTextConfig,
} from './index.type'
import { TableUseCUFormItemProps, TableUseCUReturnOptions } from './useCU'
import { TableDescItemsProps } from './useDetail'

const isDayjs = dayjs.isDayjs
dayjs.extend(customParseFormat)

const excludesBaseColumns = ['index', 'control']
const excludesSortColumnTypes = [...excludesBaseColumns]
const exculdesFilterColumnTypes = [...excludesBaseColumns]
export const formatterObjValueWithDate = (
    obj: { [key: string]: any },
    columns: TableColumnProps[],
    filterCb?: (col: TableColumnProps) => boolean
) => {
    const temp = cloneDeep(obj)

    columns?.forEach?.((col: TableColumnProps) => {
        if (filterCb && filterCb?.(col)) return
        const { type, dataIndex, formItemProps } = col
        let val: any
        switch (type) {
            case 'date-range':
                val = (dataIndex as string[][])?.map?.((keypath: string | string[]) => {
                    return get(temp, keypath) ? dayjs(get(temp, keypath)) : null
                })
                temp[`${formItemProps?.name}`] = val
                break
            case 'date':
                val = get(temp, dataIndex as string | string[])
                temp[dataIndex as string] = val && isDate(val) ? dayjs(val) : null
                break
            default:
                break
        }
    })

    return temp
}
export type TableColumnType = 'index' | 'control' | 'date' | 'number' | 'date-range'
export interface TableColumnProps<T extends keyof ControlMapProps = keyof ControlMapProps>
    extends Omit<ATableColumnProps, 'dataIndex'> {
    hidden?: boolean
    type?: TableColumnType
    nowrap?: boolean
    dataIndex?: string | string[] | string[][]
    emptyText?: VNode | string
    timeFormat?: string
    numberFormat?:
        | numeral.Numeral
        | ((val: numeral.Numeral, local: string | number) => string | number | VNode)
    numberComputed?: (val: Big.Big, Big: Big) => number

    formItemProps?: TableUseCUFormItemProps
    descItemProps?: TableDescItemsProps

    filterPlaceholder?: string

    editable?: boolean
    editControl?: T
    editControlProps?: ControlMapProps[T] & { [key: string]: any }
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
    columnsEllipsis?: boolean
    columnsSorter?: ATableColumnProps['sorter']
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
    onCellEditConfirm?: (
        info: {
            name: string | string[]
            dataIndex: TableColumnProps['dataIndex']
            handlePath: string
            record: DataItem
            value: any
            closeCellEdit: () => void
        },
        editData: UnwrapRef<Reactive<Record<string, DataItem>>>
    ) => Promise<boolean | void>
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
        window?.getComputedStyle?.(document?.querySelector?.('html'))?.fontSize
    )
    return title?.length ? title?.length * Math.floor(rootFontSize) : rootFontSize * 6
}

type TransedColumns = TableColumnProps & { show?: boolean; filterPlaceholder?: string }

type DataItem = {
    [key: string]: any
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
        onCellEditConfirm,
    } = $(props)
    const _cuModalLoading = $$(cuModalLoading)
    const _detailModalLoading = $$(detailModalLoading)
    const columnsTitleString = ref([])
    const transedColumns = ref([])
    const editData: Ref<Record<string, DataItem>> = ref({})
    const resColumns = computed(() => transedColumns?.value?.filter?.(({ show }) => show))

    const slots = useSlots()
    const transformColumns = (
        columns: TableColumnProps[],
        titleArr: string[]
    ): TableColumnProps[] => {
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
                key: 'index',
                ...indexColumnProps,
            })
        }

        if (controlColumn) {
            tempColumns?.push?.({
                title: '操作',
                type: 'control',
                key: 'control',
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
                customRender,
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
                width: width,

                align: columnsAlign,
                fixed,
                ellipsis: ellipsis ?? columnsEllipsis,
                filterPlaceholder: filterPlaceholder || `请输入${title}`,
                defaultSortOrder: 'ascend',
                sorter: localSort(col),
                customFilterDropdown:
                    customFilterDropdown ?? !exculdesFilterColumnTypes?.includes(col?.type),
                customRender: (...args) =>
                    getCustomRender(...args, col, pagination, {
                        columnsEmptyText,
                        columnsTimeFormat,
                        controlColumnBtns,
                        columnsAlign,
                        slots,
                        deleteRow,
                        editRow,
                        openRowDetails,
                        editData,
                        onCellEditConfirm,
                        fieldsNames,
                        ellipsis: ellipsis ?? columnsEllipsis,
                        width: width,
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

        checkColumn(tempColumns)
        return [...fixedLeftColumns, ...centerColumns, ...fixedRightColumns]
    }

    const openRowDetails = async (record: any) => {
        _detailModalLoading.value = true
        openDetailModal()

        try {
            const detail = detailBackFillByGetDetail ? await getDetails?.(record) : record

            const res = formatterObjValueWithDate(
                detail,
                columns,
                ({ descItemProps }) => descItemProps?.hidden
            )

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
                        (await onGetRowDetail?.(res)) || fieldsNames?.details === 'self'
                            ? res
                            : get(res, fieldsNames?.details) || {}
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

            const res = formatterObjValueWithDate(
                detail,
                columns,
                ({ formItemProps }) => formItemProps?.hidden
            )

            const backFill = (await onBeforeRowEditBackFill?.(res, record)) || res

            cuFormModel.values = backFill
        } catch (error) {
        } finally {
            _cuModalLoading.value = false
        }
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
                    const { dataIndex, title, key } = col
                    return (
                        <Space key={JSON.stringify(dataIndex || key || title)}>
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
        () => columns,
        () => {
            updateColumns(columns)
        },
        { immediate: true }
    )

    return { resColumns, ColumnSettingBtn }
}

const renderWithEllipsis = (
    {
        ellipsis,
        width,
        textAlign,
    }: {
        ellipsis: boolean
        width: number
        textAlign: TableUseColumnsProps['columnsAlign']
    },
    content: any
) => {
    // if (ellipsis) {
    //     return (
    //         <span
    //             class="w-full  text-ellipsis overflow-hidden whitespace-nowrap"
    //             style={{
    //                 // width: `${width}px`,
    //                 // maxWidth: `${width}px`,
    //                 textAlign,
    //             }}
    //         >
    //             {/* {content} */}
    //         </span>
    //     )
    // }
    return content
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
        fieldsNames,
        columnsAlign,
        editData,
        onCellEditConfirm,
        ellipsis,
        width,
    }: TableUseColumnsProps
) => {
    const { text, record, index, column } = opt
    const {
        type,
        dataIndex,
        customRender,
        editable,
        align,
        editControl,
        editControlProps,
        emptyText,
        timeFormat,
        numberFormat,
        numberComputed,
        formItemProps,
    } = metaColumn

    let path: any = flatten(
        [record[`${fieldsNames?.editCellTempKey}`], formItemProps?.name || dataIndex],
        2
    )
    let val: any
    switch (type) {
        case 'date-range':
            val = cloneDeep(
                (dataIndex as string[][])?.map?.((keypath) => {
                    const d = get(record, keypath)
                    return d && dayjs(d)
                })
            )
            break
        case 'date':
            val = dayjs(val)
            break
        default:
            val = cloneDeep(get(record, dataIndex as string | string[]))
            break
    }
    const renderText = () => {
        if (customRender && isFunction(customRender)) return customRender?.(opt)
        if (type === 'index') {
            return renderWithEllipsis(
                { ellipsis, width, textAlign: align ?? columnsAlign },
                pagination.page * pagination.pageSize - pagination.pageSize + (index + 1)
            )
        }

        if (type === 'date-range') {
            return renderWithEllipsis(
                { ellipsis, width, textAlign: align ?? columnsAlign },
                (dataIndex as string[][])
                    ?.map?.((keypath) => {
                        return get(record, keypath)
                            ? dayjs(get(record, keypath))?.format?.(timeFormat || columnsTimeFormat)
                            : emptyText || columnsEmptyText
                    })
                    ?.join?.('~')
            )
        }
        if (type === 'date') {
            return renderWithEllipsis(
                { ellipsis, width, textAlign: align ?? columnsAlign },
                text
                    ? dayjs(text)?.format?.(timeFormat || columnsTimeFormat)
                    : text || emptyText || columnsEmptyText
            )
        }

        if (type === 'number') {
            const val = Number(text)
            return renderWithEllipsis(
                { ellipsis, width, textAlign: align ?? columnsAlign },
                isFunction(numberFormat)
                    ? numberFormat?.(numeral(val), text)
                    : numeral?.(
                          isFunction(numberComputed) ? numberComputed?.(new Big(val), Big) : val
                      )?.format?.((numberFormat as unknown as string) || '0[.]00') ||
                          emptyText ||
                          columnsEmptyText
            )
        }

        if (type === 'control') {
            const DetailBtn = (props?: OwnBtnProps) => {
                if (!(controlColumnBtns && isObject((controlColumnBtns as any)?.detail)))
                    return null
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
                if (!(controlColumnBtns && isObject((controlColumnBtns as any)?.delete)))
                    return null
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
                    {slots?.customControlColumnBtns &&
                    isFunction(slots?.customControlColumnBtns) ? (
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

        return renderWithEllipsis(
            { ellipsis, width, textAlign: align ?? columnsAlign },
            text || emptyText || columnsEmptyText
        )
    }

    const controlRef = ref(null)

    const openEdit = async (record: DataItem) => {
        const obj = set({}, path, val)
        merge(editData.value, obj)
        await nextTick()
        controlRef.value?.select?.()
    }
    const confirmEdit = async (record: DataItem) => {
        let val = get(editData.value, path)

        const closeCellEdit = () => {
            editData.value = omit(editData.value, path)
        }
        if (
            (await onCellEditConfirm?.(
                {
                    name: formItemProps?.name,
                    dataIndex,
                    handlePath: path,
                    record,
                    value: val,
                    closeCellEdit,
                },
                editData
            )) === false
        ) {
            return
        }

        switch (type) {
            case 'date-range':
                val?.forEach?.((v: Dayjs, i: number) => {
                    set(
                        record,
                        dataIndex[i] as string[],
                        isDayjs(v)
                            ? v?.format?.(timeFormat || columnsTimeFormat)
                            : emptyText || columnsEmptyText
                    )
                })
                break
            case 'date':
                set(
                    record,
                    (formItemProps?.name || dataIndex) as string[],
                    isDayjs(val)
                        ? val?.format?.(timeFormat || columnsTimeFormat)
                        : emptyText || columnsEmptyText
                )

                break
            default:
                set(record, (formItemProps?.name || dataIndex) as string[], val)

                break
        }

        closeCellEdit()
    }

    const RenderControl = () => {
        return (
            <p class={['control-cell', 'relative', `control-${align ?? columnsAlign}-cell`]}>
                {has(cloneDeep(editData.value), path) ? (
                    <>
                        <FormItemControl
                            getInstance={(e) => {
                                controlRef.value = e
                            }}
                            type={editControl || formItemProps?.control}
                            model={editData.value}
                            name={path}
                            {...(editControlProps || formItemProps?.controlProps)}
                            onPressEnter={() => controlRef.value?.blur?.()}
                            onBlur={() => confirmEdit(record)}
                        ></FormItemControl>

                        <Button
                            onClick={() => confirmEdit(record)}
                            class="flex items-center ml-2"
                            title="确定"
                            type="link"
                            icon={<CheckOutlined />}
                        ></Button>
                    </>
                ) : (
                    <>
                        <span
                            title="双击鼠标左键进行编辑"
                            onDblclick={async () => openEdit(record)}
                        >
                            {renderText()}
                        </span>
                        <EditOutlined class="edit-btn" onClick={async () => openEdit(record)} />
                    </>
                )}
            </p>
        )
    }

    if (editable && !excludesBaseColumns?.includes(type)) {
        return <RenderControl></RenderControl>
    }

    return renderText()
}

const localSort = ({ type, dataIndex, sorter }: TableColumnProps) => {
    if (excludesSortColumnTypes?.includes?.(type)) return false
    if (sorter === false) return false
    if (!isEmpty(sorter)) return sorter
    return (a: any, b: any, sortType: string) => {
        let aVal: any
        let bVal: any
        switch (type) {
            case 'date-range':
                aVal = get(a, dataIndex?.[0])
                bVal = get(b, dataIndex?.[1])

                break
            default:
                aVal = get(a, dataIndex as string | string[])
                bVal = get(b, dataIndex as string | string[])
                break
        }

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
const isDate = (str: string) => {
    // if (isNaN(Number(dayjs(str).valueOf())) || String(str).length >= 10) {
    //     return possibleFormats?.some?.((format) => dayjs?.(str, format, true)?.isValid?.())
    // }
    // return false
    return Date.parse(str)
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

const checkColumn = (columns: TableColumnProps[]) => {
    const errorObj = {}

    columns?.forEach?.(({ title, dataIndex, type, editable, formItemProps }) => {
        switch (type) {
            case 'date-range':
                if (!checkDateRangeDataIndex(dataIndex)) {
                    errorObj[`${title}`] = [
                        ...(errorObj[`${title}`] || []),
                        `dataIndex应设为string[][]类型`,
                    ]
                }

                break
            default:
                break
        }
    })
    if (!isEmpty(errorObj)) {
        // console.warn(`🚀 ~ ${__PKG_NAME__} ~ Table: 错误的column`, errorObj)
    }
}
export const checkDateRangeDataIndex = (a: unknown) => {
    // 判断 a 是否是数组
    if (!Array.isArray(a)) {
        return false
    }
    const res = a.every(
        (item) => Array.isArray(item) && item?.every?.((v) => isString(v) || isNumber(v))
    )

    // 判断 a 的每一项是否也是数组
    return res
}

export const checkDateRangeFormItemName = ({ formItemProps, editable }: TableColumnProps) => {
    const res = isString(name)
    if (!res) {
        console.warn('请设置formItemProps.name,类型为string')
    }
    return res
}
