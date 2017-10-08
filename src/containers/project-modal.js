// modal component
import React from 'react'
import PropTypes from 'prop-types'

import Gallery from '../components/gallery'
import Modal from '../components/modal'

const IMAGES = [
  {
    "name": "julian",
    "src": "/images/femme/julian.jpg"
  },
  {
    "name": "julian-quote",
    "src": "/images/femme/julian-quote.png"
  },
  {
    "name": "venus",
    "src": "/images/femme/venus.jpg"
  },
  {
    "name": "venus-quote",
    "src": "/images/femme/venus-quote.png"
  },
  {
    "name": "sharmin",
    "src": "/images/femme/sharmin.jpg"
  },
  {
    "name": "sharmin-quote",
    "src": "/images/femme/sharmin-quote.png"
  }
]

export default function ProjectModal (props) {
  const {match: {url, params: {page, image}}} = props
  const backUrl = '/'
  const baseUrl = `/work/${page}`

  return (
    <Modal back={backUrl}>
      <Gallery
        url={url}
        baseUrl={baseUrl}
        backUrl={backUrl}
        images={IMAGES}
        current={image}
      />
    </Modal>
  )
}

ProjectModal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired,
      image: PropTypes.string
    }).isRequired
  }).isRequired
}
