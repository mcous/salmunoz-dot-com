// about page container
import React from 'react'
// import {Route} from 'react-router-dom'

import Main from '../components/main'
import Hero from '../components/hero'
import BigNav from '../components/big-nav'
import AboutContent from '../components/about-content'

// const selectors = require('../selectors')
// const Page = require('../containers/page')
// const PageTitle = require('../components/page-title')
// const Thumbnail = require('../components/thumbnail')
// const SocialLinks = require('../components/social-links')
// const Copy = require('../components/copy')
// const ImageModal = require('../components/modal/image')

import content from '../content.json'

const {about: aboutContent, pages: allPages} = content
const pages = allPages
  .map((name) => content[name])
  .filter((p) => p)

export default function AboutPage (props) {
  return (
    <Main>
      <Hero title={content.title} subtitle={content.subtitle} />
      <BigNav pages={pages} />
      <AboutContent {...aboutContent} />
    </Main>
  )
}

// module.exports = function About (state, prev, send) {
//   const imageZoomed = selectors.getImageZoomed(state)
//   const content = state.content.about
//   const image = content.image
//   const socials = content.socials
//   const description = content.description
//
//   const el = Page(state, prev, send, [
//     PageTitle({title: content.title}),
//     html`
//       <div class='w-100 w-50-ns w-30-l center mt4 ph3'>
//         ${Thumbnail({
//           src: image.thumb,
//           title: image.title,
//           href: `${content.href}/${image.name}`
//         })}
//       </div>`,
//     SocialLinks({links: socials}),
//     Copy({text: description, style: 'mh3 mh5-m mh7-l'})
//   ])
//
//   if (imageZoomed) {
//     el.appendChild(ImageModal({
//       images: [extend(image, {show: true})],
//       back: content.href
//     }))
//   }
//
//   return el
// }
