<template>
  <div>
    <div
      :style="(menuConfig.posTop? `top: ${menuConfig.menuHeight}px; bottom: 0px; `:`top: 0; bottom: ${menuConfig.menuHeight}px; `)+'background:'+(appConfig.isReady && appConfig.state.value !== undefined ? appConfig.state.value.features.contentBackground||'linear-gradient(45deg, rgb(0, 145, 234), rgb(0, 97, 157))':'')+'; '+(useRoute().meta.lockedScroll === true ? 'overflow-y:hidden;':'')"
      class="app_content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BetterPortal } from '@bettercorp/betterportal/src';
import { useAsyncState } from '@vueuse/core';
import { defaultAppFeatures, type BPv2WhoAmIDefinition } from '../appConfig';
import { useRoute } from 'vue-router';

const betterportal = new BetterPortal();
const appConfig = useAsyncState(betterportal.whoami.getApp<BPv2WhoAmIDefinition>(defaultAppFeatures), undefined);

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