<template>
  <div v-if="!appConfig.isReady || appConfig.state.value === undefined">
  </div>
  <div v-else>
    <div :class="'side-menu side-menu-' + (menuConfig.name)" :visible="navVisible"
      :style="/*(menuConfig.posTop? `top: ${menuConfig.menuHeight}px;`:`bottom: ${menuConfig.menuHeight}px; `)*/''">
      <va-sidebar minimizedWidth="64px" :minimized="false" position="left" :gradient="false">
        <div style="padding: 10px; text-align: center;">
          <img :src="appConfig.state.value.features.logo" alt="Logo"
            style="max-width: calc(100% - 20px); max-height: 195px;" />
        </div>
        <template v-for="item in items" :key="item.title">
        </template>
        <template v-for="item in items" :key="item.title">
          <va-sidebar-item :active="item.active" :to="item.to" :exact="item.exact" style="cursor: pointer;">
            <!-- <va-sidebar-item-content>
              <va-button>
                <va-icon :name="item.icon" />
                <va-sidebar-item-title>
                  {{ item.title }}
                </va-sidebar-item-title>
              </va-button>
            </va-sidebar-item-content> -->
            <va-sidebar-item-content>
              <va-icon :name="item.icon" />
              <va-sidebar-item-title>
                {{ item.title }}
              </va-sidebar-item-title>
            </va-sidebar-item-content>
          </va-sidebar-item>
        </template>
      </va-sidebar>
    </div>

    <div :visible="navVisible" @click="navVisible = false" class="side-menu-background">

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import * as BetterPortal from "@bettercorp/betterportal-sdk";
import type { MenuConfig } from './menuConfig';
import { useAsyncState } from '@vueuse/core';
import type { T3AppConfigAppFeatures, T3AppConfigBPv2WhoAmIDefinition } from '@bettercorp/betterportal-sdk';

const betterportal = new BetterPortal.BetterPortal<T3AppConfigAppFeatures, T3AppConfigBPv2WhoAmIDefinition>();
const appConfig = useAsyncState(betterportal.whoami.getApp(), undefined);
const navVisible = ref(false);
const items = computed<{
  title: string;
  icon: string;
  to: string;
  exact?: boolean;
  active: boolean;
}[]>(() => {
  const route = useRoute();
  return (appConfig.state.value!.features as any).menu.map(x => {
    return {
      title: x.name,
      icon: x.icon,
      to: x.to,
      active:
        x.to.split('/').length > 2 ? route.path.indexOf(x.to) === 0 : route.path === x.to,
    };
  });
});
onBeforeRouteLeave((to, from, next) => {
  navVisible.value = false;
  next(true);
});

const props = defineProps<{
  menuConfig: MenuConfig;
}>();

const menuConfig = props.menuConfig;
function toggleMenu() {
  navVisible.value = !navVisible.value;
};

defineExpose({
  toggleMenu,
});
</script>
<style scoped>
/* .va-sidebar__item {
  border-radius: 50px;
  margin: 5px;
  width: calc(100% - 10px);
} */

.side-menu-background {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 8;
  /* background-color: var(--va-background); */
  /* background-color: transparent; */
  opacity: 0.61;
  backdrop-filter: blur(0.5px);
  transition: 250ms ease-in-out;
}

.side-menu-background[visible="false"] {
  right: 100%;
  opacity: 0;
}

.side-menu {
  position: fixed;
  /* top: 0;
  bottom: 0; */
  left: 0;
  z-index: 9;
  transition: 250ms ease-in-out;
}

/* .side-menu-top {
  bottom: 0px;
}

.side-menu-bottom {
  top: 0;
} */

.side-menu[visible="false"] {
  left: -257px;
}
</style>