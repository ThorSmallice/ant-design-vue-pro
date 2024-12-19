import { Button, message } from 'ant-design-vue'
import { ownBtnProps, TableProps } from './index.type'
import { ref } from 'vue'
import { isFunction } from 'es-toolkit'
import { AxiosResponse } from 'axios'
import JsFileDownloader, { OptionalParams } from 'js-file-downloader'
import { get } from 'es-toolkit/compat'
import dayjs from 'dayjs'
import mime from 'mime'
export type ExportResponse = {
    thumbUrl: string
    filename?: string
    config?: OptionalParams
}
export interface TableUseExportProps {
    apis?: TableProps['apis']
    resultParams?: any
    exportFileByParams?: boolean
    exportFileName?: string
    exportFileParamsFormat?: null | ((vals: any) => Promise<any>)
    exportBtn?: ownBtnProps
    onExportRequestSuccess?: null | ((res: AxiosResponse) => Promise<ExportResponse | false>)
    fieldsNames?: TableProps['fieldsNames']
    [key: string]: any
}

export default (props: TableUseExportProps) => {
    const {
        apis,
        resultParams,
        fieldsNames,
        exportFileByParams,
        exportFileName,
        exportFileParamsFormat,
        onExportRequestSuccess,
        exportBtn,
        onExportSuccess,
        onExportError,
        tableTextConfig,
    } = $(props)

    const exportBtnLoading = ref(false)

    const exportFile = async () => {
        exportBtnLoading.value = true

        const resParams = exportFileByParams
            ? exportFileParamsFormat && isFunction(exportFileParamsFormat)
                ? exportFileParamsFormat?.(resultParams)
                : resultParams
            : {}
        try {
            const res = await apis?.export?.(resParams)

            const opt = isFunction(onExportRequestSuccess)
                ? await onExportRequestSuccess(res)
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

            if (isFunction(onExportSuccess) && onExportSuccess?.(downloadRes) === false) {
                return
            }
            message.success(tableTextConfig?.message?.exportSuccess)
        } catch (error) {
            if (isFunction(onExportError) && onExportError?.(error) === false) {
                return
            }

            message.error(tableTextConfig?.message?.exportError)
        }
        exportBtnLoading.value = false
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
    const ExportBtn = () => {
        const { children, ...btnProps } = exportBtn || {}

        return (
            <Button
                loading={exportBtnLoading.value}
                class="flex items-center"
                onClick={() => exportFile()}
                {...btnProps}
            >
                {exportBtnLoading?.value ? `正在${children}` : children}
            </Button>
        )
    }
    return {
        ExportBtn,
        exportFile,
    }
}
