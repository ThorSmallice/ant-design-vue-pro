import {
    Button,
    Col,
    ColProps,
    Flex,
    FlexProps,
    Form,
    FormItemProps,
    FormProps,
    Row,
    RowProps,
} from 'ant-design-vue'
import { FieldNamesType } from 'ant-design-vue/es/cascader'
import { Callbacks, RuleError, RuleObject } from 'ant-design-vue/es/form/interface'
import { Props, ValidateInfo, validateInfos, validateOptions } from 'ant-design-vue/es/form/useForm'
import { cloneDeep, isFunction, omit } from 'es-toolkit'
import { computed, h, Reactive, reactive, ref, Ref, toRaw, useSlots, VNode, watch } from 'vue'
import { ControlMapProps, flattenDataIndex, FormItemControl } from './control'
import { ciesBtnsVNode, OwnBtnProps } from './index.type'
import { TableUseCUReturnOptions } from './useCU'
interface DebounceSettings {
    leading?: boolean
    wait?: number
    trailing?: boolean
}
type namesType = string | string[]
export interface FormInstance {
    modelRef: Props | Ref<Props>
    rulesRef: Props | Ref<Props>
    initialModel: Props
    validateInfos: validateInfos
    resetFields: (newValues?: Props) => void
    validate: <T = any>(names?: FieldNamesType, option?: validateOptions) => Promise<T>
    /** This is an internal usage. Do not use in your prod */
    validateField: (
        name: string,
        value: any,
        rules: Record<string, unknown>[],
        option?: validateOptions
    ) => Promise<RuleError[]>
    mergeValidateInfo: (items: ValidateInfo | ValidateInfo[]) => ValidateInfo
    clearValidate: (names?: namesType) => void
}
export interface TableQueryFormInstance extends FormInstance {
    submit: (vals: any) => void
    reset: () => void
}
export interface TableQueryFormItemProps<T extends keyof ControlMapProps = keyof ControlMapProps>
    extends FormItemProps {
    control?: T
    controlProps?: ControlMapProps[T] & { [key: string]: any }
    customControl?: (model: Reactive<any>, name: FormItemProps['name'], realName: string) => VNode
    colProps?: ColProps
    rules?: RuleObject[]
}

export type UseFormOptions = {
    immediate?: boolean
    deep?: boolean
    validateOnRuleChange?: boolean
    debounce?: DebounceSettings
    onValidate?: Callbacks['onValidate']
}

export interface TableQueryFormProps {
    queryFormItems?: TableQueryFormItemProps[]
    queryFormProps?: FormProps
    queryFormRowProps?: RowProps
    queryFormColProps?: ColProps
    queryFormFlexProps?: FlexProps
    queryFormTimeFormat?: string
    queryFormSubmitBtn?: boolean | ((form: TableQueryFormInstance) => VNode)
    queryFormSubmitBtnProps?: OwnBtnProps
    queryFormResetBtn?: boolean | ((form: TableQueryFormInstance) => VNode)
    queryFormResetBtnProps?: OwnBtnProps
    queryFormSubmitWithReset?: boolean
    ciesBtnsInQueryForm?: boolean
    ciesBtnsVNode?: ciesBtnsVNode
    CreateBtn?: Ref<TableUseCUReturnOptions['CreateBtn']>
    ImportBtn?: TableUseCUReturnOptions
    queryFormControlFormItemProps?: TableQueryFormItemProps
    defaultValues?: any
    [key: string]: any
}

