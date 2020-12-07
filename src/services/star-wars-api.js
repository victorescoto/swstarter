import axios from 'axios';

const starWarsApi = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

const search = (resource, term) => starWarsApi.get(`${resource}/search/${term}`);

export const searchPeople = (term) => search('people', term);

export const searchMovies = (term) => search('films', term);

export const getResource = (url) => starWarsApi.get(url);
