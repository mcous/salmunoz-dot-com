// disablable link
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {Link as ReactRouterLink} from 'react-router-dom'

const BASE_STYLE = 'border-box'

Link.propTypes = {
  disable: PropTypes.bool,
  style: PropTypes.string
}

export default function Link (props) {
  const {disable} = props
  const style = classNames(BASE_STYLE, {'o-50 disabled': disable}, props.style)
  const to = !disable
    ? props.to
    : '#'

  return (
    <ReactRouterLink to={to} className={style}>
      {props.children}
    </ReactRouterLink>
  )
}
