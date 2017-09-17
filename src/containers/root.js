// root container
import React from 'react'

import Main from '../components/main'
import Hero from '../components/hero'
import BigNav from '../components/big-nav'
import WorkList from '../components/work-list'

import homeContent from '../content/home'

const TITLE = 'Sal Muñoz'
const SUBTITLE = 'artist & community organizer'
const PAGES = [
  {href: '/news', title: 'News'},
  {href: '/cv', title: 'Curriculum Vitae', shortTitle: 'C/V'},
  {href: '/about', title: 'About'}
]

const PROJECTS = homeContent.pages.map((name) => {
  return require(`../content/home/pages-by-name/${name}.json`)
})

export default function Root () {
  return (
    <Main>
      <Hero title={TITLE} subtitle={SUBTITLE} />
      <BigNav pages={PAGES} />
      <WorkList projects={PROJECTS} />
    </Main>
  )
}
