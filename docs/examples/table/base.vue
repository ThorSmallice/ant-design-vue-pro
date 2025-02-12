<template>
    <Table
        :columns="columns"
        :apis="{
            list: getUsersPageApi,
        }"
    >
    </Table>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { TableProps, Table } from 'antd-vue-dbthor'
import { getUsersPageApi } from '@docs/apis/user'
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
