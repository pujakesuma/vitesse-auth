import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Card from '../src/components/Card.vue'

describe('Card.vue', () => {
  it('should render', () => {
    const wrapper = mount(Card, { props: { customClass: 'w-full lg:w-3/5' } })
    expect(wrapper.text()).toContain('')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be interactive', async() => {
    const wrapper = mount(Card, { props: { customClass: '' } })
    expect(wrapper.text()).toContain('')
    expect(wrapper.text()).toContain('')
  })
})
