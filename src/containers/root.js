// root container
import React from 'react'

import Main from '../components/main'
import Hero from '../components/hero'
import BigNav from '../components/big-nav'

const TITLE = 'Sal Muñoz'
const SUBTITLE = 'artist & community organizer'
const PAGES = [
  {href: '/news', title: 'News'},
  {href: '/cv', title: 'Curriculum Vitae', shortTitle: 'C/V'},
  {href: '/about', title: 'About'}
]

export default function Root () {
  return (
    <Main>
      <Hero title={TITLE} subtitle={SUBTITLE} />
      <BigNav pages={PAGES} />
    </Main>
  )
}
