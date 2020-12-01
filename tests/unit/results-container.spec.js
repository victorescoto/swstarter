import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { storeConfig } from '@/store';
import ResultsContainer from '@/components/ResultsContainer.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({ ...storeConfig });

describe('ResultsContainer.vue', () => {
  const wrapper = shallowMount(ResultsContainer, { store, localVue });

  it('check component container styles', () => {
    expect(wrapper.attributes().class).toBe('bg-white shadow-results-container rounded-md p-12');
  });

  it('check container-title styles', () => {
    expect(wrapper.find('#container-title').attributes().class).toBe('mb-4 text-3xl font-bold text-black');
  });

  it('check results-list styles', async () => {
    expect(wrapper.find('#results-list').attributes().class).toBe('min-h-results-list h-px');
  });
});
