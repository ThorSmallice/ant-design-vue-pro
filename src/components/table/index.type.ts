import { TableProps as ATableProps, ButtonProps, FormProps, PaginationProps } from 'ant-design-vue'

import { ColumnType } from 'ant-design-vue/es/table'
import { RenderExpandIconProps } from 'ant-design-vue/es/vc-table/interface'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { cloneDeep } from 'es-toolkit'
import { isArray, isObject } from 'es-toolkit/compat'
import { inject, Ref, SetupContext, VNode } from 'vue'
import { TableColumnCustomRenderArgs, TableColumnProps, TableUseColumnsProps } from './useColumns'
import { TableUseCUFormProps } from './useCU'
import { TableUseDataSourceProps } from './useDataSource'
import { TableUseDetailProps } from './useDetail'
import {
    TableQueryFormInstance,
    TableQueryFormItemProps,
    TableQueryFormProps,
} from './useQueryForm'
import { JSX } from 'vue/jsx-runtime'
import { arrayType, booleanType, functionType, objectType } from '@src/tools/type'

type TableFieldNames = string | string[]

export interface OwnBtnProps extends ButtonProps {
    children?: string | VNode | JSX.Element
}
export type ownBtnProps = OwnBtnProps | false

export type TablePropsApi = (
    params?: AxiosRequestConfig['params'],
    config?: AxiosRequestConfig
) => Promise<any>

export type RequestParams = {
    [key: string]: any
}
export type RequestParamsFormatter = (params: RequestParams) => RequestParams
export type CRUDRequestFinish = (res: AxiosResponse, info?: any) => boolean | void
export type ParamsFormatter = (
    vals:
        | {
              [key: string]: any
          }
        | unknown
) => Promise<{ [key: string]: any } | unknown>

export type TableTextConfig = Partial<{
    modalTitle: {
        create: string
        update: string
        detail: string
    }
    message: {
        createSuccess: string
        createError: string
        updateSuccess: string
        updateError: string
        deleteSuccess: string
        deleteError: string
    }
}>
export type ciesBtnsVNode = Ref<
    Partial<{
        CreateBtn: VNode | JSX.Element
        ImportBtn: VNode | JSX.Element
        ExportBtn: VNode | JSX.Element
    }>
>
export type controlColumnBtnVNode = {
    DetailBtn: VNode | JSX.Element
    EditBtn: VNode | JSX.Element
    DeleteBtn: VNode | JSX.Element
}
export type controlColumnMethods = {
    deleteRow: (record: any) => Promise<any>
    editRow: (record: any) => Promise<any>
    openRowDetails: (record: any) => Promise<any>
}

export type queryFormBtnVNode = {
    SubmitBtn: VNode | JSX.Element
    ResetBtn: VNode | JSX.Element
}
export interface TableProps extends Omit<ATableProps, 'columns' | 'loading'> {
    full?: boolean // 高度100%
    tableTextConfig?: TableTextConfig
    /**
     * 额外的请求参数
     * 会覆盖重名的参数
     */
    params?: {
        [key: string]: any
    }
    /**
     * 列配置
     */
    columns?: TableColumnProps[]
    columnsTitleNoWrap?: TableUseColumnsProps['columnsTitleNoWrap']
    indexColumn?: TableUseColumnsProps['indexColumn']
    indexColumnWidth?: TableUseColumnsProps['indexColumnWidth']
    indexColumnProps?: TableUseColumnsProps['indexColumnProps']
    controlColumn?: TableUseColumnsProps['controlColumn']
    controlColumnWidth?: TableUseColumnsProps['controlColumnWidth']
    controlColumnWidthProps?: TableUseColumnsProps['controlColumnWidthProps']

    columnsAlign?: TableColumnProps['align']
    columnsTimeFormat?: TableUseColumnsProps['columnsTimeFormat']
    columnsEmptyText?: TableUseColumnsProps['columnsEmptyText']
    controlColumnBtns?: TableUseColumnsProps['controlColumnBtns']

    /**
     * api 请求配置
     */
    apis?: Partial<{
        list: TablePropsApi
        details: TablePropsApi
        create: TablePropsApi
        update: TablePropsApi
        delete: TablePropsApi
        export: TablePropsApi
        import: TablePropsApi
    }>
    requestParamsFormatter?: null | RequestParamsFormatter
    onSourceSuccess?: null | TableUseDataSourceProps['onSourceSuccess']
    onSourceError?: null | TableUseDataSourceProps['onSourceError']
    onGetRowDetail?:
        | null
        | ((res: AxiosResponse) => Promise<{
              [key: string]: any
          }>)
    onBeforeCuFormSubmit?: null | ParamsFormatter

    onBeforeRowEditBackFill?: null | TableUseColumnsProps['onBeforeRowEditBackFill']
    onCuFormSubmitSuccess?: null | CRUDRequestFinish
    onCuFormSubmitError?: null | CRUDRequestFinish

