import { Button, ButtonProps, Dropdown, Menu, message } from 'ant-design-vue'
import { AxiosResponse } from 'axios'
import dayjs from 'dayjs'
import { isFunction } from 'es-toolkit'
import { get } from 'es-toolkit/compat'
import JsFileDownloader, { OptionalParams } from 'js-file-downloader'
import mime from 'mime'
import { ref } from 'vue'
import { ownBtnProps, ownDropDownProps, OwnDropProps, TableProps } from './index.type'
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
    exportFileParamsFormat?: (vals?: any, type?: ExportDataType) => Promise<any>
    exportDropdown?: ownDropDownProps
    exportCurrentPageBtn?: ownBtnProps
    exportAllBtn?: ownBtnProps
    onExportRequestSuccess?: (res: AxiosResponse) => Promise<ExportResponse | false>
    onExportSuccess?: (res: any) => Promise<false | void>
    onExportError?: (error: Error) => Promise<false | void>
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
        exportFileParamsFormat,
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
        let exportDataParams: any = null
        if (type === 'currentPage') {
            exportCurrentPageBtnLoading.value = true
            exportDataParams = {
                [fieldsNames.page]: pagination.page,
                [fieldsNames.pageSize]: pagination.pageSize,
            }
        } else {
            exportAllBtnLoading.value = true
            exportDataParams = {
                [fieldsNames.pageSize]: -1,
            }
        }

        const resParams = exportFileByParams
            ? exportFileParamsFormat && isFunction(exportFileParamsFormat)
                ? exportFileParamsFormat?.(
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
            .then(async (res) => {
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
            .catch(async (error) => {
                if (isFunction(onExportError) && (await onExportError?.(error)) === false) {
                    return
                }

                message.error(tableTextConfig?.message?.exportError)
            })
            .finally(() => {
                if (type === 'currentPage') {
                    exportCurrentPageBtnLoading.value = false
                } else {
                    exportAllBtnLoading.value = false
                }
            })
    }

    const transFormBlob = (res: AxiosResponse): ExportResponse => {
        const data = get(res, fieldsNames?.export)

        const href = URL.createObjectURL(data)
        return {
            thumbUrl: href,
            filename: exportFileName || `${dayjs().valueOf()}.${mime.getExtension(data?.type)}`,
            config: null,
        }
    }

    const ExportCurrentPageBtn = (props?: ButtonProps) => {
        const { children, ...btnProps } = exportCurrentPageBtn || {}

        return (
            <Button
                disabled={exportCurrentPageBtnLoading.value}
                loading={exportCurrentPageBtnLoading.value}
                {...btnProps}
                {...props}
            >
                {children}
            </Button>
        )
    }
    const ExportAllBtn = (props?: ButtonProps) => {
        const { children, ...btnProps } = exportAllBtn || {}

        return (
            <Button
                disabled={exportAllBtnLoading.value}
                loading={exportAllBtnLoading.value}
                {...btnProps}
                {...props}
            >
                {children}
            </Button>
        )
    }

    const onMenuClick = ({ key }) => {
        exportFile(key)
    }
    const ExportDropDown = () => {
        const { children, buttonProps, ...dropProps } = exportDropdown || {}
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
