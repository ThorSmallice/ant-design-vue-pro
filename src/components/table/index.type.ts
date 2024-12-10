import config from '@config/index'
import { arrayType, booleanType, functionType, objectType, someType } from '@src/tools/type'
import {
    TableProps as ATableProps,
    ButtonProps,
    FormProps,
    ModalProps,
    PaginationProps,
} from 'ant-design-vue'

import { RuleObject } from 'ant-design-vue/es/form'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import {
    TableQueryFormInstance,
    TableQueryFormItemProps,
    TableQueryFormProps,
} from './useQueryForm'
import { TableColumnCustomRenderArgs, TableColumnProps, TableUseColumnsProps } from './useColumns'
import { PropType, SetupContext, VNode } from 'vue'
import { RenderExpandIconProps } from 'ant-design-vue/es/vc-table/interface'
import { ColumnType } from 'ant-design-vue/es/table'
import { cloneDeep } from 'es-toolkit'
import { isArray, isObject } from 'es-toolkit/compat'
import { TableUseCUFormProps } from './useCU'
import { TableUseDataSourceProps } from './useDataSource'

type TableFieldNames = string | string[]

export type TablePropsApi = (
    params?: AxiosRequestConfig['params'],
    config?: AxiosRequestConfig
) => Promise<any>

export type requestParams = {
    [key: string]: any
}
export type requestParamsFormatter = (params: requestParams) => requestParams

export interface TableProps extends Omit<ATableProps, 'columns'> {
    full?: boolean // 高度100%

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
    controlColumn?: TableUseColumnsProps['controlColumn']
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
    requestParamsFormatter?: requestParamsFormatter
    onSourceSuccess?: TableUseDataSourceProps['onSourceSuccess']
    onSourceError?: TableUseDataSourceProps['onSourceError']
    onGetRowDetail?: (res: AxiosResponse) => Promise<{
        [key: string]: any
    }>
    onRowEdit?: TableUseColumnsProps['onRowEdit']
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
    showOwnPagination?: boolean

    /**
     * 内置查询表单配置
     */
    queryForm?: boolean
    queryFormProps?: FormProps
    queryFormRules?: RuleObject[]
    queryUseFormOptions?: TableQueryFormProps['queryUseFormOptions']
    queryFormItem?: TableQueryFormItemProps[]
    queryFormRowProps?: TableQueryFormProps['queryFormRowProps']
    queryFormColProps?: TableQueryFormProps['queryFormColProps']
    queryFormFlexProps?: TableQueryFormProps['queryFormFlexProps']
    queryFormSubmitBtn?: TableQueryFormProps['queryFormSubmitBtn']
    queryFormSubmitBtnProps?: TableQueryFormProps['queryFormSubmitBtnProps']
    queryFormResetBtn?: TableQueryFormProps['queryFormResetBtn']
    queryFormResetBtnProps?: TableQueryFormProps['queryFormResetBtnProps']
    queryFormSubmitWithReset?: TableQueryFormProps['queryFormSubmitWithReset']

    /**
     * 新增 编辑表单配置
     */
    cuFormProps?: TableUseCUFormProps['cuFormProps']
    cuUseFormOptions?: TableUseCUFormProps['cuUseFormOptions']
    cuFormRules?: TableUseCUFormProps['cuFormRules']
    cuFormModalProps?: TableUseCUFormProps['cuFormModalProps']
    cuFormRowProps?: TableUseCUFormProps['cuFormRowProps']
    cuFormColProps?: TableUseCUFormProps['cuFormColProps']
    cuFormBackFillByGetDetail?: TableUseColumnsProps['cuFormBackFillByGetDetail']

    ciesBtns?: boolean
    createBtn?:
        | false
        | (ButtonProps & {
              children?: string | VNode
          })
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

// export const tableProps = () => ({
//     ...config?.Table,
//     apis: objectType<TableProps['apis']>(),
//     columns: arrayType<TableProps['columns']>([]),
//     colResizable: booleanType(true),

//     ownPagin: booleanType(true),
//     ownPaginProps: objectType<TableProps['ownPaginProps']>(),
//     showOwnPagination: booleanType(true),
//     full: booleanType(false),
//     params: objectType<TableProps['params']>(),
//     requestParamsFormatter: functionType<TableProps['requestParamsFormatter']>(),
//     onSourceSuccess: functionType<TableProps['onSourceSuccess']>(),
//     onSourceError: functionType<TableProps['onSourceError']>(),
//     queryForm: booleanType(true),
//     queryFormProps: objectType<TableProps['queryFormProps']>(),
//     queryFormRules: arrayType<TableProps['queryFormRules']>(),
//     queryUseFormOptions: objectType<TableProps['queryUseFormOptions']>(),
//     queryFormItem: arrayType<TableProps['queryFormItem']>(),
//     queryFormRowProps: objectType<TableProps['queryFormRowProps']>(),
//     queryFormColProps: objectType<TableProps['queryFormColProps']>(),
//     queryFormFlexProps: objectType<TableProps['queryFormFlexProps']>(),
//     queryFormSubmitBtn: someType<boolean | TableProps['queryFormSubmitBtn']>(
//         [Boolean, Function],
//         true
//     ),
//     queryFormSubmitBtnProps: objectType<TableProps['queryFormSubmitBtnProps']>(),
//     queryFormResetBtn: someType<boolean | TableProps['queryFormSubmitBtn']>(
//         [Boolean, Function],
//         true
//     ),
//     queryFormResetBtnProps: objectType<TableProps['queryFormResetBtnProps']>(),
//     queryFormSubmitWithReset: booleanType(false),
// })

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
    queryFormExtraLeft?: (form: TableQueryFormInstance) => VNode[]
    queryFormExtraCenter?: (form: TableQueryFormInstance) => VNode[]
    queryFormExtraRight?: (form: TableQueryFormInstance) => VNode[]

    controlColumnBtnExtraDetailStart?: (obj: {
        opt: TableColumnCustomRenderArgs
        metaColumn: TableColumnProps
    }) => VNode[]
    controlColumnBtnExtraEditLeft?: (obj: {
        opt: TableColumnCustomRenderArgs
        metaColumn: TableColumnProps
    }) => VNode[]
    controlColumnBtnExtraEditRight?: (obj: {
        opt: TableColumnCustomRenderArgs
        metaColumn: TableColumnProps
    }) => VNode[]
    controlColumnBtnExtraEnd?: (obj: {
        opt: TableColumnCustomRenderArgs
        metaColumn: TableColumnProps
    }) => VNode[]
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
