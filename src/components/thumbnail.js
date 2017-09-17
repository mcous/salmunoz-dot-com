// thumbnail component
import React from 'react'
import PropTypes from 'prop-types'

const STYLE = 'w-100 aspect-ratio aspect-ratio--1x1'
const CONTAINER_STYLE = 'dt h-100 link bg-center cover aspect-ratio--object'
const TEXT_STYLE = 'dtc pa3 f4 f5-ns b tracked lh-title v-mid tc white bg-black-20'

export default function Thumbnail (props) {
  const backgroundStyle = {backgroundImage: `url(${props.src})`}
  let text = null

  if (props.text) {
    text = (
      <p
        className={TEXT_STYLE}
        dangerouslySetInnerHTML={{__html: props.text}}
      />
    )
  }

  return (
    <div className={STYLE}>
      <span className={CONTAINER_STYLE} style={backgroundStyle}>{text}</span>
    </div>
  )
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string
}
