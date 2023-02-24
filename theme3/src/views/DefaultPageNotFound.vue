<template>
  <VaPageNotFound class="va-page-not-found-simple">
    <template #image>
      <!-- <vuestic-logo /> -->
      LOGO
    </template>
    <va-button :to="{ name: 'dashboard' }"> Back to dashboard </va-button>
  </VaPageNotFound>
</template>

<script setup lang="ts">
//import VuesticLogo from '../../components/VuesticLogo.vue'
import VaPageNotFound from './PageNotFound.vue';
</script>

<style lang="scss">
.va-page-not-found-simple {
  .va-icon-vuestic {
    width: 19rem;
    height: 2rem;
    max-width: 100%;
    margin-bottom: 13%;
  }
}
</style>