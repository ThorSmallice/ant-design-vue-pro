import {
    TableProps as ATableProps,
    ButtonProps,
    FormProps,
    PaginationProps,
    PopoverProps,
} from 'ant-design-vue'

import { DropdownProps } from 'ant-design-vue/es/dropdown'
import { ColumnType } from 'ant-design-vue/es/table'
import { RenderExpandIconProps } from 'ant-design-vue/es/vc-table/interface'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { cloneDeep } from 'es-toolkit'
import { isArray, isObject } from 'es-toolkit/compat'
import { Ref, SetupContext, VNode } from 'vue'
import { JSX } from 'vue/jsx-runtime'
import { TableUseAutoSizeProps } from './useAutoSize'
import { TableColumnCustomRenderArgs, TableColumnProps, TableUseColumnsProps } from './useColumns'
import { TableUseCUFormProps } from './useCU'
import { TableUseDataSourceProps } from './useDataSource'
import { TableUseDetailProps } from './useDetail'
import { TableUseExportProps } from './useExport'
import { TableUseImportProps } from './useImport'
import {
    TableQueryFormInstance,
    TableQueryFormItemProps,
    TableQueryFormProps,
} from './useQueryForm'
import { TableUseDownloadTemplateProps } from './useDownloadTemplate'

type TableFieldNames = string | string[]

export interface OwnBtnProps extends ButtonProps {
    children?: JSX.Element[] | VNode[] | string
}
export interface OwnDropProps extends DropdownProps {
    children?: JSX.Element[] | VNode[] | string
    buttonProps?: ButtonProps
}

export interface OwnPopoverProps extends Omit<PopoverProps, 'children'> {
    children?: JSX.Element[] | VNode[] | string
    buttonProps?: ButtonProps
}
export type ownBtnProps = false | OwnBtnProps
export type ownDropDownProps = false | OwnDropProps
export type ownPopoverProps = false | OwnPopoverProps

export type TablePropsApi = (
    params?: AxiosRequestConfig['params'],
    config?: AxiosRequestConfig
) => Promise<any>

export type RequestParams = {
    [key: string]: any
}
export type RequestParamsFormatter = (params: RequestParams | any) => RequestParams | any
export type CRUDRequestFinish = (res: AxiosResponse, info?: any) => boolean | void
export type ParamsFormatter = (
    vals:
        | {
              [key: string]: any
          }
        | unknown,
    metaValues?: any
) => Promise<{ [key: string]: any } | unknown | false>

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
        exportSuccess: string
        exportError: string
        importSuccess: string
        importError: string
        downloadTemplateSuccess: string
        downloadTemplateError: string

        [key: string]: any
    }
}>
export type ciesBtnsVNode = Ref<
    Partial<{
        CreateBtn: VNode | JSX.Element
        ImportBtn: VNode | JSX.Element
        ExportDropDown: VNode | JSX.Element
        ExportCurrentPageBtn: VNode | JSX.Element
        ExportAllBtn: VNode | JSX.Element
        ColumnSettingBtn: VNode | JSX.Element
        DownloadTemplateBtn: VNode | JSX.Element
    }>
>

export type controlColumnMethods = {
    deleteRow: (record: any) => Promise<any>
    editRow: (record: any) => Promise<any>
    openRowDetails: (record: any) => Promise<any>
}
export type controlColumnSlotOptions = {
    DetailBtn: VNode | JSX.Element
    EditBtn: VNode | JSX.Element
    DeleteBtn: VNode | JSX.Element
} & controlColumnMethods &
    controlColumnInfo

