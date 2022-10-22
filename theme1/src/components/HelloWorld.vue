<script setup lang="ts">
import { defineComponent, computed, ref } from 'vue';
import * as vue from 'vue';
import { defineAsyncComponent } from 'vue';
import { loadModule } from 'vue3-sfc-loader';
import { BetterPortal } from '@bettercorp/betterportal/src';

const options = {
  moduleCache: {
    vue,
    BetterPortal
  },
  async getFile(url) {

    const res = await fetch(url);
    if (!res.ok)
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    return {
      getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
    };
  },
  addStyle(textContent) {

    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
};
const LoginPopup = defineAsyncComponent(() => loadModule('http://localhost:3000/lib/test.vue', options))
console.log(LoginPopup)
</script>

<template>
  <div class="greetings">
    <LoginPopup />
  </div>
</template>

