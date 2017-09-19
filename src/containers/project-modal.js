// modal component
import React from 'react'
import PropTypes from 'prop-types'

import Modal from '../components/modal'

export default function ProjectModal () {
  return (
    <Modal />
  )
}

ProjectModal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string
    }).isRequired
  }).isRequired
}
