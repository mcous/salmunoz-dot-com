// set of gallery images
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

import Image from './image'
import BottomBar from './bottom-bar'
import {ChevronLeft, ChevronRight, Note, X} from './icons'

const STYLE = 'w-100 h-100 tc'
const LIST_STYLE = 'list relative w-100 h-100 pl0 mt0'
const ITEM_STYLE_BASE = 'gallery-item absolute w-100 w-80-m w-50-l h-100'
const CONTROL_ICON_STYLE = `w-25 w-20-m h2 pv3 white`

const NO_SHIFT = ''
const SHIFT_RIGHT = 'shift-right'
const SHIFT_LEFT = 'shift-left'

Gallery.propTypes = {
  url: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  backUrl: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })).isRequired,
  current: PropTypes.string
}

export default function Gallery (props) {
  const {url, baseUrl, backUrl, images, current} = props
  const currentName = current || images[0].name

  const {children, next, previous} = makeGalleryImages(images, currentName)
  const aboutUrl = `${url}?about=true`
  const previousUrl = `${baseUrl}/${previous}`
  const nextUrl = `${baseUrl}/${next}`

  return (
    <div className={STYLE}>
      <ol className={LIST_STYLE}>
        {children}
      </ol>
      <BottomBar>
        <Link to={backUrl}>
          <X style={CONTROL_ICON_STYLE} />
        </Link>
        <Link to={aboutUrl}>
          <Note style={CONTROL_ICON_STYLE} />
        </Link>
        <Link to={previousUrl}>
          <ChevronLeft style={CONTROL_ICON_STYLE} />
        </Link>
        <Link to={nextUrl}>
          <ChevronRight style={CONTROL_ICON_STYLE} />
        </Link>
      </BottomBar>
    </div>
  )
}

function GalleryImage (props) {
  const {isCurrent, shift} = props
  const style = classNames(ITEM_STYLE_BASE, shift, {'o-0': !isCurrent})

  return (
    <li className={style}>
      <Image {...props} show={isCurrent || !!shift} />
    </li>
  )
}

function makeGalleryImages (images, currentName) {
  const lastIndex = images.length - 1

  return images.reduce((result, image, index) => {
    const {name} = image
    const isCurrent = name === currentName
    let shift = NO_SHIFT

    const leftSibling = index !== 0
      ? images[index - 1]
      : images[lastIndex]

    const rightSibling = index !== lastIndex
      ? images[index + 1]
      : images[0]

    if (leftSibling.name === currentName) {
      result.next = name
      shift = SHIFT_RIGHT
    } else if (rightSibling.name === currentName) {
      result.previous = name
      shift = SHIFT_LEFT
    }

    result.children.push(
      <GalleryImage {...image} key={name} isCurrent={isCurrent} shift={shift} />
    )

    return result
  }, {children: [], next: '', previous: ''})
}
