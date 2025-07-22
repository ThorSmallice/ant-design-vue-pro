<template>
    <Modal
        :class="[
            draggable && $style['ant-draggable-modal'],
            $style['ant-modal'],
            (full || isFullScreen) && $style['ant-full-modal'],
        ]"
        :style="draggable && style"
        :open="open"
        :centered="draggable ? false : draggable"
        :mask="mask"
        :closable="closable"
        :get-container="getContainer"
        v-bind="others"
    >
        <template #title>
            <div
                @dblclick="showFullScreen && toggleFullScreen"
                ref="dragHandleRef"
                :class="$style['ant-draggable-modal-handle']"
                v-if="draggable"
            ></div>
            <Button
                @click="toggleFullScreen"
                :title="isFullScreen ? '退出全屏' : '全屏'"
                size="small"
                type="text"
                v-if="showFullScreen"
                :class="$style['ant-modal-full-screen-btn']"
            >
                <template #icon>
                    <FullscreenOutlined v-if="!isFullScreen" />
                    <FullscreenExitOutlined v-else />
                </template>
            </Button>
            <template v-if="slot?.title">
                <slot name="title"></slot>
            </template>
            <template v-else>
                {{ title }}
            </template>
        </template>

        <template v-for="slot in slots" :key="slot" v-slot:[slot]="temp">
            <slot :name="slot" v-bind="temp || {}"></slot>
        </template>
        <slot name="default"></slot>
    </Modal>
</template>

<script setup lang="tsx">
import { useDraggable } from '@vueuse/core'
import { Button, Modal } from 'ant-design-vue'
import {
    computed,
    nextTick,
    onMounted,
    onUnmounted,
    reactive,
    ref,
    useCssModule,
    useSlots,
    useTemplateRef,
    VNodeRef,
    watch,
} from 'vue'
import { ModalProps } from './index.type'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons-vue'
const {
    title,
    open,
    mask = true,
    top = 100,
    full,
    draggable,
    centered,
    closable = true,
    showFullScreen,
    getContainer = () => document?.body,
    visible,
    ...others
} = defineProps<ModalProps>()
const rawSlots = defineSlots()
const slotBlackList = ['default', 'title']
const slot = useSlots()
const slots = computed(() => {
    return Object?.keys?.(rawSlots)?.filter?.((key: string) => !slotBlackList?.includes(key))
})

const $style = useCssModule()

const isFullScreen = ref(false)

const dragHandleRef = ref<HTMLElement>()

const modalRef = computed<any>(() => {
    const modalEl = dragHandleRef.value?.closest?.(
        `.${$style['ant-draggable-modal']}`
    ) as HTMLElement

    return modalEl
})

// 动态计算包裹层类名
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const initialPosition = reactive({
    x: 0,
    y: top,
})

const { style } = useDraggable(modalRef, {
    handle: dragHandleRef,
    initialValue: initialPosition,
})

watch(
    () => [open, centered, modalRef.value],
    async () => {
        await nextTick()
        initialPosition.x = (windowWidth - modalRef.value?.offsetWidth) / 2
        initialPosition.y = centered
            ? (windowHeight - modalRef.value?.offsetHeight) / 2
            : full
            ? 0
            : top
    }
)

const toggleFullScreen = () => {
    if (!document?.fullscreenElement) {
        modalRef.value?.requestFullscreen?.()
    } else {
        document?.exitFullscreen?.()
    }
}
const onFullscreenchange = () => {
    isFullScreen.value = document?.fullscreenElement ? true : false
}
watch(
    () => modalRef.value,
    () => {
        modalRef.value?.addEventListener('fullscreenchange', onFullscreenchange)
    }
)
watch(
    () => open,
    () => {
        if (!open && document?.fullscreenElement) {
            document?.exitFullscreen?.()
        }
    }
)

onUnmounted(() => {
    modalRef.value?.removeEventListener('fullscreenchange', onFullscreenchange)
})
</script>

<style lang="scss" module>
:global(.ant-modal-root .ant-modal-wrap) {
    overflow: hidden;
}

.ant-draggable-modal {
    margin: 0 !important;
    padding-bottom: 0 !important;

    & .ant-draggable-modal-handle {
        display: block;
        background: transparent;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 20px;
        cursor: move;
        pointer-events: auto;
        z-index: 1;
    }
}

.ant-modal {
    max-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    & > div:first-child {
        max-height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    :global(.ant-modal-content) {
        display: flex;
        flex-direction: column;
        max-height: 100%;
        overflow: hidden;

        :global(.ant-modal-body) {
            max-height: 100%;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
}

.ant-full-modal {
    height: 100%;

    & > div:first-child {
        height: 100%;
    }

    :global(.ant-modal-content) {
        height: 100%;

        :global(.ant-modal-body) {
            height: 100%;
        }
    }
}

.ant-modal-full-screen-btn {
    position: absolute;
    top: 17px;
    font-size: 12px;
    right: 46px;
    width: 22px;
    height: 22px;
}
</style>
