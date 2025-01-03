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
                    v-model:checked={model[`${name}`]}
                    placeholder={placeholder}
                    {...props}
                ></Comp>
            )
        default:
            return (
                <Comp
                    allowClear
                    v-model:value={model[`${name}`]}
                    class={['w-full']}
                    placeholder={placeholder}
                    {...props}
                ></Comp>
            )
    }
}
