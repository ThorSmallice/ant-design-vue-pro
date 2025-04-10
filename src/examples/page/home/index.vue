<template>
    <silder-layout></silder-layout>
</template>

<script setup lang="ts">
import SilderLayout from '@comps/layout/silder-layout'
import axios from '@docs/apis/request'
axios('/user')
</script>

<style scoped></style>
