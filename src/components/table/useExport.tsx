import { Button, ButtonProps, Dropdown, Menu, message } from 'ant-design-vue'
import { AxiosResponse } from 'axios'
import dayjs from 'dayjs'
import { isFunction, merge } from 'es-toolkit'
import { get, isEmpty } from 'es-toolkit/compat'
import JsFileDownloader, { OptionalParams } from 'js-file-downloader'
import mime from 'mime'
import { ref } from 'vue'
import { OwnBtnProps, ownBtnProps, ownDropDownProps, OwnDropProps, TableProps } from './index.type'
import { LoadingOutlined } from '@ant-design/icons-vue'
export type ExportResponse = {
    thumbUrl: string
    filename?: string
    config?: OptionalParams
}

export type ExportDataType = 'currentPage' | 'allPage'
export interface TableUseExportProps {
    apis?: TableProps['apis']
    fieldsNames?: TableProps['fieldsNames']
    resultParams?: any
    exportFileByParams?: boolean
    exportFileName?: string
    exportFileParamsFormatter?: (vals?: any, type?: ExportDataType) => Promise<any>
    exportDropdown?: ownDropDownProps
    exportCurrentPageBtn?: ownBtnProps
    exportAllBtn?: ownBtnProps
    onExportRequestSuccess?: (res: AxiosResponse) => Promise<ExportResponse | false>
    onExportSuccess?: (res: any) => Promise<boolean | void>
    onExportError?: (error: Error) => Promise<boolean | void>
    [key: string]: any
}

export default (props: TableUseExportProps) => {
    const {
        apis,
        resultParams,
        pagination,
        fieldsNames,
        exportFileByParams,
        exportFileName,
        exportFileParamsFormatter,
        onExportRequestSuccess,
        onExportSuccess,
        onExportError,
        exportDropdown,
        exportCurrentPageBtn,
        exportAllBtn,

        tableTextConfig,
    } = $(props)

    const exportCurrentPageBtnLoading = ref(false)
    const exportAllBtnLoading = ref(false)
    const exportFile = async (type: 'currentPage' | 'allPage' = 'currentPage') => {
        if (!apis?.export) return console.warn('请传递apis.export')

        let exportDataParams: any = null

        switch (type) {
            case 'currentPage':
                exportCurrentPageBtnLoading.value = true
                exportDataParams = {
                    [fieldsNames.page]: pagination.page,
                    [fieldsNames.pageSize]: pagination.pageSize,
                }
                break
            case 'allPage':
                exportAllBtnLoading.value = true
                exportDataParams = {
                    [fieldsNames.pageSize]: -1,
                }
                break
        }

        const resParams = exportFileByParams
            ? exportFileParamsFormatter && isFunction(exportFileParamsFormatter)
                ? await exportFileParamsFormatter?.(
                      {
                          ...resultParams,
                          ...exportDataParams,
                      },
                      type
                  )
                : {
                      ...resultParams,
                      ...exportDataParams,
                  }
            : exportDataParams

        await apis
            ?.export?.(resParams)
            ?.then(async (res) => {
                const opt = isFunction(onExportRequestSuccess)
                    ? await onExportRequestSuccess?.(res)
                    : transFormBlob(res)
                if (opt === false) return
                const { thumbUrl, filename, config } = opt as ExportResponse
                const downloadRes = await new JsFileDownloader({
                    url: thumbUrl,
                    timeout: null,
                    filename: filename || exportFileName || `${dayjs().valueOf()}`,
                    autoStart: true,
                    ...(config || {}),
                })

                window?.URL?.revokeObjectURL?.(thumbUrl)

                if (
                    isFunction(onExportSuccess) &&
                    (await onExportSuccess?.(downloadRes)) === false
                ) {
                    return
                }
                message.success(tableTextConfig?.message?.exportSuccess)
            })
            ?.catch(async (error) => {
                if (isFunction(onExportError) && (await onExportError?.(error)) === false) {
                    return
                }

                message.error(tableTextConfig?.message?.exportError)
            })
            ?.finally(() => {
                if (type === 'currentPage') {
                    exportCurrentPageBtnLoading.value = false
                } else {
                    exportAllBtnLoading.value = false
                }
            })
    }

    const transFormBlob = (res: AxiosResponse): ExportResponse => {
        const data = fieldsNames?.export === 'self' ? res : get(res, fieldsNames?.export)

        const href = URL.createObjectURL(data)
        return {
            thumbUrl: href,
            filename: exportFileName || `${dayjs().valueOf()}.${mime.getExtension(data?.type)}`,
            config: null,
        }
    }

    const ExportCurrentPageBtn = (props?: OwnBtnProps) => {
        if (!exportCurrentPageBtn || !apis?.export) return null
        const { children, ...btnProps } = merge(
            exportCurrentPageBtn || {},
            props || {}
        ) as OwnBtnProps

        return (
            <Button
                disabled={exportCurrentPageBtnLoading.value}
                loading={exportCurrentPageBtnLoading.value}
                onClick={() => exportFile('currentPage')}
                {...btnProps}
            >
                {children}
            </Button>
        )
    }
    const ExportAllBtn = (props?: OwnBtnProps) => {
        if (!exportAllBtn || !apis?.export) return null

        const { children, ...btnProps } = merge(exportAllBtn || {}, props || {}) as OwnBtnProps

        return (
            <Button
                disabled={exportAllBtnLoading.value}
                loading={exportAllBtnLoading.value}
                onClick={() => exportFile('allPage')}
                {...btnProps}
            >
                {children}
            </Button>
        )
    }

    const onMenuClick = ({ key }) => {
        exportFile(key)
    }
    const ExportDropDown = (props?: OwnDropProps) => {
        if (!exportDropdown || !apis?.export) return null
        const { children, buttonProps, ...dropProps } = merge(
            exportDropdown || {},
            props || {}
        ) as OwnDropProps

        const { children: currentPageChildren } = exportCurrentPageBtn || {}
        const { children: allPageChildren } = exportAllBtn || {}

        return (
            <Dropdown
                overlay={
                    <Menu
                        onClick={onMenuClick}
                        items={[
                            {
                                label: currentPageChildren || '导出当前页',
                                key: 'currentPage',
                                disabled: exportCurrentPageBtnLoading.value,
                                icon: exportCurrentPageBtnLoading.value ? (
                                    <LoadingOutlined />
                                ) : null,
                            },
                            {
                                label: allPageChildren || '导出全部',
                                key: 'allPage',
                                icon: exportAllBtnLoading.value ? <LoadingOutlined /> : null,
                                disabled: exportAllBtnLoading.value,
                            },
                        ]}
                    ></Menu>
                }
                {...(dropProps || {})}
            >
                <Button
                    loading={exportCurrentPageBtnLoading.value || exportAllBtnLoading.value}
                    class="flex items-center"
                    {...(buttonProps || {})}
                >
                    {exportCurrentPageBtnLoading?.value || exportAllBtnLoading?.value
                        ? `正在${children}`
                        : children}
                </Button>
            </Dropdown>
        )
    }
    return {
        ExportDropDown,
        ExportCurrentPageBtn,
        ExportAllBtn,
        exportFile,
    }
}
