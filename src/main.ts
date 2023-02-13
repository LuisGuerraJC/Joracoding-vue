import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css";
import { VueQueryPlugin } from "@tanstack/vue-query";


const app = createApp(App)

app.use(VueQueryPlugin)
app.use(router)
app.mount("#app");
