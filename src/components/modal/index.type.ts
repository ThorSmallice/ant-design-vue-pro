import { ModalProps as AModalProps } from 'ant-design-vue'
export interface ModalProps extends AModalProps {
    draggable?: boolean
    showFullScreen?: boolean
    full?: boolean
    top?: number
}
