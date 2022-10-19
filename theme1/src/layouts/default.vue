<script async setup lang="ts">
import { defineComponent, ref, shallowRef } from 'vue';
import { useAsyncState } from '@vueuse/core';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import MenuContainer from '../components/menu/index.vue';
import Menu from '../components/menu/main.vue';
import Sidebar from '../components/menu/side.vue';
import type { MenuConfig } from '../components/menu/menuConfig';
import { getMenuConfig } from '../components/menu/menuConfig';
import { BetterPortal } from '@bettercorp/betterportal/src';
import { defaultAppFeatures, type BPv2WhoAmIDefinition } from '@/components/appConfig';
import {
  useColors,
  VaCard,
  VaCardContent,
  VaInnerLoading
} from 'vuestic-ui';

const colours = useColors();
const router = useRouter();
const betterportal = new BetterPortal();
const refMenuChild = ref();
const renderedComponent = shallowRef(null);
const navChange = (to: any) => {
  renderedComponent.value = null;
  let navContent = to.meta.content;
  if (navContent === undefined) {
    return;
  }
  if (navContent.then !== undefined) {
    navContent.then((x: any) => {
      renderedComponent.value = x.default !== undefined ? x.default : x;
    });
  }
  renderedComponent.value = navContent;
};

function toggleMenu() {
  refMenuChild.value.toggleMenu();
}

const appConfig = useAsyncState(betterportal.whoami.getApp<BPv2WhoAmIDefinition>(defaultAppFeatures, import.meta.env.VITE_WHOAMIHOST), undefined);
function menuConfig(): MenuConfig {
  if (appConfig.state.value !== undefined && appConfig.state.value.features.colours !== undefined)
    colours.setColors(appConfig.state.value.features.colours);
  let newConfig = getMenuConfig(appConfig.state.value);
  if (typeof newConfig === 'string') {
    router.replace(newConfig);
    return {} as any;
  }
  navChange(useRoute());
  return newConfig;
}

onBeforeRouteLeave((to, from, next) => {
  navChange(to);
  setTimeout(() => {
    console.log('nav change');
    console.log(betterportal.ws.connected);
    betterportal.ws.ping();
  }, 100);
  next(true);
});

defineComponent({
  mounted() {
    console.log('nav change');
    console.log(betterportal.ws.connected);
    betterportal.ws.ping();
  },
  components: {
    Menu,
    Sidebar,
    MenuContainer,
    VaCard,
    VaCardContent,
    VaInnerLoading
  }
});
</script>
  
<template>
  <div v-if="appConfig.isLoading.value === true"
    class="row align--center justify--center align-self--center">
    <div class="center-grid">
      <div class="item">
        <va-inner-loading :loading="true " :size="80">
          <va-card>
            <va-card-content>
              <div style="padding: 40px;"></div>
            </va-card-content>
          </va-card>
        </va-inner-loading>
      </div>
    </div>
  </div>
  <div v-else>
    <MenuContainer :menuConfig="menuConfig()">
      <div v-if="renderedComponent === null">Loading</div>
      <component v-else :is="renderedComponent" name="content" />
    </MenuContainer>
    <Menu @toggleMenu="toggleMenu()" :menuConfig="menuConfig()" />
    <!-- <Menu @toggleMenu="console.log($refs.Sidebar).toggleMenu()" :menuConfig="menuConfig" /> -->
    <Sidebar ref="refMenuChild" :menuConfig="menuConfig()" />
  </div>
</template>
  