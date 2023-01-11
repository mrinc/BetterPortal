<template>
  <div xstyle="position: fixed; z-index: 999; top: 50px; left: 50px;">
    <!-- <p class="d-flex align--center">
      Background colors:
      <va-button-toggle v-model="theme" :options="themeOptions" class="ml-2" />
    </p> -->

    <!-- <p class="d-flex align--center">
      Primary color:
      <va-color-palette class="ml-2" v-model="primaryColor" :palette="primaryColorVariants" />
    </p> -->
  </div>
</template>

<script lang="ts" setup>
//import { ref, watchEffect, toRef } from 'vue';
import type { VuesticConfig } from '@/vuesticConfig';
import { BetterPortal } from '@bettercorp/betterportal-sdk/src';
import { onMounted } from 'vue';
import { useColors, useGlobalConfig } from 'vuestic-ui';
import { defaultAppFeatures, type AppFeatures, type BPv2WhoAmIDefinition } from './appConfig';

const { applyPreset } = useColors() as any;
const { mergeGlobalConfig } = useGlobalConfig();
//const { presets, applyPreset, colors } = useColors() as any;

//const theme = ref(localStorage.getItem('vuestic-docs-theme')?.toLowerCase() || 'light');

// watchEffect(() => {
//   applyPreset(theme.value);
//   localStorage.setItem('vuestic-docs-theme', theme.value);
// });
// applyPreset(theme.value);

// #19b5fe
//const primaryColorVariants = ['#2c82e0', '#ef476f', '#ffd166', '#06d6a0', '#8338ec'];

//const primaryColor = toRef(colors, 'primary');
//primaryColor.value = '#19b5fe';

/*const themeOptions = Object.keys(presets.value).map((themeName) => ({
  value: themeName,
  label: themeName,
}));*/
if (localStorage.getItem('app-theme') !== null) {
  applyPreset(localStorage.getItem('app-theme'));
} else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    applyPreset('dark');
    localStorage.setItem('app-theme', 'dark');
  } else {
    applyPreset('light');
    localStorage.setItem('app-theme', 'light');
  }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  applyPreset(event.matches ? "dark" : "light");
  localStorage.setItem('app-theme', event.matches ? "dark" : "light");
});
const hardcodedHost = `${ import.meta.env.VITE_HARDCODED_HOST || "" }`;

const betterportal = new BetterPortal<AppFeatures, BPv2WhoAmIDefinition>(
  hardcodedHost
);
onMounted(() => {
  betterportal.whoami.getApp(defaultAppFeatures).then(appConfig => {
    /*let vuesticConfig: VuesticConfig = {
      config: appConfig.features.theme1 || {},
    };*/
    if (appConfig.features.theme1 === undefined) return;
    mergeGlobalConfig(appConfig.features.theme1);
  });
});
</script>
