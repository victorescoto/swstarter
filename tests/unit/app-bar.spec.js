import { shallowMount } from '@vue/test-utils';
import AppBar from '@/components/AppBar.vue';

describe('AppBar.vue', () => {
  it('renders SWStarter when passed', () => {
    const wrapper = shallowMount(AppBar);
    expect(wrapper.text()).toBe('SWStarter');
  });

  it('check classes', () => {
    const wrapper = shallowMount(AppBar);
    expect(wrapper.attributes().class).toBe('mb-12 p-6 shadow-custom-header bg-white text-center');
    expect(wrapper.find('span').attributes().class).toBe('text-primary text-3xl');
  });
});
