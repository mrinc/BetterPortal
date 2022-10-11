<script lang="ts">
import { defineComponent } from 'vue';
//import { RouterLink, RouterView } from 'vue-router';
//import HelloWorld from './components/HelloWorld.vue';
//import Menu from './components/menu/index.vue';
//import Sidebar from './components/menu/side.vue';

export default defineComponent({
  components: {
    //HelloWorld,
    //Menu,
    //Sidebar
  }
});
</script>

<template>
  <div>
    <!-- <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header> -->

    <!-- <Menu @toggleMenu="$refs.Sidebar.toggleMenu()" />
    <Sidebar ref="Sidebar">
      <RouterView />
    </Sidebar> -->
    <RouterView />
  </div>
</template>
