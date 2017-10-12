// bottom bar component
import React from 'react'
import classNames from 'classnames'

const BASE_STYLE = 'absolute w-100 left-0 bottom-0'

export default function BottomBar (props) {
  return (
    <div className={classNames(BASE_STYLE, props.style)}>
      {props.children}
    </div>
  )
}
