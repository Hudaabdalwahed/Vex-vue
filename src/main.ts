import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/bootstrap.min.css";
import "./assets/themefisher-font/themefisher-font.min.css";
import "./assets/styles/style.scss";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
