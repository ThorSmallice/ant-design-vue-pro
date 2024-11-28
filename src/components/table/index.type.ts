import config from '@config/index'
import { arrayType, booleanType, objectType } from '@src/tools/type'
import { TableProps as ATableProps, TableColumnProps as ATableColumnProps } from 'ant-design-vue'

import { AxiosRequestConfig } from 'axios'
export interface TablePropsApiResult {
    code: number
}

export type TablePropsApi = (
    params?: AxiosRequestConfig['params'],
    config?: AxiosRequestConfig
) => Promise<any>

export interface TableColumnsProps extends ATableColumnProps {}

export interface TableProps extends Omit<ATableProps, 'columns'> {
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
        list: string //  apis.list 返回值中获取数据集合的field
        total: string //  apis.list 返回值中获取数据总数的field
    }>
    ownPagin?: boolean
    showOwnPagination?: boolean
    full?: boolean
}

export const tableProps = () => ({
    ...config?.Table,
    apis: objectType<TableProps['apis']>(),
    columns: arrayType<TableProps['columns']>([]),
    ownPagin: booleanType(true),
    showOwnPagination: booleanType(true),
    full: booleanType(false),
})
