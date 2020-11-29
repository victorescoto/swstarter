<template>
  <div class="flex items-start">
    <search-container></search-container>
  </div>
</template>

<script>
import SearchContainer from '@/components/SearchContainer.vue';

export default {
  name: 'Home',
  components: {
    SearchContainer,
  },
};
</script>
