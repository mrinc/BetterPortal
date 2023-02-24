<template>
  <div v-if="!appConfig.isReady || appConfig.state.value === undefined">
  </div>
  <div v-else>
    <div
      :style="`position: fixed; border: 0; left: 0; right: 0; z-index: 10;` + (!menuConfig.posTop ? 'bottom: 0;' : 'top: 0;')">
      <va-app-bar v-if="menuConfig.type == 'app-bar'" :bottom="!menuConfig.posTop" color="primary">
        <va-button text-color="textInverted" icon="menu" flat :rounded="false" @click="$emit('toggleMenu')" />
        <!-- <va-button icon="home"  flat :rounded="false" to="/" v-if="route.path !== '/'" /> -->
        <!-- <va-button icon="info"  flat :rounded="false" /> -->

        <va-breadcrumbs color="textInverted" separator-color="textInverted" active-color="textInverted">
          <va-breadcrumbs-item :to="route.path !== '/' ? '/' : undefined" style="font-weight: 700;">
            {{ appConfig.state.value.features.title }}
          </va-breadcrumbs-item>
          <va-breadcrumbs-item v-bind="bread" v-for="bread of breadcrumbs" />
        </va-breadcrumbs>
        <va-spacer />

        <div v-if="appConfig.state.value.features.showLogin" class="no-shrink-button">
          <va-button text-color="textInverted" flat :rounded="false" v-if="!loggedIn"
            @click="goToLogin()">Login</va-button>
          <va-button text-color="textInverted" flat :rounded="false" v-else @click="goToProfile()"><span
              class="hide-min-md" style="margin-right: 5px;">Hey
            </span>{{ betterportal.auth.accessToken!.name }}
            <!-- <span v-if="betterportal.auth.clientId !== null" style="padding-left: 5px;">({{
              betterportal.auth.clientName
            }})</span> -->
          </va-button>
        </div>

        <va-button text-color="textInverted" flat :rounded="false" class="hide-min-md" to="/App/Version">v{{
          version
        }}</va-button>
        <!-- <va-button-dropdown size="small" flat icon="ellipsis">
          Content
        </va-button-dropdown> -->
        <va-button text-color="textInverted" v-show="visible" icon="expand_less" class="hide-min-md" flat
          :rounded="false" @click="scrollToTop()" />
      </va-app-bar>
      <va-navbar v-else-if="menuConfig.type == 'navbar'" class="mb-2" color="primary" text-color="textInverted"
        style="margin-bottom: 0 !important;">
        <template #left>
          <va-navbar-item>
            <va-button text-color="textInverted" icon="menu" flat :rounded="false" @click="$emit('toggleMenu')" />
            <!-- <va-button icon="home" flat :rounded="false" to="/" v-if="route.path !== '/'" /> -->
            <!-- <va-button icon="info" flat :rounded="false" /> -->
          </va-navbar-item>
        </template>
        <template #center>
          <va-navbar-item>
            <va-breadcrumbs color="textInverted" separator-color="textInverted" active-color="textInverted">
              <va-breadcrumbs-item :to="route.path !== '/' ? '/' : undefined" style="font-weight: 700;">
                {{ appConfig.state.value.features.title }}
              </va-breadcrumbs-item>
              <va-breadcrumbs-item v-bind="bread" v-for="bread of breadcrumbs" />
            </va-breadcrumbs>
          </va-navbar-item>
        </template>
        <template #right>
          <va-navbar-item>
            <div v-if="appConfig.state.value.features.showLogin" class="no-shrink-button">
              <va-button text-color="textInverted" flat :rounded="false" v-if="!loggedIn"
                @click="goToLogin()">Login</va-button>
              <va-button text-color="textInverted" flat :rounded="false" v-else @click="goToProfile()"><span
                  class="hide-min-md" style="margin-right: 5px;">Hey </span>{{ betterportal.auth.accessToken!.name }}
                <!-- <span v-if="betterportal.auth.clientId !== null" style="padding-left: 5px;">({{
                  betterportal.auth.clientName
                }})</span> -->
              </va-button>
            </div>

            <va-button text-color="textInverted" flat :rounded="false" class="hide-min-md" to="/App/Version">v{{
              version
            }}
            </va-button>
            <va-button text-color="textInverted" v-show="visible" icon="expand_less" class="hide-min-md" flat
              :rounded="false" @click="scrollToTop()" />
          </va-navbar-item>
        </template>
      </va-navbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as BetterPortal from '@bettercorp/betterportal-sdk';
import { useAsyncState } from '@vueuse/core';
import { ref, computed, onMounted, onBeforeUnmount, shallowRef } from 'vue';
import { onBeforeRouteLeave, useRouter, useRoute, type RouteLocationNormalized } from 'vue-router';
import type { T3AppConfigAppFeatures, T3AppConfigBPv2WhoAmIDefinition } from '@bettercorp/betterportal-sdk';
import type { MenuConfig } from './menuConfig';
import { Tools } from '@bettercorp/tools';
const version = import.meta.env.VITE_VERSION;

const router = useRouter();
const route = useRoute();
const betterportal = new BetterPortal.BetterPortal<T3AppConfigAppFeatures, T3AppConfigBPv2WhoAmIDefinition>();
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
  router.push('/login?original_url=' + encodeURIComponent(route.fullPath));
};
const goToProfile = () => {
  for (let serviceMap of Object.keys(appConfig.state.value!.config.serviceMapping!)) {
    for (let route of appConfig.state.value!.config.serviceMapping![serviceMap].routes) {
      if (route.component === 'profile') {
        router.push(route.path);
        return;
      }
    }
  }
  router.push('/login');
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
    if (route.path !== '/Account/Client' && betterportal.auth.isLoggedIn && betterportal.auth.accessToken !== null && !Tools.isNullOrUndefined(betterportal.auth.accessToken.clientName)) {
      breadcrumbs.value.push({
        label: betterportal.auth.accessToken.clientName!,
        to: '/Account/Profile'
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

</script>
