import {
    Button,
    ButtonProps,
    Col,
    ColProps,
    Flex,
    FlexProps,
    Form,
    FormInstance,
    FormItemProps,
    FormProps,
    Row,
    RowProps,
    Space,
} from 'ant-design-vue'
import { FieldNamesType } from 'ant-design-vue/es/cascader'
import { Callbacks, RuleError, RuleObject } from 'ant-design-vue/es/form/interface'
import { Props, ValidateInfo, validateInfos, validateOptions } from 'ant-design-vue/es/form/useForm'
import { isFunction } from 'es-toolkit'
import { Reactive, reactive, Ref, SlotsType, VNode } from 'vue'
import { ControlMapProps, FormItemControl } from './control'
import { TableSlots } from './index.type'
interface DebounceSettings {
    leading?: boolean
    wait?: number
    trailing?: boolean
}
type namesType = string | string[]

export interface TableQueryFormInstance {
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
    onQueryFormFinish: (vals: any) => void
    onQueryFormReset: () => void
}
export interface TableQueryFormItemProps<T extends keyof ControlMapProps = keyof ControlMapProps>
    extends FormItemProps {
    control?: T
    controlProps?: ControlMapProps[T]
    customControl?: (model: Reactive<any>, name: FormItemProps['name']) => VNode
    colProps?: ColProps
    formItemProps?: FormItemProps
    rules?: RuleObject[]
}
export interface TableQueryFormProps {
    queryFormItem?: TableQueryFormItemProps[]
    queryFormProps?: FormProps
    queryFormRules?: RuleObject[]
    queryUseFormOptions?: {
        immediate?: boolean
        deep?: boolean
        validateOnRuleChange?: boolean
        debounce?: DebounceSettings
        onValidate?: Callbacks['onValidate']
    }
    queryFormRowProps?: RowProps
    queryFormColProps?: ColProps
    queryFormFlexProps?: FlexProps
    queryFormSubmitBtn?: boolean | ((form: FormInstance) => VNode)
    queryFormSubmitBtnProps?: ButtonProps
    queryFormResetBtn?: boolean | ((form: FormInstance) => VNode)
    queryFormResetBtnProps?: ButtonProps
    queryFormSubmitWithReset?: boolean
    slots?: TableSlots
}

export default (props: TableQueryFormProps) => {
    const {
        queryFormItem,
        queryFormProps,
        queryFormRules,
        queryUseFormOptions,
        queryFormRowProps,
        queryFormColProps,
        queryFormFlexProps,
        queryFormSubmitBtn,
        queryFormResetBtn,
        queryFormSubmitWithReset,
        slots,
    } = $(props)
    const queryFormState = reactive<any>({ values: {} })
    const { resetFields, validate, ...formMethods } = Form.useForm(
        queryFormState,
        queryFormRules,
        queryUseFormOptions
    )

    const queryFormParams = reactive<{ [key: string]: any }>({
        values: {},
    })

    const onQueryFormFinish = (vals: any) => {
        queryFormParams.values = vals
    }

    const onQueryFormReset = () => {
        resetFields()
        queryFormSubmitWithReset && validate().then((vals) => onQueryFormFinish(vals))
    }

    const QueryFormInstance = {
        resetFields,
        validate,
        ...formMethods,
        onQueryFormFinish,
        onQueryFormReset,
    } as TableQueryFormInstance
    const QueryForm = () => (
        <Form model={queryFormState.values} onFinish={onQueryFormFinish} {...queryFormProps}>
            <Flex justify="space-between" {...queryFormFlexProps}>
                <Row gutter={[10, 10]} class={['flex-1']} {...queryFormRowProps}>
                    {queryFormItem?.map((item, i) => {
                        const {
                            label,
                            name,
                            rules,
                            control,
                            controlProps,
                            customControl,
                            colProps,
                            formItemProps,
                        } = item
                        return (
                            <Col
                                key={JSON.stringify(name) || i}
                                {...queryFormColProps}
                                {...colProps}
                            >
                                <Form.Item
                                    label={label}
                                    name={name}
                                    rules={rules}
                                    {...formItemProps}
                                >
                                    {isFunction(customControl) ? (
                                        customControl?.(queryFormState, name)
                                    ) : (
                                        <FormItemControl
                                            type={control}
                                            model={queryFormState.values}
                                            name={name}
                                            {...controlProps}
                                        ></FormItemControl>
                                    )}
                                </Form.Item>
                            </Col>
                        )
                    })}
                </Row>
                <Form.Item class={['ml-2']}>
                    <Space>
                        {slots?.queryFormExtraLeft?.(QueryFormInstance)}
                        {queryFormSubmitBtn ? (
                            isFunction(queryFormSubmitBtn) ? (
                                queryFormSubmitBtn?.(QueryFormInstance)
                            ) : (
                                <Button type="primary" htmlType="submit">
                                    查询
                                </Button>
                            )
                        ) : null}
                        {slots?.queryFormExtraCenter?.(QueryFormInstance)}

                        {queryFormResetBtn ? (
                            isFunction(queryFormResetBtn) ? (
                                queryFormResetBtn?.(QueryFormInstance)
                            ) : (
                                <Button onClick={onQueryFormReset}>重置</Button>
                            )
                        ) : null}

                        {slots?.queryFormExtraRight?.(QueryFormInstance)}
                    </Space>
                </Form.Item>
            </Flex>
        </Form>
    )
    return {
        QueryForm,
        QueryFormInstance,
        queryFormParams,
    }
}
