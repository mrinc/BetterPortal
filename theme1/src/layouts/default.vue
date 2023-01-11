<script async setup lang="ts">
import { defineComponent, onMounted, ref, shallowRef } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import MenuContainer from '../components/menu/index.vue';
import Menu from '../components/menu/nav.vue';
import Sidebar from '../components/menu/side.vue';
import type { MenuConfig } from '../components/menu/menuConfig';
import { getMenuConfig } from '../components/menu/menuConfig';
import BPDynamicComponent from '../components/BPDynamicComponent.vue';
import { BetterPortal } from '@bettercorp/betterportal-sdk/src';
import type { ServiceRouteExpanded } from '@bettercorp/betterportal-sdk/src';
import { ComponentLoadType, type AppFeatures, type BPv2WhoAmIDefinition, type Component } from '@/components/appConfig';
import {
  VaCard,
  VaCardContent,
  VaInnerLoading
} from 'vuestic-ui';

const router = useRouter();
const betterportal = new BetterPortal<AppFeatures, BPv2WhoAmIDefinition>();
const refMenuChild = ref();
const renderedComponent = shallowRef<{
  component: any,
  props: any;
} | null>(null);
interface RouteTo {
  meta?: {
    content?: any,
    bsbRoute?: ServiceRouteExpanded;
  };
}
const navChange = (to: RouteTo) => {
  renderedComponent.value = null;
  if (to.meta === undefined) return;
  if (to.meta.bsbRoute !== undefined) {

    let propComponent: Component = {
      name: to.meta.bsbRoute.component,
      service: to.meta.bsbRoute.service,
      LoadType: ComponentLoadType.content
    };
    renderedComponent.value = {
      component: BPDynamicComponent,
      props: {
        component: propComponent
      }
    };
    betterportal.ws.ping();
  }
  if (to.meta.content !== undefined) {
    if (to.meta.content.then !== undefined) {
      to.meta.content.then((x: any) => {
        renderedComponent.value = {
          component: x.default !== undefined ? x.default : x,
          props: {}
        };
        betterportal.ws.ping();
      });
      return;
    }
    renderedComponent.value = {
      component: to.meta.content,
      props: {}
    };
    betterportal.ws.ping();
  }
};

function toggleMenu() {
  refMenuChild.value.toggleMenu();
}

//const appConfig = useAsyncState(betterportal.whoami.getApp<BPv2WhoAmIDefinition>(defaultAppFeatures, import.meta.env.VITE_WHOAMIHOST), undefined);
const menuConfig = ref<MenuConfig | null>(null);
async function setMenuConfig(to: any) {
  let appConfig = await betterportal.whoami.getApp();
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
    betterportal.ws.ping();
    (window as any).onPageChange();
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
        <va-inner-loading :loading="true" :size="80">
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
      <component v-else :is="renderedComponent.component" v-bind="renderedComponent.props" name="content" />
    </MenuContainer>
    <Menu @toggleMenu="toggleMenu" :menuConfig="menuConfig" />
    <Sidebar ref="refMenuChild" :menuConfig="menuConfig" />
  </div>
</template>
  