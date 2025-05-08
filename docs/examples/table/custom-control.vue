<template>
    <Table columns-align="center" :index-column-width="60" :control-column-width="180" :columns="columns"
        :query-form-items="queryFormItems" template-file-name="用户列表模板.xlsx" export-file-name="用户列表数据.xlsx" :apis="apis"
        @before-cu-form-submit="onBeforeSubmit">
    </Table>
</template>

<script setup lang="tsx">
import {
    createUserApi,
    deleteUserApi,
    downloadUserTemplateByBlobApi,
    exportUsersByBufferApi,
    getUserDetailsApi,
    getUsersPageApi,
    importUserApi,
    updateUserApi,
} from '@docs/apis/user'
import { Button, Divider, Flex, Form } from 'ant-design-vue'
import { ControlMapType, Table, TableProps } from 'antd-vue-dbthor'
import dayjs from 'dayjs'
import { computed, ref } from 'vue'

const apis = ref<TableProps['apis']>({
    list: getUsersPageApi,
    details: getUserDetailsApi,
    create: createUserApi,
    update: updateUserApi,
    delete: deleteUserApi,
    template: downloadUserTemplateByBlobApi,
    export: exportUsersByBufferApi,
    import: importUserApi

})

 
const sexOptions = [
    {
        label: '男',
        value: 1,
    },
    {
        label: '女',
        value: 0,
    },
]

const columns = computed((): TableProps['columns'] => {
    return [
        {
            title: 'id',
            dataIndex: 'id',
            hidden: true,
            formItemProps: {
                hidden: true,
            },
            descItemProps: {
                hidden: true,
            },
        },

        {
            title: '用户名',
            dataIndex: 'username',
            width: 100,
            formItemProps: {
                // 新增/编辑表单中自定义控件                                                              // [!code highlight]
                customControl: ({ dataIndex }, model) => {                                              // [!code highlight]
                    return <CustomControl v-model={model.values[`${dataIndex}`]}></CustomControl>       // [!code highlight]
                },                                                                                      // [!code highlight]
            }

        },
        {
            title: '昵称',
            width: 100,
            dataIndex: 'nickname',
            formItemProps: {
                hidden: true
            }
        },
        {
            title: '年龄',
            dataIndex: 'age',
            type: 'number',
            formItemProps: {
                hidden: true
            },
            width: 100,

        },
        {
            title: '性别',
            dataIndex: 'sex',
            formItemProps: {
                hidden: true
            },
            width: 100,
            customRender: ({ text }) => sexOptions?.find?.(({ value }) => value === text)?.label,
        },
        {
            title: '职业',
            dataIndex: 'occupation',
            width: 100,
            formItemProps: {
                hidden: true,

            },
        },
        {
            title: '这是一个不显示的表头',
            hidden: true,
            formItemProps: {
                name: 'userList', 
                // 当自定义控件不足需求时，还可以自定义整个单元格内的内容，比如将其他字段全部隐藏   
                colProps: {
                    span: 24, // 调整该占满整行                                         
                },
                customRender: (model, form) => { 
                    const add = () => {
                        const initValue = {
                            id: dayjs().valueOf(),
                            username: void 0,
                                nickname: void 0,
                                age: void 0,
                                sex: void 0,
                                occupation: void 0
                        }
                        if (Array.isArray(model.values['userList'])) {
                            model.values['userList'].push(initValue)
                        } else {
                            model.values['userList'] = [initValue]
                        }

                    }

                    const removeRow = ({id}) => {
                        const index = model.values.userList?.findIndex((item) => item.id === id )

                        model.values.userList.splice(index,1)
                         
                    }

                    return <Flex vertical>
                        <Divider  >请填写用户列表</Divider>
                        <Form.Item name="userList">
                            <Table size="small" tableLayout='auto' scroll={{
                                y: undefined
                            }} columns={[
                                {
                                    title: '用户名',
                                    dataIndex: 'username',
                                    width: 100,
                                    editable: true
                                },
                                {
                                    title: '昵称',
                                    width: 100,
                                    dataIndex: 'nickname',
                                    editable: true
                                },
                                {
                                    title: '年龄',
                                    dataIndex: 'age',
                                    type: 'number',
                                    width: 100,
                                    editable: true,
                                    editControl: ControlMapType.InputNumber
                                },
                                {
                                    title: '性别',
                                    dataIndex: 'sex',
                                    width: 100,
                                    editable: true,
                                    editControl: ControlMapType.Select,
                                    editControlProps: {
                                        options: sexOptions
                                    },
                                    customRender: ({ text }) => sexOptions?.find?.(({ value }) => value === text)?.label || '-',
                                },
                                {
                                    title: '职业',
                                    dataIndex: 'occupation',
                                    width: 100,
                                    editable: true,
                                },
                                {
                                    title:'操作',
                                    type:'control',
                                    width: 100,
                                    customRender: ({record}:any) => {
                                        return <Button size="small" danger onClick={() =>removeRow(record) }>删除</Button>
                                    }
                                }
                            ]} ownPagin={false} columnSettingBtn={false} indexColumn={false} controlColumn={false} queryForm={false} autoRequest={false} v-model:value={model.values['userList']} >
                            </Table>
                            <Button class="ml-2" onClick={() => add()}>新增一行</Button>

                        </Form.Item>


                    </Flex>
                },
            }

        }
    ]
})


const onBeforeSubmit = async (vals) => {
    // 处理成接口需要的格式返回
    return vals

    // return false 则不执行内置的提交处理
}

const CustomControl = (props, { emit }) => {
    const onChange = ({ target }) => {
        emit('update:modelValue', target.value)
    }
    return <input value={props.modelValue} class="border border-solid p-1 rounded border-yellow-500" onChange={onChange}></input>
}


const queryFormItems = computed((): TableProps['queryFormItems'] => [
    {
        label: '用户名',
        name: 'username',
        customControl: (model, name) => {                                               // [!code highlight]
            // 查询表单中自定义控件                                                       // [!code highlight]
            return <CustomControl v-model={model.values[`${name}`]}></CustomControl>    // [!code highlight]
        },                                                                              // [!code highlight]

    },
    {
        label: '昵称',
        name: 'nickname',
    },
    {
        label: '年龄',
        name: 'age',
    },
    {
        label: '性别',
        name: 'sex',
        control: ControlMapType.Select,
        controlProps: {
            options: sexOptions,
            style: {
                width: '120px',
            },
        },
    },

])
</script>

<style scoped></style>
