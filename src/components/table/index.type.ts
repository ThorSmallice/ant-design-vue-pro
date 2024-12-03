import config from '@config/index'
import { arrayType, booleanType, functionType, objectType, someType } from '@src/tools/type'
import {
    TableProps as ATableProps,
    TableColumnProps as ATableColumnProps,
    PaginationProps,
    FormItemProps,
    FormProps,
} from 'ant-design-vue'

import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { validateOptions } from 'ant-design-vue/es/form/useForm'
import { RuleObject } from 'ant-design-vue/es/form'
import { TableQueryFormItemProps, TableQueryFormProps } from './useQueryForm'
import { VNode } from 'vue'

type TableFieldNames = string | string[]

export interface TableSourceResult {
    total: number
    list: any[] | null
    page?: number | string
    pageSize?: number | string
}

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
    columns?: any[]

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
    requestParamsFormatter: requestParamsFormatter
    onSourceSuccess: (res: AxiosResponse) => Promise<TableSourceResult>
    onSourceError: (err: Error) => void
    fieldsNames?: Partial<{
        page: string //  apis.list 请求参数中的 当前页的field
        pageSize: string //  apis.list 请求参数中的 每页数据量的field
        list: TableFieldNames //  apis.list 返回值中获取数据集合的field
        total: TableFieldNames //  apis.list 返回值中获取数据总数的field
    }>

    /**
     * 分页配置
     */
    ownPagin?: boolean
    ownPaginProps?: PaginationProps
    showOwnPagination?: boolean

    /**
     * 内置查询表单配置
     */
    queryForm?: boolean
    queryFormProps?: FormProps
    queryFormRules?: RuleObject[]
    queryUseFormOptions?: TableQueryFormProps['useFormOptions']
    queryFormItem?: TableQueryFormItemProps[]
    queryFormRowProps?: TableQueryFormProps['queryFormRowProps']
    queryFormColProps?: TableQueryFormProps['queryFormColProps']
    queryFormFlexProps?: TableQueryFormProps['queryFormFlexProps']
    queryFormSubmitBtn?: TableQueryFormProps['queryFormSubmitBtn']
    queryFormSubmitBtnProps?: TableQueryFormProps['queryFormSubmitBtnProps']
    queryFormResetBtn?: TableQueryFormProps['queryFormResetBtn']
    queryFormResetBtnProps?: TableQueryFormProps['queryFormResetBtnProps']
    queryFormSubmitWithReset?: TableQueryFormProps['queryFormSubmitWithReset']
}

export const tableProps = () => ({
    ...config?.Table,
    apis: objectType<TableProps['apis']>(),
    columns: arrayType<TableProps['columns']>([]),
    ownPagin: booleanType(true),
    ownPaginProps: objectType<TableProps['ownPaginProps']>(),
    showOwnPagination: booleanType(true),
    full: booleanType(false),
    params: objectType<TableProps['params']>(),
    requestParamsFormatter: functionType<TableProps['requestParamsFormatter']>(),
    onSourceSuccess: functionType<TableProps['onSourceSuccess']>(),
    onSourceError: functionType<TableProps['onSourceError']>(),
    queryForm: booleanType(true),
    queryFormProps: objectType<TableProps['queryFormProps']>(),
    queryFormRules: arrayType<TableProps['queryFormRules']>(),
    queryUseFormOptions: objectType<TableProps['queryUseFormOptions']>(),
    queryFormItem: arrayType<TableProps['queryFormItem']>(),
    queryFormRowProps: objectType<TableProps['queryFormRowProps']>(),
    queryFormColProps: objectType<TableProps['queryFormColProps']>(),
    queryFormFlexProps: objectType<TableProps['queryFormFlexProps']>(),
    queryFormSubmitBtn: someType<boolean | TableProps['queryFormSubmitBtn']>(
        [Boolean, Function],
        true
    ),
    queryFormSubmitBtnProps: objectType<TableProps['queryFormSubmitBtnProps']>(),
    queryFormResetBtn: someType<boolean | TableProps['queryFormSubmitBtn']>(
        [Boolean, Function],
        true
    ),
    queryFormResetBtnProps: objectType<TableProps['queryFormResetBtnProps']>(),
    queryFormSubmitWithReset: booleanType(false),
})
