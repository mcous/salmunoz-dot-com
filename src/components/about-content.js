// about page content
import React from 'react'

import Thumbnail from './thumbnail'
import Copy from './copy'

const IMAGE_CONTAINER_STYLE = 'pa3'
const IMAGE_STYLE = 'mw6 center'
const COPY_CONTAINER_STYLE = 'pa3'

export default function AboutContent (props) {
  return (
    <div>
      <div className={IMAGE_CONTAINER_STYLE}>
        <div className={IMAGE_STYLE}>
          <Thumbnail {...props.image} />
        </div>
      </div>
      <div className={COPY_CONTAINER_STYLE}>
        <Copy text={props.description} />
      </div>
    </div>
  )
}
