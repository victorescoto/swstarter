import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { storeConfig } from '@/store';
import Home from '@/views/Home.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({ ...storeConfig });

describe('Home.vue', () => {
  const wrapper = shallowMount(Home, { store, localVue });

  it('check component container styles', () => {
    expect(wrapper.attributes().class).toBe('flex pb-10 flex-col items-center px-12 xl:items-start xl:flex-row');
  });

  it('check search-container-component styles', () => {
    expect(wrapper.find('#search-container-component').attributes().class).toBe('mr-0 xl:mr-10 mb-10 w-full md:w-results-container xl:w-search-container');
  });

  it('check search-container-component styles', async () => {
    expect(wrapper.find('#results-container-component').attributes().class).toBe('w-full md:w-results-container min-h-results-container');
  });
});
