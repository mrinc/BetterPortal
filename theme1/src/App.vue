<template>
  <div>
    <RouterView />
    <theme></theme>
  </div>
</template>

<script setup lang="ts">
//import { BetterPortal } from '@bettercorp/betterportal-sdk/src';
import { defineComponent, onMounted } from 'vue';
import { RouterView } from 'vue-router';
//import { defaultAppFeatures, type AppFeatures, type BPv2WhoAmIDefinition } from './components/appConfig';
//import { useColors } from 'vuestic-ui';

//const { applyPreset } = useColors();
import theme from './components/theme.vue';
defineComponent(theme as any);

(window as any).onPageChange = () => {
  for (let elem of document.getElementsByClassName(
    "page_url"
  ) as any as Array<HTMLElement>) {
    elem.setAttribute('content', window.location.href);
  }
};


//const hardcodedHost = `${ import.meta.env.VITE_HARDCODED_HOST || "" }`;

/*const betterportal = new BetterPortal<AppFeatures, BPv2WhoAmIDefinition>(
  hardcodedHost
);*/
onMounted(() => {
  /*betterportal.whoami.getApp(defaultAppFeatures).then(config => {
    const theme = (localStorage.getItem("ui-theme") || "light").toLowerCase();
    applyPreset(theme);
  });*/
  (window as any).onPageChange();
  //window.document.getElementById('page_loader')!.style.display = 'none';
  //window.document.getElementById('app')!.style.display = '';
});

</script>