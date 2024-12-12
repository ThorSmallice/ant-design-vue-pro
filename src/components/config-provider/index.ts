import { App } from 'vue'
import ConfigProvider from './config-provider.vue'

ConfigProvider.install = (app: App) => {
    app?.component?.(ConfigProvider?.name!, ConfigProvider)
    return app
}
export default ConfigProvider
