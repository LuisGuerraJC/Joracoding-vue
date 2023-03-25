import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";

const app = createApp(App)
const pinia = createPinia()

app.use(VueQueryPlugin);
app.use(pinia);
app.use(router);
app.mount("#app");
