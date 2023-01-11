import { createApp } from "vue";
import { createPinia } from "pinia";
import { BetterPortal, BPVue } from "@bettercorp/betterportal-sdk/src";

import App from "./App.vue";
import router from "./router";
import DefaultLayout from "./layouts/default.vue";

import "./assets/main.scss";
import { createVuestic } from "vuestic-ui";
import {
  defaultAppFeatures,
  type AppFeatures,
  type BPv2WhoAmIDefinition,
} from "./components/appConfig";
//import type { VuesticConfig } from "./vuesticConfig";

const hardcodedHost = `${import.meta.env.VITE_HARDCODED_HOST || ""}`;

const betterportal = new BetterPortal<AppFeatures, BPv2WhoAmIDefinition>(
  hardcodedHost
);

const importedHCAC = `${import.meta.env.VITE_HARDCODED_IONIC_CONFIG || ""}`;
const hardcodedAppConfig =
  importedHCAC !== "" ? JSON.parse(importedHCAC) : undefined;

betterportal
  .window(
    defaultAppFeatures,
    import.meta.env.VITE_WHOAMIHOST,
    hardcodedAppConfig
  )
  .then(async () => {
    const appConfig = await betterportal.whoami.getApp();
    for (let elem of document.getElementsByClassName(
      "page_title"
    ) as any as Array<HTMLElement>) {
      if (elem.tagName === "TITLE") {
        elem.innerText = appConfig.features.title;
      }
      if (elem.tagName === "META") {
        elem.setAttribute("content", appConfig.features.title);
      }
    }
    for (let elem of document.getElementsByClassName(
      "page_description"
    ) as any as Array<HTMLElement>) {
      elem.setAttribute("content", appConfig.features.description);
    }
    for (let elem of document.getElementsByClassName(
      "page_img"
    ) as any as Array<HTMLElement>) {
      elem.setAttribute("content", appConfig.features.logo);
    }
    const app = createApp(App);

    app.use(createPinia());
    /*new BPVue(app, {
      router,
      routes: await betterportal.plugins.getRoutes(),
      layoutComponent: DefaultLayout,
    });*/
    console.log(await betterportal.plugins.getRoutes());
    BPVue.router(router, await betterportal.plugins.getRoutes(), DefaultLayout);
    //console.log(router.getRoutes());
    app.use(router as any);

    // let vuesticConfig: VuesticConfig = {
    //   config: appConfig.features.theme1 || {},
    // };
    /*if (appConfig !== undefined && appConfig.features.colours !== undefined)
      vuesticConfig.config!.colors = appConfig.features.colours;*/

    app.use(createVuestic());
    //console.log(vuesticConfig)

    //console.log(getColors());
    //applyPreset(theme);

    app.mount("#app");
  })
  .catch((x) => {
    console.error(x);
    (window as any)._hasError = true;
    window.document.getElementById("page_loader")!.style.display = "grid";
    window.document.getElementById("page_error")!.style.display = "block";
    window.document.getElementById("ring_loader")!.style.display = "none";
  });
