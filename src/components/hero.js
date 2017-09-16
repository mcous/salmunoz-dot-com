// hero component
import React from 'react'
import PropTypes from 'prop-types'

const STYLE = 'mb4'
const TITLE_STYLE = 'mv3 tc f3 f2-ns lh-title normal'
const SUBTITLE_STYLE = 'mv3 tc f5 lh-title'

export default function Hero (props) {
  const {title, subtitle} = props

  return (
    <div className={STYLE}>
      <h1 className={TITLE_STYLE}>{title}</h1>
      <p className={SUBTITLE_STYLE}>{subtitle}</p>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
