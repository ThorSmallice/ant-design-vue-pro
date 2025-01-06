import { get, isEmpty, isFunction } from 'es-toolkit/compat'
import { ownBtnProps, OwnBtnProps, TableProps } from './index.type'
import { Button, message } from 'ant-design-vue'
import { ref } from 'vue'
import { cloneDeep } from 'es-toolkit'
import { AxiosResponse } from 'axios'
import JsFileDownloader, { OptionalParams } from 'js-file-downloader'
import dayjs from 'dayjs'
import mime from 'mime'

export interface TableUseDownloadTemplateProps {
    apis?: TableProps['apis']
    fieldsNames?: TableProps['fieldsNames']
    templateFileName?: string
    downloadTemplateBtn?: ownBtnProps
    downloadTempalteParamsFormatter?: TableProps['requestParamsFormatter']
    onTemplateRequestSuccess?: (res: AxiosResponse) => Promise<DownloadResResponse | false>
    onTemplateDownloadSuccess?: (res: any) => Promise<false | void>
    onTemplateDownloadError?: (error: Error) => Promise<false | void>
    resultParams?: any
    [key: string]: any
}

export type DownloadResResponse = {
    thumbUrl: string
    filename?: string
    config?: OptionalParams
}
export default (props: TableUseDownloadTemplateProps) => {
    const {
        apis,
        downloadTemplateBtn,
        fieldsNames,
        resultParams,
        templateFileName,
        downloadTempalteParamsFormatter,
        onTemplateRequestSuccess,
        onTemplateDownloadSuccess,
        onTemplateDownloadError,
        tableTextConfig,
    } = $(props)
    const downloadTemplateBtnLoading = ref(false)

    const downloadTempalte = async () => {
        if (!apis?.template) return console.warn('请传递apis.template')
        downloadTemplateBtnLoading.value = true
        const params = isFunction(downloadTempalteParamsFormatter)
            ? await downloadTempalteParamsFormatter?.(cloneDeep(resultParams))
            : {}

        await apis
            ?.template?.(params)
            ?.then(async (res) => {
                const opt = isFunction(onTemplateRequestSuccess)
                    ? await onTemplateRequestSuccess?.(res)
                    : transFormBlob(res)
                if (opt === false) return
                const { thumbUrl, filename, config } = opt as DownloadResResponse
                const downloadRes = await new JsFileDownloader({
                    url: thumbUrl,
                    timeout: null,
                    filename: filename || templateFileName || `${dayjs().valueOf()}`,
                    autoStart: true,
                    ...(config || {}),
                })

                window?.URL?.revokeObjectURL?.(thumbUrl)

                if (
                    isFunction(onTemplateDownloadSuccess) &&
                    (await onTemplateDownloadSuccess?.(downloadRes)) === false
                ) {
                    return
                }
                message.success(tableTextConfig?.message?.downloadTemplateSuccess)
            })
            ?.catch?.(async (error) => {
                if (
                    isFunction(onTemplateDownloadError) &&
                    (await onTemplateDownloadError?.(error)) === false
                ) {
                    return
                }

                message.error(tableTextConfig?.message?.downloadTemplateError)
            })
            ?.finally?.(() => {
                downloadTemplateBtnLoading.value = false
            })
    }

    const transFormBlob = (res: AxiosResponse): DownloadResResponse => {
        const data = get(res, fieldsNames?.export)

        const href = URL.createObjectURL(data)
        return {
            thumbUrl: href,
            filename: templateFileName || `${dayjs().valueOf()}.${mime.getExtension(data?.type)}`,
            config: null,
        }
    }
    const DownloadTemplateBtn = (props?: OwnBtnProps) => {
        if (!downloadTemplateBtn || !apis?.template) return null

        const { children, ...btnProps } = !isEmpty(props)
            ? props
            : ((downloadTemplateBtn || {}) as OwnBtnProps)

        return (
            <Button
                class="flex items-center"
                disabled={downloadTemplateBtnLoading.value}
                loading={downloadTemplateBtnLoading.value}
                onClick={downloadTempalte}
                {...btnProps}
            >
                {children}
            </Button>
        )
    }

    return {
        DownloadTemplateBtn,
    }
}
