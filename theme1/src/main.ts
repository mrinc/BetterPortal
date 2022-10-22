import { createApp } from "vue";
import { createPinia } from "pinia";
import { BetterPortal } from "@bettercorp/betterportal/src";

import App from "./App.vue";
import router from "./router";

import "vuestic-ui/styles/reset.css";
import "vuestic-ui/css";
import "./assets/main.scss";
import { createVuesticEssential, VaButton } from "vuestic-ui";
import {
  defaultAppFeatures,
  type AppFeatures,
  type BPv2WhoAmIDefinition,
} from "./components/appConfig";

const hardcodedHost = import.meta.env.VITE_HARDCODED_HOST;
const betterportal = new BetterPortal<AppFeatures, BPv2WhoAmIDefinition>(
  hardcodedHost || ""
);
const hardcodedAppConfig =
  import.meta.env.VITE_HARDCODED_IONIC_CONFIG !== ""
    ? JSON.parse(import.meta.env.VITE_HARDCODED_IONIC_CONFIG)
    : undefined;
betterportal
  .window(
    defaultAppFeatures,
    import.meta.env.VITE_WHOAMIHOST,
    hardcodedAppConfig
  )
  .then(() => {
    const app = createApp(App);

    app.use(createPinia());
    app.use(router);

    app.use(createVuesticEssential({ components: { VaButton } }));
    app.mount("#app");
  });
