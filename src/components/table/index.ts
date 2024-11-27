import { TableProps as ATableProps } from 'ant-design-vue'

import { AxiosRequestConfig } from 'axios'
export interface TablePropsApiResult {
    code: number
}

export type TablePropsApi = (
    params?: AxiosRequestConfig['params'],
    config?: AxiosRequestConfig
) => Promise<any>

export interface TableProps extends Omit<ATableProps, 'columns'> {
    apis?: Partial<{
        list: TablePropsApi
        create: TablePropsApi
        update: TablePropsApi
        delete: TablePropsApi
        export: TablePropsApi
        import: TablePropsApi
    }>
}
