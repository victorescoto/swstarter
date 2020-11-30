import Vue from 'vue';
import Vuex from 'vuex';
import { IS_SEARCHING, IS_LOADING_ITEM, GET_SEARCH_RESULTS } from './getters';
import { SET_SEARCH_LOADING, SET_ITEM_LOADING, SET_SEARCH_RESULTS } from './mutation-types';
import { SEARCH_ITEMS } from './actions';
import { PEOPLE_SEARCH_TYPE } from './strings';
import { searchPeople, searchMovies } from '../services/star-wars-api';

Vue.use(Vuex);

export const getters = {
  [IS_SEARCHING]: (state) => state.searchLoading,
  [IS_LOADING_ITEM]: (state) => state.itemLoading,
  [GET_SEARCH_RESULTS]: (state) => state.searchResults.results ?? [],
};

export const mutations = {
  [SET_SEARCH_LOADING]: (state, loading) => { state.searchLoading = loading; },
  [SET_SEARCH_RESULTS]: (state, searchResults) => { state.searchResults = searchResults; },
  [SET_ITEM_LOADING]: (state, loading) => { state.itemLoading = loading; },
};

export const actions = {
  [SEARCH_ITEMS]: ({ commit }, { searchTerm, searchType }) => {
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
};

export const state = {
  searchLoading: false,
  itemLoading: false,
  searchResults: [],
};

export const storeConfig = {
  state,
  getters,
  mutations,
  actions,
};

export default new Vuex.Store(storeConfig);
