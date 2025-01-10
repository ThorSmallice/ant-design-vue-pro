<template>
    <Table :own-pagin="true" :columns="columns"> </Table>
</template>

<script setup lang="tsx">
import {
    Button,
    DatePicker,
    Image,
    Input,
    Select,
    TableColumn,
    TableColumnGroup,
} from 'ant-design-vue'
import { ControlMapType, Table, TableConfig, TableInstance, TableProps } from 'antd-vue-dbthor'
import { computed, Ref, ref, watch } from 'vue'
import axios from '@docs/apis/request'
import dayjs from 'dayjs'

const source = ref([
    {
        id: 1,
        name: 'dsa',
    },
])

const columns = ref<TableProps['columns']>([
    {
        title: 'id',
        hidden: true,
        dataIndex: 'id',
        formItemProps: {
            hidden: true,
        },
        descItemProps: {
            hidden: true,
        },
    },
    {
        title: 'first_name',
        dataIndex: 'first_name',
        formItemProps: {
            hidden: true,
        },
    },
    {
        title: 'last_name',
        dataIndex: 'last_name',
        formItemProps: {
            hidden: true,
        },
    },
    {
        title: 'email',
        dataIndex: 'email',
        formItemProps: {
            hidden: true,
        },
    },
    {
        title: 'avatar',
        dataIndex: 'avatar',
        sorter: false,
        formItemProps: {
            hidden: true,
        },
        customRender: ({ text }) => <Image width={30} src={text}></Image>,
    },
    {
        title: 'name',
        dataIndex: 'name',
        hidden: true,
    },
    {
        title: 'job',
        dataIndex: 'job',
        hidden: true,
    },
])
</script>

<style scoped></style>
