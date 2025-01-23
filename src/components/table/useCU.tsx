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
import { cloneDeep, isFunction, merge } from 'es-toolkit'
import { isEmpty } from 'es-toolkit/compat'
import { computed, Reactive, reactive, Ref, ref, toRaw, VNode, watch } from 'vue'
import { JSX } from 'vue/jsx-runtime'
import { ControlMapProps, flattenDataIndex, FormItemControl } from './control'
import { OwnBtnProps, ownBtnProps, TableProps, TableTextConfig } from './index.type'
import { FormInstance } from './useQueryForm'
import { TableColumnProps } from './useColumns'

export interface TableCUFormInstance extends FormInstance {}

export interface TableUseCUReturnOptions {
    CreateBtn: (props?: OwnBtnProps) => JSX.Element
    CUModalForm: () => JSX.Element
    cuFormModel: Reactive<{ values: any }>
    cuModalLoading: Ref<boolean>
    submitBtnLoading: boolean
    cuModalFormIsEdit: boolean
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
    defaultValues?: any
    onCuFormCancel?: () => boolean | void
    [key: string]: any
}

export interface TableUseCUFormItemProps<T extends keyof ControlMapProps = keyof ControlMapProps>
    extends Omit<AFormItemProps, 'name'> {
    name?: string
    control?: T
    colProps?: ColProps
    controlProps?:
        | ((opt: { model: any; isEdit: boolean }) => ControlMapProps[T] & { [key: string]: any })
        | (ControlMapProps[T] & { [key: string]: any })
    sort?: number
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
        onCuFormCancel,
        updateSource,
        defaultValues,
        emits,
    } = $(props)

    const initValues = defaultValues ? toRaw(defaultValues) : {}
    const cuModalLoading = ref(false)
    const submitBtnLoading = ref(false)
    const cuModalOpen = ref(false)
    const cuModalFormIsEdit = ref(false)
    const cuFormModel = reactive<{
        values: any
    }>({
        values: cloneDeep(initValues),
    })

    watch(
        () => cuFormModel.values,
        (currentModel, prevModel) => {
            emits('cuFormModelChange', currentModel, prevModel)
        },
        {
            deep: true,
        }
    )

    watch(cuModalFormIsEdit, () => {
        emits('cuFormEditStatusChange', cuModalFormIsEdit.value)
    })
    const formRef = ref<FormInstance>()

    const openCUModalForm = async (isEdit: boolean = false, record?: any) => {
        cuModalOpen.value = true
        cuModalFormIsEdit.value = isEdit
    }

    const submitCUModalForm = async () => {
        try {
            const vals = await formRef.value.validate?.()
            submitBtnLoading.value = true

            let data: any = null

            const cbres = isFunction(onBeforeCuFormSubmit)
                ? await onBeforeCuFormSubmit?.(vals, JSON.parse(JSON.stringify(cuFormModel.values)))
                : null

            if (cbres === false) {
                return
            }
            data = cbres || vals

            await apis?.[cuModalFormIsEdit.value ? 'update' : 'create']?.(data)
                .then((res) => {
                    cancelCUModalForm()
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
                })
                .catch((error) => {
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
                })
                .finally(() => {
                    submitBtnLoading.value = false
                })
        } catch (error) {
            throw error
        }
    }

    const cancelCUModalForm = () => {
        if (onCuFormCancel?.() === false) {
            return
        }
        onCuFormCancel?.()
        cuFormModel.values = cloneDeep(initValues)
        cuModalOpen.value = false
    }
    const CreateBtn = (props?: OwnBtnProps) => {
        if (!createBtn || !apis?.create) return null
        const { children, ...btnProps } = merge(createBtn || {}, props || {}) as OwnBtnProps

        return (
            <Button class="flex items-center" onClick={() => openCUModalForm(false)} {...btnProps}>
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
                destroyOnClose
                {...cuFormModalProps}
            >
                <Skeleton active loading={cuModalLoading?.value}>
                    <Form ref={formRef} model={cuFormModel.values} {...cuFormProps}>
                        <Row gutter={[24, 10]} {...cuFormRowProps}>
                            {columns
                                ?.sort?.((a, b) => a?.formItemProps?.sort - b?.formItemProps?.sort)
                                ?.map?.(({ title, dataIndex, type, formItemProps }, i: number) => {
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

                                    const resControlProps = (
                                        controlProps && isFunction(controlProps)
                                            ? controlProps?.({
                                                  model: cuFormModel.values,
                                                  isEdit: cuModalFormIsEdit.value,
                                              })
                                            : controlProps || {}
                                    ) as TableUseCUFormItemProps['controlProps']

                                    let path: string = flattenDataIndex([
                                        (name || dataIndex) as any,
                                    ])
                                    switch (type) {
                                        case 'date-range':
                                            path = flattenDataIndex([formItemProps?.name as string])
                                            break
                                        default:
                                            break
                                    }

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
                                                    name={path}
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
                                                            name={path}
                                                            {...resControlProps}
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
        submitBtnLoading: submitBtnLoading.value,
        cuModalFormIsEdit: cuModalFormIsEdit.value,
        openCUModalForm,
        CUModalFormInstance,
    }
}
