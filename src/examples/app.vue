<template>
    <ConfigProvider
        :table="{
            full: true,
        }"
    >
        <router-view></router-view>
    </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from '@src/components'
</script>

<style scoped></style>
