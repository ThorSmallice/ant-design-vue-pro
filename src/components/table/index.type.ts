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
import { Reactive, Ref, SetupContext, VNode, WatchOptions, WatchSource } from 'vue'
import { JSX } from 'vue/jsx-runtime'
import { TableUseAutoSizeProps } from './useAutoSize'
import { TableColumnCustomRenderArgs, TableColumnProps, TableUseColumnsProps } from './useColumns'
import { TableUseCUFormProps } from './useCU'
import { TableUseDataSourceProps } from './useDataSource'
import { TableUseDetailProps } from './useDetail'
import { TableUseDownloadTemplateProps } from './useDownloadTemplate'
import { TableUseExportProps } from './useExport'
import { TableUseImportProps } from './useImport'
import {
    TableQueryFormInstance,
    TableQueryFormItemProps,
    TableQueryFormProps,
} from './useQueryForm'
import { TableUseParmasProps } from './useParams'

type TableFieldNames = string | string[] | 'self'

export interface TableInstance {
    source: any[]
    updateSource: () => Promise<void>
    QueryForm: () => JSX.Element | VNode
    queryFormModel: Reactive<{ values: any }>
    QueryFormInstance: Partial<TableQueryFormInstance>
    Pagination: () => JSX.Element | VNode
    cuModalFormIsEdit: Ref<boolean>
    cuFormModel: Reactive<{ values: any }>
    CreateBtn: (props?: OwnBtnProps) => JSX.Element | VNode
    ImportBtn: (props?: OwnBtnProps) => JSX.Element | VNode
    ExportDropDown: (props?: OwnDropProps) => JSX.Element | VNode
    ExportCurrentPageBtn: (props?: OwnBtnProps) => JSX.Element | VNode
    ExportAllBtn: (props?: OwnBtnProps) => JSX.Element | VNode
    onResize: (entries?: any) => void
}
export interface OwnBtnProps extends ButtonProps {
    children?: JSX.Element[] | VNode[] | string
    class?: string
    style?: CSSStyleSheet
}
export interface OwnDropProps extends DropdownProps {
    children?: JSX.Element[] | VNode[] | string
    buttonProps?: ButtonProps
    class?: string
    style?: CSSStyleSheet
}

export interface OwnPopoverProps extends Omit<PopoverProps, 'children'> {
    children?: JSX.Element[] | VNode[] | string
    buttonProps?: ButtonProps
    class?: string
    style?: CSSStyleSheet
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
export type RequestParamsFormatter = (
    params: RequestParams | any
) => Promise<RequestParams | any> | RequestParams | any
export type CRUDRequestFinish<T = any> = (
    res: AxiosResponse | Error,
    info?: any,
    obj?: T
) => boolean | void
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
        details: string
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

export type ciesBtnsVNode = Ref<Partial<ciesBtnsSlotOptions>>

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

export type ciesBtnsSlotOptions = {
    CreateBtn: VNode | JSX.Element
    ImportBtn: VNode | JSX.Element
    ExportDropDown: VNode | JSX.Element
    ExportCurrentPageBtn: VNode | JSX.Element
    ExportAllBtn: VNode | JSX.Element
    ColumnSettingBtn: VNode | JSX.Element
    DownloadTemplateBtn: VNode | JSX.Element
}
export type queryFormSlotOptions = {
    SubmitBtn: VNode | JSX.Element
    ResetBtn: VNode | JSX.Element
    QueryFormInstance: TableQueryFormInstance
} & ciesBtnsSlotOptions
export interface TableProps extends Omit<ATableProps, 'columns' | 'loading' | 'scroll'> {
    full?: boolean // 高度100%
    scroll?: TableUseAutoSizeProps['scroll']
    autoSizeConfig?: TableUseAutoSizeProps['autoSizeConfig']
    minScollHeight?: TableUseAutoSizeProps['minScollHeight']

    autoRequest?: TableUseDataSourceProps['autoRequest']
    autoRequestDependencies?: TableUseDataSourceProps['autoRequestDependencies']
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

    fieldsNames?: Partial<{
        page: string
        pageSize: string
        total: TableFieldNames
        list: TableFieldNames
        details: TableFieldNames
        export: TableFieldNames
        template: TableFieldNames
        editCellTempKey: string
    }>

    tableTextConfig?: TableTextConfig
    /**
     * 额外的请求参数
     * 会覆盖重名的参数
     */
    params?: TableUseParmasProps['params']
    /**
     * 列配置
     */
    columns?: TableColumnProps[]
    columnsTitleNoWrap?: TableUseColumnsProps['columnsTitleNoWrap']
    columnsAlign?: TableColumnProps['align']
    columnsSorter?: TableUseColumnsProps['columnsSorter']
    columnsEllipsis?: TableUseColumnsProps['columnsEllipsis']
    columnsTimeFormat?: TableUseColumnsProps['columnsTimeFormat']
    columnsEmptyText?: TableUseColumnsProps['columnsEmptyText']

