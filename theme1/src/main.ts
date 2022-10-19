import { createApp } from "vue";
import { createPinia } from "pinia";
import { BetterPortal } from '@bettercorp/betterportal/src';

import App from "./App.vue";
import router from "./router";

import "vuestic-ui/styles/reset.css";
import "vuestic-ui/css";
import "./assets/main.scss";
import { createVuesticEssential, VaButton } from "vuestic-ui";

const betterportal = new BetterPortal();
betterportal.window();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(createVuesticEssential({ components: { VaButton } }));
app.mount("#app");