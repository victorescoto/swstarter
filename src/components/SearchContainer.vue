<template>
  <section id="search-container" class="bg-white shadow-search-container rounded-md p-12 mr-10 w-search-container">
    <div id="search-message" class="mb-1 text-2xl font-semibold text-default">
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
        <label for="people" class="text-2xl text-black font-bold">People</label>
      </div>

      <div id="search-type-movies-container" class="flex items-center">
        <input
          class="mr-4"
          type="radio"
          id="movies"
          :value="MOVIE_SEARCH_TYPE"
          v-model="searchType"
        >
        <label for="movies" class="text-2xl text-black font-bold">Movies</label>
      </div>
    </div>

    <div id="search-term-container" class="my-8">
      <input
        id="search-term"
        class="w-full p-4 rounded-lg border border-gray shadow-search-input white text-2xl font-bold text-default"
        type="text"
        v-model="term"
        :placeholder="placeholder"
      />
    </div>

    <div id="search-button-container">
      <button
        id="search-button"
        type="button"
        class="w-full rounded-search-button p-3 text-2xl font-bold text-white transition"
        :class="{
          'bg-gray cursor-not-allowed': searchDisabled,
          'bg-primary cursor-pointer' : !searchDisabled
        }"
      >
        Search
      </button>
    </div>
  </section>
</template>

<script>
import { PEOPLE_SEARCH_TYPE, MOVIE_SEARCH_TYPE } from '@/constants';

export default {
  name: 'SearchContainer',
  data() {
    return {
      searchType: PEOPLE_SEARCH_TYPE,
      term: '',
    };
  },
  computed: {
    placeholder() {
      return this.searchType === PEOPLE_SEARCH_TYPE
        ? 'e.g. Chewbacca, Yoda, Boba Fett'
        : 'e.g. A New Hope, The Empire Strikes Back';
    },
    searchDisabled() {
      return this.term.length === 0;
    },
  },
  created() {
    this.PEOPLE_SEARCH_TYPE = PEOPLE_SEARCH_TYPE;
    this.MOVIE_SEARCH_TYPE = MOVIE_SEARCH_TYPE;
  },
};
</script>
