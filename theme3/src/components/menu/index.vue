<template>
  <div>
    <div
      :style="/*(menuConfig.posTop ? `top: ${ menuConfig.menuHeight }px; bottom: 0px; ` : `top: 0; bottom: ${ menuConfig.menuHeight }px; `) + '; ' + (useRoute().meta.lockedScroll === true ? 'overflow-y:hidden;' : '')*/''"
      :class="`app_content menu-${menuConfig.name} ${(useRoute().meta.lockedScroll === true ? 'content-no-scroll' : '')}`">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as BetterPortal from '@bettercorp/betterportal-sdk';
import { useAsyncState } from '@vueuse/core';
import type { T3AppConfigAppFeatures, T3AppConfigBPv2WhoAmIDefinition } from '@bettercorp/betterportal-sdk';
import { useRoute } from 'vue-router';
import type { MenuConfig } from './menuConfig';

const betterportal = new BetterPortal.BetterPortal<T3AppConfigAppFeatures, T3AppConfigBPv2WhoAmIDefinition>();
const appConfig = useAsyncState(betterportal.whoami.getApp(), undefined);

const props = defineProps<{
  menuConfig: MenuConfig;
}>();

const menuConfig = props.menuConfig!;
</script>

<style>
.app_content {
  position: fixed;
  left: 0px;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  overflow-y: auto;
  padding: 15px;
  background: var(--va-background);
}
</style>