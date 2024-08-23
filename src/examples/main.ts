import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import AntdPro from '@src/main'
const app = createApp(App).use(router).use(AntdPro)
app.mount('#app')
