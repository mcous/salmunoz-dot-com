// bottom bar component
import React from 'react'

const STYLE = 'absolute w-100 left-0 bottom-0 bg-grad-bottom-bar'

export default function BottomBar (props) {
  return (
    <div className={STYLE}>
      {props.children}
    </div>
  )
}
