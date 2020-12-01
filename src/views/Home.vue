<template>
  <div class="flex pb-10 flex-col items-center px-12 xl:items-start xl:flex-row">
    <search-container id="search-container-component" class="mr-0 xl:mr-10 mb-10 w-full md:w-results-container xl:w-search-container"></search-container>
    <results-container id="results-container-component" class="w-full md:w-results-container min-h-results-container"></results-container>
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
