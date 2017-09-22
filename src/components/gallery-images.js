// set of gallery images
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Image from './image'

const STYLE = 'list absolute absolute--center pl0 mv0 tc pe-none '
const ITEM_STYLE_BASE = ''

export default function GalleryImages (props) {
  const {images} = props

  return (
    <ol className={STYLE}>
      {images.map(GalleryImage)}
    </ol>
  )
}

function GalleryImage (props) {
  const {src, isCurrent, shift} = props

  const style = classNames(ITEM_STYLE_BASE, {
    [`shift-${shift}`]: shift
  })

  return (
    <li className={style}>
      <Image src={src} isCurrent={isCurrent} />
    </li>
  )
}

GalleryImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    isCurrent: PropTypes.bool.isRequired,
    shift: PropTypes.oneOf(['left', 'right'])
  }))
}
