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

const {projects: projectsContent, pages: allPages} = content
const {href, 'pages-by-name': projectsPagesByName} = projectsContent
const pages = allPages
  .map((name) => content[name])
  .filter((p) => p)

const projects = projectsContent.pages.map((name) => ({
  ...projectsPagesByName[name],
  href: `${href}/${name}`
}))

export default function ProjectsPage (props) {
  return (
    <Main>
      <Hero title={content.title} subtitle={content.subtitle} />
      <BigNav pages={pages} />
      <WorkList hrefRoot={href} projects={projects} />
      <Route
        path={`${href}/:page/:image?`}
        component={ProjectModal}
      />
    </Main>
  )
}

function ProjectModal (props) {
  const {location: {search}, match: {url, params: {page, image}}} = props
  const showAbout = search.indexOf('about=true') > 0
  const pageContent = projectsPagesByName[page]
  const images = pageContent.gallery

  const backUrl = projectsContent.href
  const baseUrl = `${href}/${page}`
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
