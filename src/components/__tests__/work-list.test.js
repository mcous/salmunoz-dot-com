// work list component tests
import React from 'react'
import {mount} from 'enzyme'

import WorkList from '../work-list'

const props = {
  projects: [
    {name: 'foo', title: 'Foo', thumbnail: 'foo.jpg'},
    {name: 'bar', title: 'Bar', thumbnail: 'bar.jpg'},
    {name: 'baz', title: 'Baz', thumbnail: 'baz.jpg'}
  ]
}

describe('WorkList component', () => {
  test('renders a list of project thumbnails', () => {
    const list = mount(<WorkList {...props} />)
    const links = list.find('a')

    expect(links.length).toBe(3)
  })
})
