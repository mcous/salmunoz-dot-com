// generic left-aligned copy paragraph
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const STYLE = 'lh-copy measure center'

Copy.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default function Copy (props) {
  const className = cx(STYLE, props.className)

  return (
    <p
      className={className}
      dangerouslySetInnerHTML={{__html: props.text}}
    />
  )
}
