import config from '@config/index'
import { arrayType, booleanType, functionType, objectType } from '@src/tools/type'
import {
    TableProps as ATableProps,
    TableColumnProps as ATableColumnProps,
    PaginationProps,
    FormItemProps,
} from 'ant-design-vue'

import { AxiosRequestConfig, AxiosResponse } from 'axios'

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

export interface TableColumnsProps extends ATableColumnProps {}

export interface TableFilterFormItemProps extends FormItemProps {}

export interface TableProps extends Omit<ATableProps, 'columns'> {
    full?: boolean
    apis?: Partial<{
        list: TablePropsApi
        details: TablePropsApi
        create: TablePropsApi
        update: TablePropsApi
        delete: TablePropsApi
        export: TablePropsApi
        import: TablePropsApi
    }>
    columns?: TableColumnsProps[]
    fieldsNames?: Partial<{
        page: string //  apis.list 请求参数中的 当前页的field
        pageSize: string //  apis.list 请求参数中的 每页数据量的field
        list: TableFieldNames //  apis.list 返回值中获取数据集合的field
        total: TableFieldNames //  apis.list 返回值中获取数据总数的field
    }>
    ownPagin?: boolean
    ownPaginProps?: PaginationProps
    showOwnPagination?: boolean
    params?: {
        [key: string]: any
    }
    requestParamsFormatter: requestParamsFormatter
    onSourceSuccess: (res: AxiosResponse) => Promise<TableSourceResult>
    onSourceError: (err: Error) => void

    ownFilterForm?: boolean
    filterFormItem?: TableFilterFormItemProps[]
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
    ownFilterForm: booleanType(true),
    filterFormItem: arrayType<TableProps['filterFormItem']>(),
})