export type queryFormSlotOptions = {
    SubmitBtn: VNode | JSX.Element
    ResetBtn: VNode | JSX.Element
    QueryFormInstance: TableQueryFormInstance
} & ciesBtnsVNode
export interface TableProps extends Omit<ATableProps, 'columns' | 'loading' | 'scroll'> {
    scroll?: {
        x: true | string | number
        y: boolean | number | 'auto'
    }
    full?: boolean // 高度100%
    tableTextConfig?: TableTextConfig
    columnSettingBtn?: TableUseColumnsProps['columnSettingBtn']
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
    columnsSorter?: TableColumnProps['columnsSorter']
    columnsEllipsis?: TableColumnProps['columnsEllipsis']
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
        template: TablePropsApi
    }>
    requestParamsFormatter?: null | RequestParamsFormatter
    detailsRequestParamsFormatter?: null | TableUseColumnsProps['detailsRequestParamsFormatter']
    onSourceSuccess?: null | TableUseDataSourceProps['onSourceSuccess']
    onSourceError?: null | TableUseDataSourceProps['onSourceError']
    onGetRowDetail?: null | TableUseColumnsProps['onGetRowDetail']

    onBeforeCuFormSubmit?: null | ParamsFormatter

    onBeforeRowEditBackFill?: null | TableUseColumnsProps['onBeforeRowEditBackFill']
    onCuFormSubmitSuccess?: null | CRUDRequestFinish
    onCuFormSubmitError?: null | CRUDRequestFinish
    onCuFormCancel?: null | TableUseCUFormProps['onCuFormCancel']
    onBeforeRowDelete?: null | ParamsFormatter
    onRowDeleteSuccess?: null | CRUDRequestFinish
    onRowDeleteError?: null | CRUDRequestFinish

    fieldsNames?: Partial<{
        page: string //  apis.list 请求参数中的 当前页的field
        pageSize: string //  apis.list 请求参数中的 每页数据量的field
        list: TableFieldNames //  apis.list 返回值中获取数据集合的field
        total: TableFieldNames //  apis.list 返回值中获取数据总数的field
        detail: TableFieldNames
        export: TableFieldNames
        template: TableFieldNames
    }>

    /**
     * 分页配置
     */
    ownPagin?: boolean
    ownPaginProps?: Partial<PaginationProps> & { [key: string]: any }

    /**
     * 内置查询表单配置
     */
    queryForm?: boolean
    queryFormProps?: FormProps & { [key: string]: any }
    queryFormItems?: TableQueryFormItemProps[]
    queryFormRowProps?: TableQueryFormProps['queryFormRowProps'] & { [key: string]: any }
    queryFormColProps?: TableQueryFormProps['queryFormColProps'] & { [key: string]: any }
    queryFormFlexProps?: TableQueryFormProps['queryFormFlexProps'] & { [key: string]: any }
    queryFormSubmitBtn?: TableQueryFormProps['queryFormSubmitBtn']
    queryFormSubmitBtnProps?: TableQueryFormProps['queryFormSubmitBtnProps'] & {
        [key: string]: any
    }
    queryFormResetBtn?: TableQueryFormProps['queryFormResetBtn']
    queryFormResetBtnProps?: TableQueryFormProps['queryFormResetBtnProps'] & { [key: string]: any }
    queryFormControlFormItemProps?: TableQueryFormProps['queryFormControlFormItemProps'] & {
        [key: string]: any
    }
    queryFormSubmitWithReset?: TableQueryFormProps['queryFormSubmitWithReset']
    queryFormTimeFormat?: TableQueryFormProps['queryFormTimeFormat']

    /**
     * 新增 编辑表单配置
     */
    cuFormProps?: TableUseCUFormProps['cuFormProps'] & { [key: string]: any }
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
    detailDescItemProps?: TableUseDetailProps['detailDescItemProps'] & { [key: string]: any }
    detailDescItemTimeFormat?: TableUseDetailProps['detailDescItemTimeFormat']
    detailModalProps?: TableUseDetailProps['detailModalProps'] & { [key: string]: any }
    detailDescProps?: TableUseDetailProps['detailDescProps'] & { [key: string]: any }
    ciesBtns?: boolean
    ciesBtnsInQueryForm?: boolean

    createBtn?: false | TableUseCUFormProps['createBtn']

    importBtn?: TableUseImportProps['importBtn']

    exportDropdown?: TableUseExportProps['exportDropdown']
    exportCurrentPageBtn?: TableUseExportProps['exportCurrentPageBtn']
    exportAllBtn?: TableUseExportProps['exportAllBtn']

    exportFileByParams?: TableUseExportProps['exportFileByParams']
    exportFileParamsFormat?: null | TableUseExportProps['exportFileParamsFormat']
    exportFileName?: TableUseExportProps['exportFileName']
    onExportRequestSuccess?: null | TableUseExportProps['onExportRequestSuccess']
    onExportSuccess?: null | TableUseExportProps['onExportSuccess']
    onExportError?: null | TableUseExportProps['onExportError']

    importUploadProps?: TableUseImportProps['importUploadProps']
    importFileParamsFormat?: null | TableUseImportProps['importFileParamsFormat']
    onImportSuccess?: null | TableUseImportProps['onImportSuccess']
    onImportError?: null | TableUseImportProps['onImportError']

    downloadTemplateBtn?: TableUseDownloadTemplateProps['downloadTemplateBtn']
    templateFileName?: TableUseDownloadTemplateProps['templateFileName']
    downloadTempalteParamsFormat?:
        | null
        | TableUseDownloadTemplateProps['downloadTempalteParamsFormat']

    onTemplateRequestSuccess?: null | TableUseDownloadTemplateProps['onTemplateRequestSuccess']
    onTemplateDownloadSuccess?: null | TableUseDownloadTemplateProps['onTemplateDownloadSuccess']
    onTemplateDownloadError?: null | TableUseDownloadTemplateProps['onTemplateDownloadError']

    autoSizeConfig?: TableUseAutoSizeProps['autoSizeConfig']
    minScollHeight?: TableUseAutoSizeProps['minScollHeight']
}

interface controlColumnInfo {
    rowInfo: TableColumnCustomRenderArgs
    metaColumnInfo: TableColumnProps
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
    customQueryFormBtns?: (options: queryFormSlotOptions) => VNode[] | JSX.Element[]

    customControlColumnBtns?: (
        options: controlColumnSlotOptions,
        info: controlColumnInfo
    ) => VNode[] | JSX.Element[]

    customCiesBtns?: (orgNode: {
        CreateBtn: VNode
        ImportBtn: VNode
        ExportDropDown: VNode
        ExportCurrentPageBtn: VNode
        ExportAllBtn: VNode
        ColumnSettingBtn: VNode
        DownloadTemplateBtn: VNode
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
    // 'default',
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
