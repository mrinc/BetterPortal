<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import * as vue from 'vue';
import { defineAsyncComponent } from 'vue';
import * as vueRouter from 'vue-router';
import * as vuesticUi from 'vuestic-ui';
import { v4 as uuid } from 'uuid';
import { loadModule, } from "vue3-sfc-loader";
import { BetterPortal } from '@bettercorp/betterportal-sdk/src';
import * as VueUseCore from '@vueuse/core';
import * as BetterPortalSRC from '@bettercorp/betterportal-sdk/src';
import * as AgGridVue from "ag-grid-vue3";
import * as AgGridVueCommunity from "ag-grid-community";
import type { AppFeatures, BPv2WhoAmIDefinition, Component } from './appConfig';

const thisUID = uuid();
const props = defineProps<{ component: Component; }>();

const betterportal = new BetterPortal<AppFeatures, BPv2WhoAmIDefinition>();
const loaded = ref<number>(0);
let componentAssetsPath = '';

const options: any = {
  moduleCache: {
    vue,
    "ag-grid-community": AgGridVueCommunity,
    "ag-grid-vue3": AgGridVue,
    '@vueuse/core': VueUseCore,
    'vue-router': vueRouter,
    'vuestic-ui': vuesticUi,
    '@bettercorp/betterportal-sdk': BetterPortalSRC,
    /*'file!'(content: any, path: any, type: any, options: any) {
      console.log('FILE');
      return String(new URL(path, window.location.href));
    },
    'url!'(content: any, path: any, type: any, options: any) {
      console.log('URL');
      if (type === '.svg')
        return `data:image/svg+xml;base64,${ btoa(content) }`;

      throw new Error(`${ type } not handled by url!`);
    },*/
  },
  /*pathResolve({ refPath, relPath }: any) {
    console.log('pathResolve:', refPath, relPath, componentAssetsPath);
    if (relPath == '/component.vue') return relPath;
    if (relPath.indexOf('@/') === 0) {
      return componentAssetsPath + relPath.substring(2);
    }
    if (relPath === 'date-fns')
      return 'https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.min.js';

    if (relPath === '.') // self
      return refPath;

    // relPath is a module name ?
    if (relPath[0] !== '.' && relPath[0] !== '/')
      return relPath;

    return String(new URL(relPath, refPath === undefined ? window.location : refPath));
  },*/
  async getFile(url: string): Promise<any> {
    console.log('TRY LOAD', url);
    if (url == '/component.vue')
      return (await (await betterportal.plugins.getPlugin(props.component.service))!.getUIComponent(props.component.name)).replace(/@\//g, componentAssetsPath);
    /*if (url.indexOf('@/') === 0) {
      let pathUrl = await (await betterportal.plugins.getPlugin(props.component.service))!.getUIComponentAssetURL(url);
      console.log('as:' + pathUrl);
      //return pathUrl;
      const res = await fetch(pathUrl);
      if (!res.ok)
        throw Object.assign(new Error(res.statusText + ' ' + url), { res });
      return {
        type: 'image/png',
        getContentData: (asBinary: boolean) => asBinary ? res.arrayBuffer() : res.text(),
      };
    }
    if (url.indexOf('https://') === 0) {
      console.log('as:' + url);
      let data = await toDataURLAsync(url);
      return data;
      //return pathUrl;
      const res = await fetch(url);
      if (!res.ok)
        throw Object.assign(new Error(res.statusText + ' ' + url), { res });
      return {
        type: 'image/png',
        getContentData: (asBinary: boolean) => asBinary ? res.arrayBuffer() : res.text(),
      };
    }*/
    throw 'unknown URL';
    /*let res = await (await betterportal.request(props.component.service)).get(`/bpui/${ props.component.name }.vue`);
    if (res.status !== 200)
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    return res.data;*/
  },
  addStyle(textContent: string) {
    document.getElementById(`${ thisUID }_custom_component_stylecontent`)!.innerHTML = `<style>${ textContent }</style>`;
  },
};
const dynamicComponent = defineAsyncComponent(async () => {
  componentAssetsPath = await (await betterportal.plugins.getPlugin(props.component.service))!.getUIComponentAssetURL('');
  let loadedComponent = loadModule('/component.vue', options);
  return loadedComponent;
});
let timer: any | null = null;
onMounted(() => {
  timer = setTimeout(() => {
    if (loaded.value !== 1) {
      loaded.value = -1;
    }
  }, 5000);
});
onUnmounted(() => {
  if (timer !== null)
    clearTimeout(timer);
});
</script>

<template>
  <div>
    <div :id="`${ thisUID }_custom_component_stylecontent`"></div>
    <div class="row align--center justify--center align-self--center" v-if="loaded !== 1">
      <div class="center-grid">
        <div class="item">
          <va-inner-loading :loading="loaded === 0" :size="60">
            <va-card>
              <va-card-title>
                <div v-if="loaded !== -1" style="width: 100px; height: 50px;"></div>
                <div v-else>An error occured while loading this component</div>
              </va-card-title>
            </va-card>
          </va-inner-loading>
        </div>
      </div>
    </div>

    <dynamicComponent v-show="loaded" @load="() => loaded = 1" />
  </div>
</template>

