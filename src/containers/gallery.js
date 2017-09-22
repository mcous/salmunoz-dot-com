// gallery container
import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

import GalleryImages from '../components/gallery-images'

export default function Gallery (props) {
  const {images} = props

  return (
    <GalleryImages images={images} />
  )
}
