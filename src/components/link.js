// disablable link
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {Link as ReactRouterLink} from 'react-router-dom'

const BASE_STYLE = ''

Link.propTypes = {
  disable: PropTypes.bool
}

export default function Link (props) {
  const {disable} = props
  const style = classNames(BASE_STYLE, {'o-50 disabled': disable})
  const to = !disable
    ? props.to
    : '#'

  return (
    <ReactRouterLink to={to} className={style}>
      {props.children}
    </ReactRouterLink>
  )
}
