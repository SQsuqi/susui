import { createApp } from "vue";
import App from "./app.vue";
import susui from "@susui/components";
const app = createApp(App);
app.use(susui);
app.mount("#app");