import { mount } from '@vue/test-utils';
import Index from './index.vue';

describe('Index', () => {
  it('renders properly', () => {
    const wrapper = mount(Index, {});
    expect(wrapper.text()).toContain('Welcome to Index');
  });
});
