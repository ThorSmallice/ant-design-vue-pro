<template>
    <Table
        title="测试"
        :apis="{
            list: listApi,
            create: createApi,
            update: updateApi,
            delete: deleteApi,
            export: exportApi,
            import: importApi,
        }"
    ></Table>
</template>

<script setup lang="ts">
import { Table } from '@dbthor/ant-design-vue-pro'
import axios from 'axios'

const listApi = async (params?: any, config?: any) =>
    await axios.get('/api/hnz/base/crop/page', { params, ...config })
const createApi = async (params?: any, config?: any) => await axios.post('', { params, ...config })
const updateApi = async (params?: any, config?: any) => await axios.put('', { params, ...config })
const deleteApi = async (params?: any, config?: any) =>
    await axios.delete('', { params, ...config })
const exportApi = async (params?: any, config?: any) => await axios.get('', { params, ...config })
const importApi = async (params?: any, config?: any) => await axios.post('', { params, ...config })
</script>

<style lang="scss" scoped></style>
