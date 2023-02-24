<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import BPDynamicComponentItem from './BPDynamicComponentItem.vue';
import type { T3AppConfigComponent } from '@bettercorp/betterportal-sdk';

const props = defineProps<{ component: T3AppConfigComponent; }>();

//defineComponent('BPDynamicComponentItem', BPDynamicComponentItem);

//const thisRoute = vueRouter.useRoute();
const componentName = ref('');

watch(() => props.component, () => {
  console.log('component changed', props.component);
  componentName.value = '';
  nextTick(() => {
    componentName.value = `${ props.component.LoadType }-${ props.component.service }-${ props.component.name }`;
  });
});
componentName.value = `${ props.component.LoadType }-${ props.component.service }-${ props.component.name }`;

</script>

<template>
  <div v-if="componentName !== ''">
    <BPDynamicComponentItem v-bind="props" />
  </div>
  <div v-else> loading</div>
</template>

