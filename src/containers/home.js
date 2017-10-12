// home page container
import React from 'react'
import {Route} from 'react-router-dom'

import Main from '../components/main'
import Hero from '../components/hero'
import BigNav from '../components/big-nav'
import WorkList from '../components/work-list'
import Gallery from '../components/gallery'
import Modal from '../components/modal'
import HoverBox from '../components/hover-box'
import About from '../components/about'

import content from '../content.json'

const {home: homeContent, pages: allPages} = content
const {hrefRoot, 'pages-by-name': homePagesByName} = homeContent
const pages = allPages
  .map((name) => content[name])
  .filter((p) => p && p.href !== '/')

const projects = homeContent.pages.map((name) => ({
  ...homePagesByName[name],
  href: `${hrefRoot}/${name}`
}))

export default function Home (props) {
  return (
    <Main>
      <Hero title={content.title} subtitle={content.subtitle} />
      <BigNav pages={pages} />
      <WorkList hrefRoot={hrefRoot} projects={projects} />
      <Route
        path={`${hrefRoot}/:page/:image?`}
        component={ProjectModal}
      />
    </Main>
  )
}

function ProjectModal (props) {
  const {location: {search}, match: {url, params: {page, image}}} = props
  const showAbout = search.indexOf('about=true') > 0
  const pageContent = homePagesByName[page]
  const images = pageContent.gallery

  const backUrl = homeContent.href
  const baseUrl = `${hrefRoot}/${page}`
  const aboutUrl = !showAbout
    ? `${url}?about=true`
    : url

  return (
    <Modal back={backUrl}>
      <Gallery
        aboutUrl={aboutUrl}
        baseUrl={baseUrl}
        backUrl={backUrl}
        images={images}
        current={image}
      />
      <HoverBox show={showAbout}>
        <About {...pageContent} />
      </HoverBox>
    </Modal>
  )
}
