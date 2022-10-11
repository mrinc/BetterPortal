<template>
  <div v-if="!appConfig.isReady || appConfig.state.value === undefined">
  </div>
  <div v-else>
    <div :class="'side-menu side-menu-'+(menuConfig.posTop?'top':'bottom')" :visible="navVisible"
      :style="(menuConfig.posTop? `top: ${menuConfig.menuHeight}px;`:`bottom: ${menuConfig.menuHeight}px; `)">
      <va-sidebar textColor="primary" color="white" minimizedWidth="64px" :minimized="false" position="left" :gradient="false">
        <div style="padding: 5px; text-align: center;">
          <img :src="appConfig.state.value.features.logo"
            style="max-width: 245px; max-height: 195px;" />
        </div>
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
import { defineComponent, computed, ref } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { VaButton, VaSidebar, VaSidebarItem, VaSidebarItemContent, VaSidebarItemTitle, VaCheckbox, VaIcon } from 'vuestic-ui';
import { BetterPortal } from "@bettercorp/betterportal/src";
import type { MenuConfig } from './menuConfig';
import { useAsyncState } from '@vueuse/core';
import { defaultAppFeatures, type BPv2WhoAmIDefinition } from '../appConfig';

defineComponent({
  components: {
    VaButton, VaSidebar, VaSidebarItem, VaSidebarItemContent, VaSidebarItemTitle, VaCheckbox, VaIcon
  },
});

const betterportal = new BetterPortal();
const appConfig = useAsyncState(betterportal.whoami.getApp<BPv2WhoAmIDefinition>(defaultAppFeatures), undefined);
const navVisible = ref(false);
const items = computed<{
    title: string;
    icon: string;
    to: string;
    exact?: boolean;
    active: boolean;
}[]>(() => {
  const route = useRoute();
  return [
    { title: 'Home', icon: 'dashboard', to: '/', active: route.path === '/' },
    { title: 'Sidebar demo', icon: 'room', to: '/about', active: route.path === '/about' }
  ];
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
.va-sidebar__item {
  border-radius: 50px;
  margin: 5px;
  width: calc(100% - 10px);
}

.side-menu-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  background-color: var(--va-background);
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
  top: 0;
  left: 0;
  z-index: 9;
  transition: 250ms ease-in-out;
}

.side-menu-top {
  bottom: 0px;
}

.side-menu-bottom {
  top: 0;
}

.side-menu[visible="false"] {
  left: -257px;
}
</style>