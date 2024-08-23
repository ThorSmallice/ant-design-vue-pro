import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import Antd from "ant-design-vue";
import AntdPro from "@src/main";
const app = createApp(App).use(router).use(Antd).use(AntdPro);
app.mount("#app");
