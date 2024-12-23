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
    Space,
} from 'ant-design-vue'
import { FieldNamesType } from 'ant-design-vue/es/cascader'
import { Callbacks, RuleError, RuleObject } from 'ant-design-vue/es/form/interface'
import { Props, ValidateInfo, validateInfos, validateOptions } from 'ant-design-vue/es/form/useForm'
import { isFunction, omit } from 'es-toolkit'
import { computed, h, Reactive, reactive, ref, Ref, useSlots, VNode } from 'vue'
import { ControlMapProps, FormItemControl } from './control'
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
    onQueryFormFinish: (vals: any) => void
    onQueryFormReset: () => void
}
export interface TableQueryFormItemProps<T extends keyof ControlMapProps = keyof ControlMapProps>
    extends FormItemProps {
    control?: T
    controlProps?: ControlMapProps[T] & { [key: string]: any }
    customControl?: (model: Reactive<any>, name: FormItemProps['name']) => VNode
    colProps?: ColProps
    formItemProps?: FormItemProps
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
    queryFormSubmitBtn?: boolean | ((form: TableQueryFormInstance) => VNode)
    queryFormSubmitBtnProps?: OwnBtnProps
    queryFormResetBtn?: boolean | ((form: TableQueryFormInstance) => VNode)
    queryFormResetBtnProps?: OwnBtnProps
    queryFormSubmitWithReset?: boolean
    ciesBtnsInQueryForm?: boolean
    ciesBtnsVNode?: ciesBtnsVNode
    CreateBtn?: Ref<TableUseCUReturnOptions['CreateBtn']>
    ImportBtn?: TableUseCUReturnOptions
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
        ciesBtnsInQueryForm,
        ciesBtnsVNode,
    } = $(props)

    const queryFormState = reactive<any>({ values: {} })
    const formRef = ref<FormInstance>()

    const { customQueryFormBtns, customCiesBtns } = $(useSlots())

    const queryFormParams = reactive<{ values: any }>({
        values: {},
    })

    const onQueryFormFinish = (vals: any) => {
        queryFormParams.values = vals
    }

    const onQueryFormReset = () => {
        queryFormSubmitWithReset && onQueryFormFinish(null)
        formRef?.value?.resetFields()
    }

    const QueryFormInstance = $(
        computed(
            () =>
                ({
                    ...(formRef.value || {}),
                    onQueryFormFinish,
                    onQueryFormReset,
                } as TableQueryFormInstance)
        )
    )
    const SubmitBtn = queryFormSubmitBtn ? (
        isFunction(queryFormSubmitBtn) ? (
            queryFormSubmitBtn?.(QueryFormInstance)
        ) : (
            <Button
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
            <Button onClick={onQueryFormReset} {...omit(queryFormResetBtnProps, ['children'])}>
                {queryFormResetBtnProps?.children}
            </Button>
        )
    ) : null

    const CreateBtn = $(computed(() => h(ciesBtnsVNode?.CreateBtn)))
    const ImportBtn = $(computed(() => h(ciesBtnsVNode?.ImportBtn)))
    const ExportBtn = $(computed(() => h(ciesBtnsVNode?.ExportBtn)))

    const QueryForm = () => (
        <Form
            ref={formRef}
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
                        {customQueryFormBtns && isFunction(customQueryFormBtns) ? (
                            customQueryFormBtns?.({ SubmitBtn, ResetBtn, QueryFormInstance })
                        ) : (
                            <>
                                {SubmitBtn}
                                {ResetBtn}
                                {ciesBtnsInQueryForm ? (
                                    customCiesBtns && isFunction(customCiesBtns) ? (
                                        customCiesBtns?.({
                                            CreateBtn,
                                            ImportBtn,
                                            ExportBtn,
                                        })
                                    ) : (
                                        <>
                                            {CreateBtn}
                                            {ImportBtn}
                                            {ExportBtn}
                                        </>
                                    )
                                ) : null}
                            </>
                        )}
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

export default useQueryForm
