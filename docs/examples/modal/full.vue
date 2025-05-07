<template>
    <Button @click="open = true">open</Button>
    <Modal show-full-screen draggable :open="open" @cancel="open = false" title="高度最大化" full>
        <div class="h-full bg-slate-500"></div>
    </Modal>

</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { ref } from 'vue';
import { Modal } from 'antd-vue-dbthor'

const open = ref(false)

</script>

<style scoped></style>