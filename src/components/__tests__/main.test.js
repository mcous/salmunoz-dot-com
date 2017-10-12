// hero component tests
import React from 'react'
import {mount} from 'enzyme'

import Main from '../main'

describe('Main component', () => {
  test('sets font to avenir', () => {
    const main = mount(<Main />)

    expect(main.find('main').hasClass('avenir')).toBe(true)
  })

  test('renders children', () => {
    const children = [
      (<div key='foo' />),
      (<div key='bar' />),
      (<div key='baz' />)
    ]

    const main = mount(<Main>{children}</Main>)

    expect(main.containsAllMatchingElements(children)).toBe(true)
  })
})
