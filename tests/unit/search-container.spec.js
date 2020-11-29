import { shallowMount } from '@vue/test-utils';
import { PEOPLE_SEARCH_TYPE, MOVIE_SEARCH_TYPE } from '@/constants';
import SearchContainer from '@/components/SearchContainer.vue';

describe('SearchContainer.vue', () => {
  const wrapper = shallowMount(SearchContainer);

  it('disables the button when there is no term', async () => {
    wrapper.setData({ term: '' });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.searchDisabled).toBeTruthy();
  });

  it('enables the button when there is no term', async () => {
    wrapper.setData({ term: 'bar' });
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.searchDisabled).toBeFalsy();
  });

  it('changes the placeholder based on the selected search type', async () => {
    wrapper.setData({ searchType: PEOPLE_SEARCH_TYPE });
    expect(wrapper.vm.placeholder).toBe('e.g. Chewbacca, Yoda, Boba Fett');

    wrapper.setData({ searchType: MOVIE_SEARCH_TYPE });
    expect(wrapper.vm.placeholder).toBe('e.g. A New Hope, The Empire Strikes Back');
  });

  it('check component container styles', () => {
    expect(wrapper.attributes().class).toBe('bg-white shadow-search-container rounded-md p-12 mr-10 w-search-container');
  });

  it('check search-message styles', () => {
    expect(wrapper.find('#search-message').attributes().class).toBe('mb-1 text-2xl font-semibold text-default');
  });

  it('check search-types-container styles', () => {
    expect(wrapper.find('#search-types-container').attributes().class).toBe('flex mt-8');

    expect(wrapper.find('#search-type-people-container').attributes().class).toBe('flex mr-12 items-center');
    expect(wrapper.find('input#people').attributes().class).toBe('mr-4');
    expect(wrapper.find('input#people + label').attributes().class).toBe('text-2xl text-black font-bold');

    expect(wrapper.find('#search-type-movies-container').attributes().class).toBe('flex items-center');
    expect(wrapper.find('input#movies').attributes().class).toBe('mr-4');
    expect(wrapper.find('input#movies + label').attributes().class).toBe('text-2xl text-black font-bold');
  });

  it('check search-button-container styles', async () => {
    expect(wrapper.find('#search-button-container').attributes().class).toBe(undefined);

    const baseBtnClasses = 'w-full rounded-search-button p-3 text-2xl font-bold text-white transition';

    wrapper.setData({ term: '' });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('#search-button').attributes().class).toBe(`${baseBtnClasses} bg-gray cursor-not-allowed`);

    wrapper.setData({ term: 'bar' });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('#search-button').attributes().class).toBe(`${baseBtnClasses} bg-primary cursor-pointer`);
  });
});
