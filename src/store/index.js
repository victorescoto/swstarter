import Vue from 'vue';
import Vuex from 'vuex';
import {
  GET_SEARCH_RESULTS,
  GET_SELECTED_ITEM,
  IS_LOADING_ITEM,
  IS_SEARCHING,
} from './getters';
import {
  SET_ITEM_LOADING,
  SET_SEARCH_LOADING,
  SET_SEARCH_RESULTS,
  SET_SELECTED_ITEM,
} from './mutation-types';
import { SEARCH_ITEMS, SELECT_ITEM } from './actions';
import { PEOPLE_SEARCH_TYPE } from './strings';
import { searchPeople, searchMovies } from '../services/star-wars-api';

Vue.use(Vuex);

export const storeConfig = {
  state: {
    searchLoading: false,
    itemLoading: false,
    searchResults: [],
    selectedItem: null,
  },
  getters: {
    [IS_SEARCHING]: (state) => state.searchLoading,
    [IS_LOADING_ITEM]: (state) => state.itemLoading,
    [GET_SEARCH_RESULTS]: (state) => state.searchResults.results ?? [],
    [GET_SELECTED_ITEM]: (state) => state.selectedItem,
  },
  mutations: {
    [SET_SEARCH_LOADING]: (state, loading) => { state.searchLoading = loading; },
    [SET_SEARCH_RESULTS]: (state, searchResults) => { state.searchResults = searchResults; },
    [SET_ITEM_LOADING]: (state, loading) => { state.itemLoading = loading; },
    [SET_SELECTED_ITEM]: (state, selectedItem) => { state.selectedItem = selectedItem; },
  },
  actions: {
    [SEARCH_ITEMS]: ({ commit }, { searchTerm, searchType }) => {
      if (!searchTerm) {
        return;
      }

      commit(SET_SEARCH_LOADING, true);
      commit(SET_SEARCH_RESULTS, []);

      const onSuccess = ({ data }) => {
        commit(SET_SEARCH_LOADING, false);
        commit(SET_SEARCH_RESULTS, data);
      };

      const onError = ({ message }) => {
        console.error(message);
        commit(SET_SEARCH_LOADING, false);
      };

      if (searchType === PEOPLE_SEARCH_TYPE) {
        searchPeople(searchTerm).then(onSuccess).catch(onError);
      } else {
        searchMovies(searchTerm).then(onSuccess).catch(onError);
      }
    },
    [SELECT_ITEM]: ({ commit }, selectedItem) => {
      commit(SET_SELECTED_ITEM, selectedItem);
    },
  },
};

export default new Vuex.Store(storeConfig);
