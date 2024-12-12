<template>
    <slot></slot>
</template>

<script setup lang="tsx">
defineOptions({
    name: 'DbConfigProvider',
})
import config from '@config/index'
import { computed, mergeProps, provide } from 'vue'
import { TableProps } from '../table'
import { TableConfig } from '@src/config'
import { ATableSlotsWhiteList, mergeConfigProps, TableSlots } from '../table/index.type'

const props = defineProps<{
    table?: TableProps
}>()

const GlobalDefaultProps = $(
    computed(() => {
        return {
            table: {
                ...config?.Table,
                ...props?.table,
            },
        }
    })
)
provide('GlobalDefaultProps', GlobalDefaultProps)
</script>

<style scoped></style>
