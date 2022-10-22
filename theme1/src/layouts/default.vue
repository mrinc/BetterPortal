<script async setup lang="ts">
import { defineComponent, onMounted, ref, shallowRef } from 'vue';
import { useAsyncState } from '@vueuse/core';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import MenuContainer from '../components/menu/index.vue';
import Menu from '../components/menu/main.vue';
import Sidebar from '../components/menu/side.vue';
import type { MenuConfig } from '../components/menu/menuConfig';
import { getMenuConfig } from '../components/menu/menuConfig';
import { BetterPortal } from '@bettercorp/betterportal/src';
import type { BPv2WhoAmIDefinition } from '@/components/appConfig';
import {
  useColors,
  VaCard,
  VaCardContent,
  VaInnerLoading
} from 'vuestic-ui';

const colours = useColors();
const router = useRouter();
const betterportal = new BetterPortal<BPv2WhoAmIDefinition>();
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
      betterportal.ws.ping();
    });
    return;
  }
  renderedComponent.value = navContent;
  betterportal.ws.ping();
};

function toggleMenu() {
  refMenuChild.value.toggleMenu();
}

//const appConfig = useAsyncState(betterportal.whoami.getApp<BPv2WhoAmIDefinition>(defaultAppFeatures, import.meta.env.VITE_WHOAMIHOST), undefined);
const menuConfig = ref<MenuConfig | null>(null);
async function setMenuConfig(to: any) {
  let appConfig = await betterportal.whoami.getApp();
  if (appConfig !== undefined && appConfig.features.colours !== undefined)
    colours.setColors(appConfig.features.colours);
  //return {} as any;
  let newConfig = getMenuConfig(appConfig);
  if (typeof newConfig === 'string') {
    router.replace(newConfig);
    return menuConfig.value = {} as any;
  }
  navChange(to);
  menuConfig.value = newConfig;
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

onMounted(() => {
  betterportal.ws.ping();
  setMenuConfig(useRoute());
});

defineComponent({
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
  <div v-if="menuConfig === null" class="row align--center justify--center align-self--center">
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
    <MenuContainer :menuConfig="menuConfig">
      <div v-if="renderedComponent === null">Loading</div>
      <component v-else :is="renderedComponent" name="content" />
    </MenuContainer>
    <Menu @toggleMenu="toggleMenu" :menuConfig="menuConfig" />
    <Sidebar ref="refMenuChild" :menuConfig="menuConfig" />
  </div>
</template>
  