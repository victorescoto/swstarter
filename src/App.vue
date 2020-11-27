<template>
  <div id="app">
    <app-bar></app-bar>

    <main class="max-w-screen-lg m-auto p-1">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue';

export default {
  name: 'App',
  components: {
    AppBar,
  },
};
</script>
