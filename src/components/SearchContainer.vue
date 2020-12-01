<template>
  <section id="search-container" class="bg-white shadow-container rounded-md p-12">
    <div id="search-message" class="mb-1 text-xl font-semibold text-default">
      What are you searching for?
    </div>

    <div id="search-types-container" class="flex mt-8">
      <div id="search-type-people-container" class="flex mr-12 items-center">
        <input
          class="mr-4"
          type="radio"
          id="people"
          :value="PEOPLE_SEARCH_TYPE"
          v-model="searchType"
        >
        <label for="people" class="text-xl text-black font-bold">People</label>
      </div>

      <div id="search-type-movies-container" class="flex items-center">
        <input
          class="mr-4"
          type="radio"
          id="movies"
          :value="MOVIE_SEARCH_TYPE"
          v-model="searchType"
        >
        <label for="movies" class="text-xl text-black font-bold">Movies</label>
      </div>
    </div>

    <div id="search-term-container" class="my-8">
      <input
        id="search-term"
        class="w-full p-4 rounded-lg border border-gray shadow-search-input white text-xl font-bold text-default"
        type="text"
        v-model="searchTerm"
        :placeholder="placeholder"
        @keyup.enter="searchItems({ searchTerm, searchType })"
      />
    </div>

    <div id="search-button-container">
      <button
        id="search-button"
        type="button"
        class="w-full rounded-search-button p-3 text-xl font-bold text-white transition uppercase"
        :class="{
          'bg-gray': searchDisabled,
          'cursor-not-allowed': searchDisabled || loading,
          'bg-primary hover:bg-primary-hover cursor-pointer' : !searchDisabled
        }"
        :disabled="searchDisabled || loading"
        @click="searchItems({ searchTerm, searchType })"
      >
        <template v-if="loading">Searching...</template>
        <template v-else>Search</template>
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { PEOPLE_SEARCH_TYPE, MOVIE_SEARCH_TYPE } from '@/store/strings';
import { IS_SEARCHING } from '@/store/getters';
import { SEARCH_ITEMS } from '@/store/actions';

export default {
  name: 'SearchContainer',
  data() {
    return {
      searchType: PEOPLE_SEARCH_TYPE,
      searchTerm: '',
    };
  },
  computed: {
    ...mapGetters({
      loading: IS_SEARCHING,
    }),
    placeholder() {
      return this.searchType === PEOPLE_SEARCH_TYPE
        ? 'e.g. Chewbacca, Yoda, Boba Fett'
        : 'e.g. A New Hope, The Empire Strikes Back';
    },
    searchDisabled() {
      return this.searchTerm.length === 0;
    },
  },
  methods: {
    ...mapActions({
      searchItems: SEARCH_ITEMS,
    }),
  },
  created() {
    this.PEOPLE_SEARCH_TYPE = PEOPLE_SEARCH_TYPE;
    this.MOVIE_SEARCH_TYPE = MOVIE_SEARCH_TYPE;
  },
};
</script>
