<template>
  <div>
    <div
      :style="(menuConfig.posTop ? `top: ${ menuConfig.menuHeight }px; bottom: 0px; ` : `top: 0; bottom: ${ menuConfig.menuHeight }px; `) + '; ' + (useRoute().meta.lockedScroll === true ? 'overflow-y:hidden;' : '')"
      class="app_content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BetterPortal } from '@bettercorp/betterportal-sdk/src';
import { useAsyncState } from '@vueuse/core';
import type { AppFeatures, BPv2WhoAmIDefinition } from '../appConfig';
import { useRoute } from 'vue-router';

const betterportal = new BetterPortal<AppFeatures, BPv2WhoAmIDefinition>();
const appConfig = useAsyncState(betterportal.whoami.getApp(), undefined);

const props = defineProps({
  menuConfig: Object
});

const menuConfig = props.menuConfig!;
</script>

<style>
.app_content {
  position: fixed;
  left: 0px;
  right: 0;
  overflow: hidden;
  overflow-y: auto;
  padding: 15px;
  background: var(--va-background);
}
</style>