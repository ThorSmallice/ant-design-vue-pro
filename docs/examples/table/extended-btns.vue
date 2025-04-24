<template>
    <Table :index-column-width="80" :control-column-width="400" columns-align="center" :columns="columns"
        :query-form-items="queryFormItems" template-file-name="用户列表模板.xlsx" export-file-name="用户列表数据.xlsx" :apis="apis"
        :scroll="{
            x: 'auto',
            y: 'auto'
        }">
        <!-- 查询表单按钮 -->
        <template #customQueryFormBtns="{ SubmitBtn, ResetBtn, QueryFormInstance }">
            <Space>
                <Button @click="() => hellow(QueryFormInstance)">Hellow</Button>
                <component :is="SubmitBtn" :style="{
                    background: 'green'
                }" />
                <component type="primary" :is="ResetBtn" danger />
            </Space>
        </template>

        <!-- cies区域  -->
        <template
            #customCiesBtns="{ CreateBtn, ImportBtn, ExportAllBtn, ExportCurrentPageBtn, ExportDropDown, DownloadTemplateBtn, ColumnSettingBtn }">
            <Space>
                <component :is="CreateBtn" type="primary" :style="{
                    background: '#ff7875'
                }" />
                <component :is="ImportBtn" type="primary" :style="{
                    background: '#ff9c6e'
                }" />
                <component :is="ExportAllBtn" type="primary" :style="{
                    background: '#ffc069'
                }" />
                <component :is="ExportCurrentPageBtn" type="primary" :style="{
                    background: '#d4b106'
                }" />
                <component :is="ExportDropDown" :buttonProps="{
                    type: 'primary',
                    style: {
                        background: '#36cfc9'
                    }
                }" placement="topLeft" :trigger="['click']" />
                <component :is="DownloadTemplateBtn" type="primary" :style="{
                    background: '#4096ff'
                }" />
                <component :is="ColumnSettingBtn" :buttonProps="{
                    type: 'primary',
                    style: {
                        background: '#9254de'
                    }
                }" :trigger="['click']" placement="rightTop" />
                <Button type="primary">自定义1</Button>
            </Space>

        </template>

        <!-- 操作列 -->
        <template
            #customControlColumnBtns="{ DetailBtn, EditBtn, DeleteBtn, openRowDetails, editRow, deleteRow, rowInfo }">
            <Button type="link" @click="() => openRowDetails(rowInfo?.record)" size="small">详情</Button>
            <Button type="link" @click="() => editRow(rowInfo?.record)" size="small">编辑</Button>
            <Button type="link" @click="() => deleteRow(rowInfo?.record)" size="small" danger>删除</Button>
            <component :is="DetailBtn" type="primary" size="small" />
            <component :is="EditBtn" type="primary" size="small" />
            <component :is="DeleteBtn" type="primary" size="small" />
        </template>
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
import { TableQueryFormInstance } from '@src/components/table/useQueryForm'
import { Button, message, Space } from 'ant-design-vue'
import { ControlMapType, Table, TableProps } from 'antd-vue-dbthor'
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
            width: 300,
        },

        {
            title: '昵称',
            width: 300,

            dataIndex: 'nickname',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            type: 'number',
            formItemProps: {
                control: ControlMapType.InputNumber,
            },
            width: 300,
        },
        {
            title: '性别',
            dataIndex: 'sex',
            formItemProps: {
                control: ControlMapType.Select,
                controlProps: {
                    options: sexOptions,
                },
            },
            width: 300,

            customRender: ({ text }) => sexOptions?.find?.(({ value }) => value === text)?.label,
        },
        {
            title: '职业',
            dataIndex: 'occupation',
            width: 300,
        },
        {
            title: "创建时间",
            dataIndex: 'createTime',
            type: 'date',
            width: 300,
            formItemProps: {
                hidden: true
            }
        },
        {
            title: "更新时间",
            dataIndex: 'updateTime',
            type: 'date',
            width: 300,
            formItemProps: {
                hidden: true
            }

        }
    ]
})

const queryFormItems = computed((): TableProps['queryFormItems'] => [
    {
        label: '用户名',
        name: 'username',
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

const hellow = (QueryFormInstance: TableQueryFormInstance) => {
    message.info(`hellow username is ${QueryFormInstance.getFieldsValue([['username']])?.username}`)
}
</script>

<style scoped></style>
