import { Button, message, Upload, UploadProps } from 'ant-design-vue'
import { UploadRequestOption } from 'ant-design-vue/es/vc-upload/interface'
import { isFunction } from 'es-toolkit'
import { ref } from 'vue'
import { ownBtnProps, TableProps } from './index.type'
import { AxiosResponse } from 'axios'

export interface ImportFileParmas {
    file: File
    [key: string]: any
}
export interface TableUseImportProps {
    apis?: TableProps['apis']
    onImportSuccess?: (res: AxiosResponse) => Promise<any>
    onImportError?: (error: Error) => Promise<any>
    importBtn?: ownBtnProps
    importUploadProps?: UploadProps
    importFileParamsFormat?: null | ((options: UploadRequestOption) => Promise<any>)
    [key: string]: any
}

export default (props: TableUseImportProps) => {
    const {
        apis,
        tableTextConfig,
        importBtn,
        onImportSuccess,
        onImportError,
        importUploadProps,
        importFileParamsFormat,
    } = $(props)

    const importBtnLoading = ref(false)

    const importFile = async (options: UploadRequestOption) => {
        const { file } = options
        importBtnLoading.value = true

        const data = { file }

        const requestData =
            importFileParamsFormat && isFunction(importFileParamsFormat)
                ? await importFileParamsFormat(options)
                : data

        try {
            const res = await apis?.import(requestData)

            if (isFunction(onImportSuccess) && (await onImportSuccess?.(res)) === false) {
                return
            }
            message.success(tableTextConfig?.message?.importSuccess)
        } catch (error) {
            if (isFunction(onImportError) && onImportError?.(error) === false) {
                return
            }
            message.error(tableTextConfig?.message?.importError)
        }
    }
    const ImportBtn = () => {
        const { children, ...btnProps } = importBtn || {}

        return (
            <Upload showUploadList={false} customRequest={importFile} {...importUploadProps}>
                <Button loading={importBtnLoading.value} class="flex items-center" {...btnProps}>
                    {importBtnLoading?.value ? `正在${children}...` : children}
                </Button>
            </Upload>
        )
    }

    return {
        ImportBtn,
    }
}
