// SVG icons

import React from 'react'
import classNames from 'classnames'

const BASE_STYLE = 'dib v-ttop fcc'

// octicons v6.0.1 - https://octicons.github.com/
// SVG data used under the terms of https://github.com/primer/octicons/#license
const CHEVRON_LEFT_VB = '0 0 8 16'
const CHEVRON_LEFT_PATH = 'M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5z'

const CHEVRON_RIGHT_VB = '0 0 8 16'
const CHEVRON_RIGHT_PATH = 'M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3z'

const LINK_EXTERNAL_VB = '0 0 12 16'
const LINK_EXTERNAL_PATH = 'M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z'

const NOTE_VB = '0 0 14 16'
const NOTE_PATH = 'M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z'

const X_VB = '0 0 12 16'
const X_PATH = 'M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z'

function Icon (props) {
  const {viewBox} = props
  const style = classNames(BASE_STYLE, props.style)

  return (
    <svg version='1.1' aria-hidden='true' viewBox={viewBox} className={style}>
      <path fillRule='evenodd' d={props.path} />
    </svg>
  )
}

export function ChevronLeft (props) {
  return (
    <Icon viewBox={CHEVRON_LEFT_VB} path={CHEVRON_LEFT_PATH} {...props} />
  )
}

export function ChevronRight (props) {
  return (
    <Icon viewBox={CHEVRON_RIGHT_VB} path={CHEVRON_RIGHT_PATH} {...props} />
  )
}

export function LinkExternal (props) {
  return (
    <Icon viewBox={LINK_EXTERNAL_VB} path={LINK_EXTERNAL_PATH} {...props} />
  )
}

export function Note (props) {
  return (
    <Icon viewBox={NOTE_VB} path={NOTE_PATH} {...props} />
  )
}

export function X (props) {
  return (
    <Icon viewBox={X_VB} path={X_PATH} {...props} />
  )
}
