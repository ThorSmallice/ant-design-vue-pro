import {
    Checkbox,
    CheckboxGroup,
    CheckboxGroupProps,
    CheckboxProps,
    DatePicker,
    DatePickerProps,
    Input,
    InputNumber,
    InputNumberProps,
    InputProps,
    Radio,
    RadioGroup,
    RadioGroupProps,
    RadioProps,
    RangePicker,
    Select,
    SelectProps,
    TextAreaProps,
} from 'ant-design-vue'
import { RangePickerProps } from 'ant-design-vue/es/date-picker'
import { TableColumnProps, TableUseColumnsProps } from './useColumns'
import { flatten, isNumber, join } from 'es-toolkit/compat'
import { Reactive } from 'vue'
import { isString } from 'es-toolkit'
import { i } from 'vite/dist/node/types.d-aGj9QkWt'
import { DefaultOptionType } from 'ant-design-vue/es/select'
const { TextArea } = Input
const ControlMap = {
    Input,
    InputNumber,
    TextArea,
    Select,
    DatePicker,
    RangePicker,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
}
export enum ControlMapType {
    Input = 'Input',
    InputNumber = 'InputNumber',
    Select = 'Select',
    DatePicker = 'DatePicker',
    RangePicker = 'RangePicker',
    Checkbox = 'Checkbox',
    CheckboxGroup = 'CheckboxGroup',
    Radio = 'Radio',
    RadioGroup = 'RadioGroup',
    TextArea = 'TextArea',
}

export interface ControlMapProps {
    Input: InputProps
    InputNumber: InputNumberProps
    Select: SelectProps
    DatePicker: DatePickerProps
    RangePicker: RangePickerProps
    Checkbox: CheckboxProps
    CheckboxGroup: CheckboxGroupProps
    Radio: RadioProps
    RadioGroup: RadioGroupProps
    TextArea: TextAreaProps
}

const Control = ({ type = 'Input', ...props }: any) => {
    const Comp = ControlMap[type]

    return <Comp {...props}></Comp>
}
export default Control

export enum FormItemControlModelFields {
    Input = 'value',
    InputNumber = 'value',
    Select = 'value',
    Checkbox = 'checked',
    CheckboxGroup = 'value',
    Radio = 'checked',
    RadioGroup = 'value',
    RangePicker = 'value',
    DatePicker = 'value',
    TextArea = 'value',
}

const enum ControlModelFields {
    Value = 'value',
    Checked = 'checked',
}

const ControlPlaceholder = {
    Input: '请输入',
    InputNumber: '请输入',
    Select: '请选择',
    Checkbox: '',
    CheckboxGroup: '',
    Radio: '',
    RadioGroup: '',
    RangePicker: ['开始时间', '结束时间'],
    DatePicker: '请选择',
    TextArea: '请输入',
}

export const FormItemControl = ({ type = 'Input', model, name, customControl, ...props }: any) => {
    const Comp = ControlMap[type]

    const placeholder = ControlPlaceholder[type]

    switch (FormItemControlModelFields[type]) {
        case ControlModelFields.Checked:
            return <Comp v-model:checked={model[name]} placeholder={placeholder} {...props}></Comp>

        default:
            if (type === ControlMapType.Select) {
                const { fieldNames } = props || {}
                const filterOption = (inputValue: string, options: DefaultOptionType) => {
                    return (
                        options[fieldNames?.label || 'label']
                            .toLowerCase()
                            .indexOf(inputValue.toLowerCase()) >= 0
                    )
                }

                return (
                    <Comp
                        allowClear
                        v-model:value={model[name]}
                        class={['w-full']}
                        placeholder={placeholder}
                        showSearch
                        filterOption={filterOption}
                        {...props}
                    ></Comp>
                )
            }
            return (
                <Comp
                    allowClear
                    v-model:value={model[name]}
                    class={['w-full']}
                    placeholder={placeholder}
                    {...props}
                ></Comp>
            )
    }
}

export const flattenDataIndex = (dataIndex: TableColumnProps['dataIndex']): string => {
    return join([...flatten([dataIndex], 2)], '.')
}

export const hasDataIndex = (
    obj: Reactive<Record<string, any>>,
    dataIndex: TableColumnProps['dataIndex']
): boolean => {
    const key = flattenDataIndex(dataIndex)
    return obj?.hasOwnProperty ? obj?.hasOwnProperty?.(key) : Object.hasOwn(obj, key)
}

export const setValueByDataIndex = (
    obj: Reactive<Record<string, any>>,
    path: string,
    value: any
) => {
    const keys = path.split('.')

    // 遍历路径并设置对应的值
    keys.reduce((obj, key, index) => {
        if (index === keys.length - 1) {
            obj[key] = value
        } else {
            if (!obj[key]) obj[key] = {} // 如果中间路径的对象不存在，创建空对象
        }
        return obj[key]
    }, obj)
}

export const transformObject = (obj: unknown) => {
    const result = {}

    for (const [key, value] of Object.entries(obj)) {
        const keys = key.split('.')
        let current = result

        keys.forEach((k, index) => {
            if (index === keys.length - 1) {
                current[k] = value // 最后一级，赋值
            } else {
                current[k] = current[k] || {} // 初始化嵌套对象
                current = current[k]
            }
        })
    }

    return result
}
