import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import AntdPro, { GlobalComponentDefalutPropsConfig } from '@src/main'
import { TableConfig } from '@src/main'
import './styles/main.pcss'
GlobalComponentDefalutPropsConfig.Table.full = true
const app = createApp(App).use(router).use(AntdPro)
app.mount('#app')
