// modal component
import React from 'react'
import PropTypes from 'prop-types'

import Gallery from './gallery'
import Modal from '../components/modal'

const IMAGES = [
  {src: '/images/femme/alok.jpg', isCurrent: true}
]

export default function ProjectModal (props) {
  return (
    <Modal back='/'>
      <Gallery images={IMAGES} />
    </Modal>
  )
}

ProjectModal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string
    }).isRequired
  }).isRequired
}
