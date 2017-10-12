// title components
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const BASE_STYLE = 'lh-title normal'
const BASE_STYLE_BY_LEVEL = {
  1: `${BASE_STYLE} f3 f2-ns`,
  2: `${BASE_STYLE} f4`,
  3: `${BASE_STYLE}`,
  4: `${BASE_STYLE}`,
  5: `${BASE_STYLE}`,
  6: `${BASE_STYLE}`
}

Heading.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  html: PropTypes.string,
  style: PropTypes.string
}

export default function Heading (props) {
  const {level, html} = props
  const Tag = `h${level}`
  const style = classNames(BASE_STYLE_BY_LEVEL[level], props.style)

  if (html) {
    return (<Tag className={style} dangerouslySetInnerHTML={{__html: html}} />)
  }

  return (
    <Tag className={style}>
      {props.children}
    </Tag>
  )
}
