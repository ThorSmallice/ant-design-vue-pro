import { Button, message, Upload, UploadProps } from 'ant-design-vue'
import { UploadRequestOption } from 'ant-design-vue/es/vc-upload/interface'
import { isFunction, merge } from 'es-toolkit'
import { ref } from 'vue'
import { OwnBtnProps, ownBtnProps, TableProps } from './index.type'
import { AxiosResponse } from 'axios'
import { isEmpty } from 'es-toolkit/compat'

export interface ImportFileParmas {
    file: File
    [key: string]: any
}
export interface TableUseImportProps {
    apis?: TableProps['apis']
    onImportSuccess?: (res: AxiosResponse) => Promise<void | boolean>
    onImportError?: (error: Error) => Promise<void | boolean>
    importBtn?: ownBtnProps
    importUploadProps?: UploadProps
    importFileParamsFormatter?: null | ((options: UploadRequestOption) => Promise<any>)
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
        importFileParamsFormatter,
        updateSource,
    } = $(props)

    const importBtnLoading = ref(false)

    const importFile = async (options: UploadRequestOption) => {
        const { file } = options
        importBtnLoading.value = true

        const data = { file }

        const requestData =
            importFileParamsFormatter && isFunction(importFileParamsFormatter)
                ? await importFileParamsFormatter(options)
                : data

        try {
            const res = await apis?.import(requestData)
            importBtnLoading.value = false

            updateSource?.()
            if (isFunction(onImportSuccess) && (await onImportSuccess?.(res)) === false) {
                return
            }
            message.success(tableTextConfig?.message?.importSuccess)
        } catch (error) {
            importBtnLoading.value = false

            if (isFunction(onImportError) && (await onImportError?.(error)) === false) {
                return
            }
            message.error(tableTextConfig?.message?.importError)
        }

        importBtnLoading.value = false
    }
    const ImportBtn = (props?: OwnBtnProps) => {
        if (!importBtn || !apis?.import) return null
        const { children, ...btnProps } = merge(importBtn || {}, props || {}) as OwnBtnProps

        return (
            <Upload
                showUploadList={false}
                customRequest={importFile}
                {...(importUploadProps || {})}
            >
                <Button
                    disabled={importBtnLoading.value}
                    loading={importBtnLoading.value}
                    class="flex items-center"
                    {...btnProps}
                >
                    {importBtnLoading?.value ? `正在${children}...` : children}
                </Button>
            </Upload>
        )
    }

    return {
        ImportBtn,
    }
}
