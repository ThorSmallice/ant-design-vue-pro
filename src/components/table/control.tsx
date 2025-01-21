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
import { TableColumnProps } from './useColumns'
import { flatten, join } from 'es-toolkit/compat'
import { Reactive } from 'vue'
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
            return (
                <Comp
                    v-model:checked={model[flattenDataIndex(name)]}
                    placeholder={placeholder}
                    {...props}
                ></Comp>
            )
        default:
            return (
                <Comp
                    allowClear
                    v-model:value={model[flattenDataIndex(name)]}
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
