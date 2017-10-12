// centered hovering box
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const BASE_STYLE = 'shiftable w-90 mw6 h-100 mxh-80 pv4 overflow-hidden bg-white'
const CONTAINER_STYLE = 'overflow-scroll w-100 h-100 ph3 ph4-ns'

HoverBox.propTypes = {
  show: PropTypes.bool.isRequired
}

export default function HoverBox (props) {
  const style = classNames(BASE_STYLE, {'o-0 shift-down': !props.show})

  return (
    <div className={style}>
      <div className={CONTAINER_STYLE}>
        {props.children}
      </div>
    </div>
  )
}
