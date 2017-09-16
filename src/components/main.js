// main content container
import React from 'react'

const STYLE = 'avenir mw9 pt5 center'

export default function Main (props) {
  const {children} = props

  return (
    <main className={STYLE}>
      {children}
    </main>
  )
}
