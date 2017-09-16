// big nav tests
import React from 'react'
import {mount} from 'enzyme'

import BigNav from '../big-nav'

const props = {
  pages: [
    {href: '/foo', title: 'Foo', shortTitle: 'f'},
    {href: '/bar', title: 'Bar'},
    {href: '/baz', title: 'Baz', shortTitle: 'z'}
  ]
}

describe('BigNav component', () => {
  test('creates links to pages', () => {
    const nav = mount(<BigNav {...props} />)

    nav.find('a').forEach((link, index) => {
      expect(link.node.href === props.pages[index].href).toBe(true)
    })
  })

  test('links have normal title on lg screens', () => {
    const nav = mount(<BigNav {...props} />)

    nav.find('a').forEach((link, index) => {
      expect(link.find('.dn.di-l').text()).toEqual(props.pages[index].title)
    })
  })

  test('links have shortTitle (title if missing( on sm/md screens', () => {
    const nav = mount(<BigNav {...props} />)

    nav.find('a').forEach((link, index) => {
      const linkProps = props.pages[index]
      const shortTitle = linkProps.shortTitle || linkProps.title

      expect(link.find('.di.dn-l').text()).toEqual(shortTitle)
    })
  })
})
