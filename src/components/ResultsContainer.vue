<template>
  <section
    id="results-container"
    class="bg-white shadow-results-container rounded-md p-12 w-results-container min-h-results-container"
  >
    <div id="container-title" class="mb-4 text-3xl font-bold text-black">
      Results
    </div>

    <hr class="border-gray"/>

    <div id="results-list" :class="{'min-h-results-list h-px': !searchResults.length}">
      <div v-if="searchResults.length && !isSearching">
        <div
          v-for="result in searchResults"
          :key="getItemIdFromURL(result.url)"
          class="border-b border-gray py-4 flex items-center justify-between"
        >
          <span class="text-2xl font-bold">{{ getName(result) }}</span>

          <button
            @click="seeDetails(result)"
            class="
              rounded-search-button py-3 px-8 text-xl font-bold text-white
              transition uppercase bg-primary cursor-pointer hover:bg-primary-hover
            ">
            See Details
          </button>
        </div>
      </div>

      <div v-else class="h-full flex justify-center items-center">
        <div class="text-3xl text-gray text-center font-bold">
          <template v-if="isSearching">Searching...</template>
          <template v-else>
            There are zero matches.
            <br />
            Use the form to search for People or Movies.
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { IS_SEARCHING, GET_SEARCH_RESULTS } from '@/store/getters';
import { SELECT_ITEM } from '@/store/actions';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ResultsContainer',
  computed: {
    ...mapGetters({
      isSearching: IS_SEARCHING,
      searchResults: GET_SEARCH_RESULTS,
    }),
  },
  methods: {
    ...mapActions({
      selectItem: SELECT_ITEM,
    }),
    getItemIdFromURL(url) {
      return url.split('/').slice(-2)[0];
    },
    getName(result) {
      return result.name ?? result.title;
    },
    seeDetails(result) {
      this.selectItem(result);
      this.$router.push({ name: 'Details' });
    },
  },
};
</script>
