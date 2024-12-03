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
import { Callbacks, RuleObject } from 'ant-design-vue/es/form/interface'
import { Component, Reactive, reactive, VNode } from 'vue'
import { ControlMapProps, FormItemControl } from './control'
import { isFunction } from 'es-toolkit'

interface DebounceSettings {
    leading?: boolean
    wait?: number
    trailing?: boolean
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
    filterFormItem?: TableQueryFormItemProps[]
    formProps?: FormProps
    rules?: RuleObject[]
    useFormOptions?: {
        immediate?: boolean
        deep?: boolean
        validateOnRuleChange?: boolean
        debounce?: DebounceSettings
        onValidate?: Callbacks['onValidate']
    }
    queryFormRowProps?: RowProps
    queryFormColProps?: ColProps
    queryFormFlexProps?: FlexProps
}

export default ({
    filterFormItem,
    formProps,
    rules,
    useFormOptions,
    queryFormRowProps,
    queryFormColProps,
    queryFormFlexProps,
}: TableQueryFormProps) => {
    const queryFormState = reactive<any>({})
    const QueryFormInstance = Form.useForm(queryFormState, rules, useFormOptions)
    const queryFormParams = reactive<{ [key: string]: any }>({})
    const QueryForm = () => (
        <Form
            model={queryFormState}
            onFinish={(vals) => {
                Object.assign(queryFormParams, vals)
            }}
            {...formProps}
        >
            <Flex justify="space-between" {...queryFormFlexProps}>
                <Row gutter={[10, 10]} {...queryFormRowProps}>
                    {filterFormItem?.map((item, i) => {
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
                                            model={queryFormState}
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
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                        <Button htmlType="reset">重置</Button>
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
