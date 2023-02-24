<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import * as vue from 'vue';
import { defineAsyncComponent } from 'vue';
import * as vueRouter from 'vue-router';
import * as vuesticUi from 'vuestic-ui';
import { v4 as uuid } from 'uuid';
import { loadModule, } from "vue3-sfc-loader";
import * as BetterPortal from '@bettercorp/betterportal-sdk';
import * as Tools from '@bettercorp/tools';
import * as ToolsI from '@bettercorp/tools/lib/Tools';
import * as VueUseCore from '@vueuse/core';
import * as AgGridVue from "ag-grid-vue3";
import * as AgGridVueCommunity from "ag-grid-community";
import type { T3AppConfigAppFeatures, T3AppConfigBPv2WhoAmIDefinition, T3AppConfigComponent } from '@bettercorp/betterportal-sdk';

const thisUID = uuid();
const componentHash = ref('');
const props = defineProps<{ component: T3AppConfigComponent; }>();

const betterportal = new BetterPortal.BetterPortal<T3AppConfigAppFeatures, T3AppConfigBPv2WhoAmIDefinition>();
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
    '@bettercorp/betterportal-sdk': BetterPortal,
    '@bettercorp/tools': Tools,
    '@bettercorp/tools/lib/Tools': ToolsI,
    /*'file!'(content: any, path: any, type: any, options: any) {
      console.log('FILE');
      return String(new URL(path, window.location.href));
    },*/
    /*'url!'(content: any, path: any, type: any, options: any) {
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
    console.log('gfile: ' + url);
    try {
      console.log('TRY LOAD', url);
      if (url == '/component.vue') {
        const tcomponent = await (await betterportal.plugins.getPlugin(props.component.service))!.getUIComponent(props.component.name);
        componentHash.value = tcomponent.hash;
        return tcomponent.content.replace(/@\//g, componentAssetsPath);
      }
      if (url.indexOf('/bpui/lib/') > 0 || url.indexOf('@/lib/') === 0) {
        console.log('fetchl:' + url);
        if (url.indexOf('@/') === 0) {
          url = await (await betterportal.plugins.getPlugin(props.component.service))!.getUIComponentLibURL('/bpui/lib'+url.substring(5));
        }
        console.log('-fetchl:' + url);
        const res = await fetch(url);
        if (!res.ok)
          throw Object.assign(new Error(res.statusText + ' ' + url), { res });
        return {
          //type: 'application/javascript',
          type: '.mjs',
          sourceType: 'module',
          getContentData: (asBinary: boolean) => asBinary ? res.arrayBuffer() : res.text(),
        };
      }
      if (url.indexOf('/bpui/') > 0) {
        console.log('fetchu:' + url);
        if (url.indexOf('@/') === 0) {
          url = await (await betterportal.plugins.getPlugin(props.component.service))!.getUIComponentAssetURL(url.substring(2));
        }
        console.log('-fetchu:' + url);
        const res = await fetch(url);
        if (!res.ok)
          throw Object.assign(new Error(res.statusText + ' ' + url), { res });
        return {
          //type: 'application/javascript',
          type: '.vue',
          //sourceType: 'component',
          getContentData: (asBinary: boolean) => asBinary ? res.arrayBuffer() : res.text(),
        };
        /*const tcomponent = await (await betterportal.plugins.getPlugin(props.component.service))!.getUIComponent(props.component.name);
        componentHash.value = tcomponent.hash;
        return tcomponent.content.replace(/@\//g, componentAssetsPath);*/
      }
      if (url.indexOf('@/') === 0) {
        console.log('fetcha:' + url);
        url = await (await betterportal.plugins.getPlugin(props.component.service))!.getUIComponentAssetURL(url.substring(2));
        console.log('-fetcha:' + url);
        const res = await fetch(url);
        if (!res.ok)
          throw Object.assign(new Error(res.statusText + ' ' + url), { res });
        return {
          //type: 'application/javascript',
          //type: '.vue',
          //sourceType: 'component',
          getContentData: (asBinary: boolean) => asBinary ? res.arrayBuffer() : res.text(),
        };
        /*const tcomponent = await (await betterportal.plugins.getPlugin(props.component.service))!.getUIComponent(props.component.name);
        componentHash.value = tcomponent.hash;
        return tcomponent.content.replace(/@\//g, componentAssetsPath);*/
      }
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
      throw 'unknown URL ' + url;
      /*let res = await (await betterportal.request(props.component.service)).get(`/bpui/${ props.component.name }.vue`);
      if (res.status !== 200)
        throw Object.assign(new Error(res.statusText + ' ' + url), { res });
      return res.data;*/
    } catch (exc: any) {
      componentHash.value = exc.message || exc;
      throw exc.message || exc;
    }
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
    <div v-if="loaded !== 1">
      <div class="center-grid">
        <div class="item">
          <va-inner-loading :loading="loaded === 0" :size="60">
            <va-card>
              <va-card-title>
                <div v-if="loaded !== -1" style="width: 100px; height: 50px;"></div>
                <div v-else>An error occured while loading this component {{ componentHash !== '' ? `(ref:
                ${ componentHash })` : '' }}</div>
              </va-card-title>
            </va-card>
          </va-inner-loading>
        </div>
      </div>
    </div>

    <dynamicComponent v-show="loaded" @load="() => loaded = 1" />
  </div>
</template>

