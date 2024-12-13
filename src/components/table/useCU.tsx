import {
    FormItemProps as AFormItemProps,
    Button,
    Col,
    ColProps,
    Form,
    FormItemProps,
    FormProps,
    message,
    Modal,
    ModalProps,
    Row,
    RowProps,
    Skeleton,
} from 'ant-design-vue'
import { isFunction } from 'es-toolkit'
import { computed, Reactive, reactive, Ref, ref, VNode } from 'vue'
import { JSX } from 'vue/jsx-runtime'
import { ControlMapProps, FormItemControl } from './control'
import { ownBtnProps, TableProps, TableTextConfig } from './index.type'
import { FormInstance, UseFormOptions } from './useQueryForm'

export interface TableCUFormInstance extends FormInstance {}

export interface TableUseCUReturnOptions {
    CreateBtn: () => JSX.Element
    CUModalForm: () => JSX.Element
    cuFormModel: Reactive<{ values: any }>
    cuModalLoading: Ref<boolean>
    submitBtnLoading: Ref<boolean>
    cuModalFormIsEdit: Ref<boolean>
    openCUModalForm: (isEdit: boolean) => void
    CUModalFormInstance: TableCUFormInstance
}

export interface TableUseCUFormProps {
    apis?: TableProps['apis']
    createBtn?: ownBtnProps
    columns?: TableProps['columns']
    cuFormProps?: FormProps
    cuFormRules?: FormItemProps['rules']
    cuFormModalProps?: ModalProps
    cuFormRowProps?: RowProps
    cuFormColProps?: ColProps
    tableTextConfig?: TableTextConfig

    [key: string]: any
}
export interface TableUseCUFormItemProps<T extends keyof ControlMapProps = keyof ControlMapProps>
    extends AFormItemProps {
    control?: T
    colProps?: ColProps
    controlProps?: ControlMapProps[T]
    customControl?: (
        props: {
            label: string
            name: string | string[]
            title: string
            dataIndex: string | string[]
        },
        model: Reactive<any>
    ) => VNode | JSX.Element
    customRender?: (model: Reactive<any>, form: TableCUFormInstance) => VNode | JSX.Element
}
export default (props: TableUseCUFormProps): TableUseCUReturnOptions => {
    const {
        apis,
        createBtn,
        columns,
        tableTextConfig,

        cuFormProps,
        cuFormModalProps,
        cuFormRowProps,
        cuFormColProps,
        tableRef,
        onBeforeCuFormSubmit,
        onCuFormSubmitSuccess,
        onCuFormSubmitError,
        updateSource,
    } = $(props)

    const cuModalLoading = ref(false)
    const submitBtnLoading = ref(false)
    const cuModalOpen = ref(false)
    const cuModalFormIsEdit = ref(false)
    const cuFormModel = reactive<{
        values: any
    }>({
        values: {},
    })

    const formRef = ref<FormInstance>()

    const openCUModalForm = async (isEdit: boolean = false, record?: any) => {
        cuModalOpen.value = true
        cuModalFormIsEdit.value = isEdit
    }

    const submitCUModalForm = async () => {
        submitBtnLoading.value = true
        formRef.value
            .validate?.()
            .then(async (vals) => {
                const data = (await onBeforeCuFormSubmit?.(vals)) || vals

                try {
                    const res = await apis?.[cuModalFormIsEdit.value ? 'update' : 'create']?.(data)
                    cuModalOpen.value = false
                    updateSource?.()
                    if (onCuFormSubmitSuccess?.(res, cuModalFormIsEdit.value) === false) {
                        return
                    }
                    message.success(
                        `${
                            cuModalFormIsEdit.value
                                ? tableTextConfig?.message?.updateSuccess
                                : tableTextConfig?.message?.createSuccess
                        }`
                    )
                } catch (error) {
                    if (onCuFormSubmitError?.(error, cuModalFormIsEdit.value) === false) {
                        return
                    }
                    message.error(
                        `${
                            cuModalFormIsEdit.value
                                ? tableTextConfig?.message?.updateError
                                : tableTextConfig?.message?.createError
                        }`
                    )
                }
            })
            .catch(() => {})
            .finally(() => {
                submitBtnLoading.value = false
            })
    }

    const cancelCUModalForm = () => {
        cuModalOpen.value = false
        cuFormModel.values = {}
    }
    const CreateBtn = () => {
        const { children, ...btnProps } = createBtn || {}
        return (
            <Button onClick={() => openCUModalForm(false)} {...btnProps}>
                {children}
            </Button>
        )
    }

    const CUModalForm = () => {
        return (
            <Modal
                v-model:open={cuModalOpen.value}
                title={
                    !cuModalFormIsEdit.value
                        ? tableTextConfig?.modalTitle?.create
                        : tableTextConfig?.modalTitle?.update
                }
                onCancel={cancelCUModalForm}
                onOk={submitCUModalForm}
                confirmLoading={submitBtnLoading.value}
                getContainer={() => tableRef}
                maskClosable={false}
                {...cuFormModalProps}
            >
                <Skeleton active loading={cuModalLoading?.value}>
                    <Form ref={formRef} model={cuFormModel.values} {...cuFormProps}>
                        <Row gutter={[24, 10]} {...cuFormRowProps}>
                            {columns?.map?.(({ title, dataIndex, formItemProps }, i: number) => {
                                const {
                                    name,
                                    label,
                                    customRender,
                                    control,
                                    colProps,
                                    controlProps,
                                    rules,
                                    hidden,
                                    customControl,
                                    ...oths
                                } = formItemProps || {}
                                return (
                                    <Col
                                        key={
                                            JSON.stringify(name || dataIndex || title) ||
                                            `${i}-${title}-${dataIndex}`
                                        }
                                        class={[hidden && 'hidden']}
                                        {...cuFormColProps}
                                        {...colProps}
                                    >
                                        {customRender && isFunction(customRender) ? (
                                            customRender?.(cuFormModel, CUModalFormInstance)
                                        ) : (
                                            <Form.Item
                                                label={label || title}
                                                name={name || (dataIndex as FormItemProps['name'])}
                                                rules={rules}
                                                {...oths}
                                            >
                                                {isFunction(customControl) ? (
                                                    customControl?.(
                                                        { name, dataIndex, label, title },
                                                        cuFormModel
                                                    )
                                                ) : (
                                                    <FormItemControl
                                                        type={control}
                                                        model={cuFormModel.values}
                                                        name={name || dataIndex}
                                                        {...controlProps}
                                                    ></FormItemControl>
                                                )}
                                            </Form.Item>
                                        )}
                                    </Col>
                                )
                            })}
                        </Row>
                    </Form>
                </Skeleton>
            </Modal>
        )
    }

    const CUModalFormInstance = $(computed(() => formRef.value as TableCUFormInstance))
    return {
        CreateBtn,
        CUModalForm,
        cuFormModel,
        cuModalLoading,
        submitBtnLoading,
        cuModalFormIsEdit,
        openCUModalForm,
        CUModalFormInstance,
    }
}
