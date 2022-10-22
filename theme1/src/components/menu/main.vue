<template>
  <div v-if="!appConfig.isReady || appConfig.state.value === undefined">
  </div>
  <div v-else>
    <div
      :style="`position: fixed; border: 0; height: ${menuConfig.menuHeight}px; left: 0; right: 0; z-index: 10;`+(!menuConfig.posTop?'bottom: 0;':'top: 0;')">
      <va-app-bar v-if="menuConfig.type == 'app-bar'" :bottom="!menuConfig.posTop" color="primary">
        <va-button icon="menu" color="white" flat :rounded="false" @click="$emit('toggleMenu')" />
        <!-- <va-button icon="home" color="white" flat :rounded="false" to="/" v-if="route.path !== '/'" /> -->
        <!-- <va-button icon="info" color="white" flat :rounded="false" /> -->

        <va-breadcrumbs style="color: var(--va-white)">
          <va-breadcrumbs-item :to="route.path !== '/'?'/':undefined" style="color: var(--va-white); font-weight: 700;">
            {{appConfig.state.value.features.title}}
          </va-breadcrumbs-item>
          <va-breadcrumbs-item v-bind="bread" v-for="bread of breadcrumbs" />
        </va-breadcrumbs>
        <va-spacer />

        <div v-if="appConfig.state.value.features.showLogin" class="no-shrink-button">
          <va-button color="white" flat :rounded="false" v-if="!loggedIn" @click="goToLogin()">Login</va-button>
          <va-button color="white" flat :rounded="false" v-else><span class="hide-min-md" style="margin-right: 5px;">Hey
            </span>{{betterportal.auth.user!.name}}</va-button>
        </div>

        <va-button color="white" flat :rounded="false" class="hide-min-md" to="/App/Version">v{{version}}</va-button>
        <!-- <va-button-dropdown size="small" flat color="#fff" icon="ellipsis">
          Content
        </va-button-dropdown> -->
        <va-button v-show="visible" icon="expand_less" color="#fff" class="hide-min-md" flat :rounded="false"
          @click="scrollToTop()" />
      </va-app-bar>
      <va-navbar v-else-if="menuConfig.type == 'navbar'" color="primary" class="mb-2">
        <template #left>
          <va-navbar-item>
            <va-button icon="menu" color="#fff" flat :rounded="false" @click="$emit('toggleMenu')" />
            <!-- <va-button icon="home" color="#fff" flat :rounded="false" to="/" v-if="route.path !== '/'" /> -->
            <!-- <va-button icon="info" color="#fff" flat :rounded="false" /> -->
          </va-navbar-item>
        </template>
        <template #center>
          <va-navbar-item>
            <va-breadcrumbs style="color: var(--va-white)">
              <va-breadcrumbs-item :to="route.path !== '/'?'/':undefined"
                style="color: var(--va-white); font-weight: 700;">
                {{appConfig.state.value.features.title}}
              </va-breadcrumbs-item>
              <va-breadcrumbs-item :v-bind="bread" v-for="bread of breadcrumbs" />
            </va-breadcrumbs>
          </va-navbar-item>
        </template>
        <template #right>
          <va-navbar-item>
            <div v-if="appConfig.state.value.features.showLogin" class="no-shrink-button">
              <va-button color="#fff" flat :rounded="false" v-if="!loggedIn" @click="goToLogin()">Login</va-button>
              <va-button color="#fff" flat :rounded="false" v-else><span class="hide-min-md"
                  style="margin-right: 5px;">Hey </span>{{betterportal.auth.user!.name}}</va-button>
            </div>

            <va-button color="white" flat :rounded="false" class="hide-min-md" to="/App/Version">v{{version}}
            </va-button>
            <va-button v-show="visible" icon="expand_less" class="hide-min-md" color="#fff" flat :rounded="false"
              @click="scrollToTop()" />
          </va-navbar-item>
        </template>
      </va-navbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BetterPortal } from '@bettercorp/betterportal/src';
import { useAsyncState } from '@vueuse/core';
import { defineComponent, ref, computed, onMounted, onBeforeUnmount, shallowRef } from 'vue';
import { onBeforeRouteLeave, useRouter, useRoute, type RouteLocationNormalized } from 'vue-router';
import { VaAppBar, VaButton, VaSpacer, VaButtonDropdown, VaBreadcrumbs, VaBreadcrumbsItem, VaNavbar, VaNavbarItem } from 'vuestic-ui';
import type { BPv2WhoAmIDefinition } from '../appConfig';
import type { MenuConfig } from './menuConfig';
const version = import.meta.env.VITE_VERSION;

const router = useRouter();
const route = useRoute();
const betterportal = new BetterPortal<BPv2WhoAmIDefinition>();
const appConfig = useAsyncState(betterportal.whoami.getApp(), undefined);

const props = defineProps<{
  menuConfig: MenuConfig;
}>();
const menuConfig = props.menuConfig;

const loggedIn = ref(betterportal.auth.isLoggedIn);
//const loggedInUser = ref(false);

const targetScrollValue = ref(0);
let targetElement: Element | Window;
const getTargetElement = () => {
  return document.querySelector('.app_content') as Element;
};
const breadcrumbs = shallowRef<{ label: string; to?: string; }[]>([]);
const scrolled = ref(false);
const interval = ref(0);
const goToLogin = () => {
  router.push('/App/Login');
};
const scrollToTop = () => {
  if (scrolled.value) { return; }
  scrolled.value = true;
  if (targetElement instanceof Window) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }
  interval.value = window.setInterval(() => {
    if (targetElement instanceof Element) {
      if (targetElement.scrollTop === 0) {
        clearInterval(interval.value);
        scrolled.value = false;
      } else {
        const next = Math.floor(targetElement.scrollTop - 50);
        targetElement.scrollTo(0, next);
      }
    }
  }, 15);
};
const handleScroll = () => {
  targetScrollValue.value = targetElement instanceof Window
    ? targetElement.scrollY
    : targetElement.scrollTop;
};
const visible = computed(() => targetScrollValue.value > 50);
onMounted(function () {
  targetElement = getTargetElement();
  targetElement.addEventListener('scroll', handleScroll, true);
  scrollToTop();
});
onBeforeUnmount(() => targetElement?.removeEventListener('scroll', handleScroll));
const updateBreadcrumbs = (to: RouteLocationNormalized) => {
  setTimeout(() => {
    loggedIn.value = betterportal.auth.isLoggedIn;
    breadcrumbs.value = [];
    if (route.path !== '/App/Client' && betterportal.auth.isLoggedIn && betterportal.auth.clientId !== null) {
      breadcrumbs.value.push({
        label: betterportal.auth.client!.name,
        to: '/App/Client'
      });
    }
    if (to.meta.breadcrumbs !== undefined && to.meta.breadcrumbs !== null) {
      breadcrumbs.value = breadcrumbs.value.concat((to.meta.breadcrumbs as any[]).map(x => {
        if (typeof x === 'string') return { label: x };
        return x;
      }));
    }
  }, 10);
};
onBeforeRouteLeave((to, from, next) => {
  scrollToTop();
  updateBreadcrumbs(to);
  next(true);
});
updateBreadcrumbs(route);

defineComponent({
  /*watch: {
    '$route': (to) => {
      updateBreadcrumbs(to);
    }
  },*/
  components: {
    VaAppBar, VaButton, VaSpacer, VaButtonDropdown, VaBreadcrumbs, VaBreadcrumbsItem, VaNavbar, VaNavbarItem
  }
});
</script>
