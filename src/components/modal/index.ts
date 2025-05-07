import { App } from 'vue'
import Modal from './modal.vue'
export * from './index.d'
Modal.install = (app: App) => {
    app?.component?.(Modal?.name!, Modal)
    return app
}
export default Modal
