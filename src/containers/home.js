// home page container
import React from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

import ProjectModal from './project-modal'
import Main from '../components/main'
import Hero from '../components/hero'
import BigNav from '../components/big-nav'
import WorkList from '../components/work-list'

import homeContent from '../content/home'

const PROJECTS = homeContent.pages.map((name) => {
  return require(`../content/home/pages-by-name/${name}.json`)
})

const TITLE = 'Sal Muñoz'
const SUBTITLE = 'artist & community organizer'
const PAGES = [
  {href: '/news', title: 'News'},
  {href: '/cv', title: 'Curriculum Vitae', shortTitle: 'C/V'},
  {href: '/about', title: 'About'}
]

export default function Home (props) {
  return (
    <Main>
      <Hero title={TITLE} subtitle={SUBTITLE} />
      <BigNav pages={PAGES} />
      <WorkList projects={PROJECTS} />

      <Route path='/work/:page' component={ProjectModal} />
    </Main>
  )
}

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string
    }).isRequired
  }).isRequired
}