const useQueryForm = (props: TableQueryFormProps) => {
    const {
        queryFormItems,
        queryFormProps,
        queryFormRowProps,
        queryFormColProps,
        queryFormFlexProps,
        queryFormSubmitBtn,
        queryFormResetBtn,
        queryFormSubmitWithReset,
        queryFormSubmitBtnProps,
        queryFormResetBtnProps,
        queryFormControlFormItemProps,
        ciesBtnsInQueryForm,
        ciesBtnsVNode,
        defaultValues,
        emits,
    } = $(props)

    const initValues = defaultValues ? toRaw(defaultValues) : {}

    const queryFormState = reactive<{
        values: any
    }>({ values: cloneDeep(initValues) })

    const formRef = ref<any>()

    watch(
        () => queryFormState.values,
        (currentModel, prevModel) => {
            emits('queryFormModelChange', currentModel, prevModel)
        },
        {
            deep: true,
        }
    )
    const { customQueryFormBtns, customCiesBtns } = $(useSlots())

    const queryFormParams = reactive<{ values: any }>({
        values: cloneDeep(initValues),
    })

    const onQueryFormFinish = (vals: any) => {
        queryFormParams.values = vals
    }

    const onQueryFormReset = (vals?: any) => {
        queryFormSubmitWithReset && onQueryFormFinish(vals || initValues)
        queryFormState.values = cloneDeep(vals || initValues)
    }
    const QueryFormInstance = reactive({
        submit: onQueryFormFinish,
        reset: onQueryFormReset,
    })

    const SubmitBtn = queryFormSubmitBtn ? (
        isFunction(queryFormSubmitBtn) ? (
            queryFormSubmitBtn?.(QueryFormInstance)
        ) : (
            <Button
                class="flex items-center"
                type="primary"
                htmlType="submit"
                {...omit(queryFormSubmitBtnProps, ['children'])}
            >
                {queryFormSubmitBtnProps?.children}
            </Button>
        )
    ) : null

    const ResetBtn = queryFormResetBtn ? (
        isFunction(queryFormResetBtn) ? (
            queryFormResetBtn?.(QueryFormInstance)
        ) : (
            <Button
                class="flex items-center"
                onClick={() => onQueryFormReset()}
                {...omit(queryFormResetBtnProps, ['children'])}
            >
                {queryFormResetBtnProps?.children}
            </Button>
        )
    ) : null

    const CreateBtn = $(computed(() => h(ciesBtnsVNode?.CreateBtn)))
    const ImportBtn = $(computed(() => h(ciesBtnsVNode?.ImportBtn)))
    const ExportDropDown = $(computed(() => h(ciesBtnsVNode?.ExportDropDown)))
    const ExportCurrentPageBtn = $(computed(() => h(ciesBtnsVNode?.ExportCurrentPageBtn)))
    const ExportAllBtn = $(computed(() => h(ciesBtnsVNode?.ExportAllBtn)))
    const ColumnSettingBtn = $(computed(() => h(ciesBtnsVNode?.ColumnSettingBtn)))
    const DownloadTemplateBtn = $(computed(() => h(ciesBtnsVNode?.DownloadTemplateBtn)))

    const QueryForm = () => (
        <Form
            ref={(e) => {
                formRef.value = e

                Object.assign(QueryFormInstance, e)
            }}
            model={queryFormState.values}
            onFinish={onQueryFormFinish}
            {...queryFormProps}
        >
            <Flex justify="space-between" {...queryFormFlexProps}>
                <Row gutter={[10, 10]} class={['flex-1']} {...queryFormRowProps}>
                    {queryFormItems?.map((item, i) => {
                        const {
                            label,
                            name,
                            rules,
                            control,
                            controlProps,
                            customControl,
                            colProps,
                            ...formItemProps
                        } = item
                        return (
                            <Col
                                key={JSON.stringify(name) || i}
                                {...queryFormColProps}
                                {...colProps}
                            >
                                <Form.Item
                                    label={label}
                                    name={flattenDataIndex(name)}
                                    rules={rules}
                                    {...formItemProps}
                                >
                                    {isFunction(customControl) ? (
                                        customControl?.(
                                            queryFormState,
                                            name,
                                            flattenDataIndex(name)
                                        )
                                    ) : (
                                        <FormItemControl
                                            type={control}
                                            model={queryFormState.values}
                                            name={flattenDataIndex(name)}
                                            {...controlProps}
                                        ></FormItemControl>
                                    )}
                                </Form.Item>
                            </Col>
                        )
                    })}
                </Row>
                {customQueryFormBtns && isFunction(customQueryFormBtns) ? (
                    customQueryFormBtns?.({
                        SubmitBtn,
                        ResetBtn,
                        QueryFormInstance,
                        CreateBtn,
                        ImportBtn,
                        ExportDropDown,
                        ExportCurrentPageBtn,
                        ExportAllBtn,
                        ColumnSettingBtn,
                        DownloadTemplateBtn,
                    })
                ) : (
                    <Form.Item class={['ml-2']} {...queryFormControlFormItemProps}>
                        <Flex gap={8} wrap={'wrap'} justify="flex-end">
                            {SubmitBtn}
                            {ResetBtn}
                            {ciesBtnsInQueryForm ? (
                                customCiesBtns && isFunction(customCiesBtns) ? (
                                    customCiesBtns?.({
                                        CreateBtn,
                                        ImportBtn,
                                        ExportDropDown,
                                        ExportCurrentPageBtn,
                                        ExportAllBtn,
                                        ColumnSettingBtn,
                                        DownloadTemplateBtn,
                                    })
                                ) : (
                                    <>
                                        {CreateBtn}
                                        {ImportBtn}
                                        {ExportDropDown}
                                        {DownloadTemplateBtn}
                                        {ColumnSettingBtn}
                                    </>
                                )
                            ) : null}
                        </Flex>
                    </Form.Item>
                )}
            </Flex>
        </Form>
    )
    return {
        QueryForm,
        QueryFormInstance,
        queryFormParams,
        queryFormState,
    }
}

export default useQueryForm
