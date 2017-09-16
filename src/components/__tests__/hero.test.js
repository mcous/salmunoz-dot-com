// hero component tests
import React from 'react'
import {mount} from 'enzyme'

import Hero from '../hero'

const TITLE = 'Sal Muñoz'
const SUBTITLE = 'foobar'

describe('Hero component', () => {
  test('renders {title} in an <h1>', () => {
    const hero = mount(<Hero title={TITLE} subtitle={SUBTITLE} />)

    expect(hero.find('h1').text()).toBe(TITLE)
  })

  test('renders {subtitle} in a <p>', () => {
    const hero = mount(<Hero title={TITLE} subtitle={SUBTITLE} />)

    expect(hero.find('p').text()).toBe(SUBTITLE)
  })
})