    onBeforeRowDelete?: null | ParamsFormatter
    onRowDeleteSuccess?: null | CRUDRequestFinish
    onRowDeleteError?: null | CRUDRequestFinish

    fieldsNames?: Partial<{
        page: string //  apis.list 请求参数中的 当前页的field
        pageSize: string //  apis.list 请求参数中的 每页数据量的field
        list: TableFieldNames //  apis.list 返回值中获取数据集合的field
        total: TableFieldNames //  apis.list 返回值中获取数据总数的field
        detail: TableFieldNames
    }>

    /**
     * 分页配置
     */
    ownPagin?: boolean
    ownPaginProps?: Partial<PaginationProps>

    /**
     * 内置查询表单配置
     */
    queryForm?: boolean
    queryFormProps?: FormProps
    queryFormItem?: TableQueryFormItemProps[]
    queryFormRowProps?: TableQueryFormProps['queryFormRowProps'] & { [key: string]: any }
    queryFormColProps?: TableQueryFormProps['queryFormColProps'] & { [key: string]: any }
    queryFormFlexProps?: TableQueryFormProps['queryFormFlexProps'] & { [key: string]: any }
    queryFormSubmitBtn?: TableQueryFormProps['queryFormSubmitBtn']
    queryFormSubmitBtnProps?: TableQueryFormProps['queryFormSubmitBtnProps']
    queryFormResetBtn?: TableQueryFormProps['queryFormResetBtn']
    queryFormResetBtnProps?: TableQueryFormProps['queryFormResetBtnProps']
    queryFormSubmitWithReset?: TableQueryFormProps['queryFormSubmitWithReset']

    /**
     * 新增 编辑表单配置
     */
    cuFormProps?: TableUseCUFormProps['cuFormProps']
    cuFormRules?: TableUseCUFormProps['cuFormRules']
    cuFormDefaultValues?: TableUseCUFormProps['defaultValues']
    cuFormModalProps?: TableUseCUFormProps['cuFormModalProps'] & { [key: string]: any }
    cuFormRowProps?: TableUseCUFormProps['cuFormRowProps'] & { [key: string]: any }
    cuFormColProps?: TableUseCUFormProps['cuFormColProps'] & { [key: string]: any }
    cuFormBackFillByGetDetail?: TableUseColumnsProps['cuFormBackFillByGetDetail']

    /**
     * 详情 描述列表配置
     */
    detailBackFillByGetDetail?: TableUseColumnsProps['detailBackFillByGetDetail']
    detailDescItemEmptyText?: TableUseDetailProps['detailDescItemEmptyText']
    detailDescItemProps?: TableUseDetailProps['detailDescItemProps']
    detailDescItemTimeFormat?: TableUseDetailProps['detailDescItemTimeFormat']
    detailModalProps?: TableUseDetailProps['detailModalProps'] & { [key: string]: any }
    detailDescProps?: TableUseDetailProps['detailDescProps'] & { [key: string]: any }
    ciesBtns?: boolean
    ciesBtnsInQueryForm?: boolean

    createBtn?: TableUseCUFormProps['createBtn']

    importBtn?:
        | false
        | (ButtonProps & {
              children?: string | VNode
          })
    exportBtn?:
        | false
        | (ButtonProps & {
              children?: string | VNode
          })
}

export type TableSlots = {
    emptyText?: any
    expandIcon?: RenderExpandIconProps<any>
    title?: any
    footer?: any
    summary?: any
    expandedRowRender?: any
    expandColumnTitle?: any
    bodyCell?: (props: {
        text: any
        value: any
        record: Record<string, any>
        index: number
        column: ColumnType
    }) => void
    headerCell?: (props: { title: any; column: ColumnType }) => void
    customFilterIcon?: any
    customFilterDropdown?: any
    default?: any
    customQueryFormBtns?: (
        originNode: queryFormBtnVNode,
        form: TableQueryFormInstance
    ) => VNode[] | JSX.Element[]

    customControlColumnBtns?: (
        originNode: controlColumnBtnVNode & controlColumnMethods,
        obj: {
            opt: TableColumnCustomRenderArgs
            metaColumn: TableColumnProps
        }
    ) => VNode[] | JSX.Element[]

    customCiesBtns?: (orgNode: {
        CreateBtn: VNode
        ImportBtn: VNode
        ExportBtn: VNode
    }) => VNode | JSX.Element
}
export const ATableSlotsWhiteList = [
    'emptyText',
    'expandIcon',
    'title',
    'footer',
    'summary',
    'expandedRowRender',
    'expandColumnTitle',
    'bodyCell',
    'headerCell',
    'customFilterIcon',
    'customFilterDropdown',
    'default',
]

export interface TableSetupCtx extends Omit<SetupContext, 'slots'> {
    slots: TableSlots
}

export const mergeConfigProps = <T>(
    props: T
): {
    [key: string]: any
} => {
    const obj = cloneDeep(props)

    for (let k in obj) {
        if (isArray(obj[k]) || isObject(obj[k])) {
            obj[k] = (function () {
                return obj[k]
            })()
        }
    }
    return obj
}
