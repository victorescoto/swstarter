import axios from 'axios';

const starWarsApi = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 3000,
});

export const searchPeople = (term) => starWarsApi.get('people', {
  params: { search: term },
});

export const searchMovies = (term) => starWarsApi.get('films', {
  params: { search: term },
});

export const getResource = (url) => starWarsApi.get(url);
