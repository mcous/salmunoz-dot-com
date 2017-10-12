// hero component
import React from 'react'
import PropTypes from 'prop-types'

import Heading from './heading'

const STYLE = 'mb4'
const TITLE_STYLE = 'mv3 tc'
const SUBTITLE_STYLE = 'mv3 tc f5 lh-title'

export default function Hero (props) {
  const {title, subtitle} = props

  return (
    <div className={STYLE}>
      <Heading level='1' style={TITLE_STYLE}>{title}</Heading>
      <p className={SUBTITLE_STYLE}>{subtitle}</p>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
