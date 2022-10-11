import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "vuestic-ui/styles/reset.css";
import "vuestic-ui/css";
import "./assets/main.css";
import { createVuesticEssential, VaButton } from "vuestic-ui";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(createVuesticEssential({ components: { VaButton } }));
app.mount("#app");