    indexColumn?: TableUseColumnsProps['indexColumn']
    indexColumnWidth?: TableUseColumnsProps['indexColumnWidth']
    indexColumnProps?: TableUseColumnsProps['indexColumnProps']
    controlColumn?: TableUseColumnsProps['controlColumn']
    controlColumnWidth?: TableUseColumnsProps['controlColumnWidth']
    controlColumnWidthProps?: TableUseColumnsProps['controlColumnWidthProps']
    controlColumnBtns?: TableUseColumnsProps['controlColumnBtns']
    columnSettingBtn?: TableUseColumnsProps['columnSettingBtn']

    /**
     * 分页配置
     */
    ownPagin?: boolean
    ownPaginProps?: Partial<PaginationProps> & { [key: string]: any }

    /**
     * 内置查询表单配置
     */
    queryForm?: boolean
    queryFormDefaultValues?: TableQueryFormProps['defaultValues']
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
    detailModalProps?: TableUseDetailProps['detailModalProps'] & { [key: string]: any }
    detailDescProps?: TableUseDetailProps['detailDescProps'] & { [key: string]: any }
    detailDescItemProps?: TableUseDetailProps['detailDescItemProps'] & { [key: string]: any }
    detailDescItemEmptyText?: TableUseDetailProps['detailDescItemEmptyText']
    detailDescItemTimeFormat?: TableUseDetailProps['detailDescItemTimeFormat']
    detailBackFillByGetDetail?: TableUseColumnsProps['detailBackFillByGetDetail']

    /**
     * 内置按钮配置
     */

    ciesBtns?: boolean
    ciesBtnsInQueryForm?: boolean

    createBtn?: false | TableUseCUFormProps['createBtn']
    importBtn?: TableUseImportProps['importBtn']
    importUploadProps?: TableUseImportProps['importUploadProps']
    importFileParamsFormatter?: null | TableUseImportProps['importFileParamsFormatter']

    exportDropdown?: TableUseExportProps['exportDropdown']
    exportAllBtn?: TableUseExportProps['exportAllBtn']
    exportBtnMode?: 'dropdown' | 'all'
    exportCurrentPageBtn?: TableUseExportProps['exportCurrentPageBtn']

    exportFileByParams?: TableUseExportProps['exportFileByParams']
    exportFileParamsFormatter?: null | TableUseExportProps['exportFileParamsFormatter']
    exportFileName?: TableUseExportProps['exportFileName']

    downloadTemplateBtn?: TableUseDownloadTemplateProps['downloadTemplateBtn']
    templateFileName?: TableUseDownloadTemplateProps['templateFileName']
    downloadTempalteParamsFormatter?:
        | null
        | TableUseDownloadTemplateProps['downloadTempalteParamsFormatter']

    requestParamsFormatter?: null | RequestParamsFormatter

    onBeforeRequestSource?: null | TableUseDataSourceProps['onBeforeRequestSource']
    onBeforeUpdateSourceFromWatch?: null | TableUseDataSourceProps['onBeforeUpdateSourceFromWatch']
    onSourceSuccess?: null | TableUseDataSourceProps['onSourceSuccess']
    onSourceError?: null | TableUseDataSourceProps['onSourceError']

    onBeforeRequestDetails?: null | TableUseColumnsProps['onBeforeRequestDetails']
    onGetRowDetail?: null | TableUseColumnsProps['onGetRowDetail']
    onBeforeRowEditBackFill?: null | TableUseColumnsProps['onBeforeRowEditBackFill']

    onBeforeCuFormSubmit?: null | ParamsFormatter
    onCuFormSubmitSuccess?: null | CRUDRequestFinish<{ cancelCUModalForm: () => void }>
    onCuFormSubmitError?: null | CRUDRequestFinish<{ cancelCUModalForm: () => void }>
    onCuFormCancel?: null | TableUseCUFormProps['onCuFormCancel']

    onBeforeRowDelete?: null | ParamsFormatter
    onRowDeleteSuccess?: null | CRUDRequestFinish
    onRowDeleteError?: null | ((error: Error) => boolean | void)

    onExportRequestSuccess?: null | TableUseExportProps['onExportRequestSuccess']
    onExportSuccess?: null | TableUseExportProps['onExportSuccess']
    onExportError?: null | TableUseExportProps['onExportError']

    onImportSuccess?: null | TableUseImportProps['onImportSuccess']
    onImportError?: null | TableUseImportProps['onImportError']

    onTemplateRequestSuccess?: null | TableUseDownloadTemplateProps['onTemplateRequestSuccess']
    onTemplateDownloadSuccess?: null | TableUseDownloadTemplateProps['onTemplateDownloadSuccess']
    onTemplateDownloadError?: null | TableUseDownloadTemplateProps['onTemplateDownloadError']

    onCellEditConfirm?: null | TableUseColumnsProps['onCellEditConfirm']
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

    customCiesBtns?: (orgNode: ciesBtnsSlotOptions) => VNode | JSX.Element
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
