<template>

    <Button @click="open = true">open</Button>
    <Modal draggable :open="open" @cancel="open = false" title="可拖拽">
    </Modal>

</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { ref } from 'vue';
import { Modal } from 'antd-vue-dbthor'

const open = ref(false)

</script>

<style scoped></style>