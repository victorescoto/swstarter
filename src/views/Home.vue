<template>
  <div class="flex items-start">
    <search-container></search-container>
    <results-container></results-container>
  </div>
</template>

<script>
import SearchContainer from '@/components/SearchContainer.vue';
import ResultsContainer from '@/components/ResultsContainer.vue';

export default {
  name: 'Home',
  components: {
    SearchContainer,
    ResultsContainer,
  },
};
</script>
