import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import AntdPro from '@src/main'
import './styles/main.pcss'
const app = createApp(App).use(router).use(AntdPro)
app.mount('#app')
