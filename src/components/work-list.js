// work list component
import React from 'react'
import PropTypes from 'prop-types'

import Thumbnail from './thumbnail'

const STYLE = 'mv4'
const LIST_STYLE = 'list pl0 ph4-ns cf'

const LIST_ITEM_STYLE = 'fl w-100 w-50-ns w-third-l ph4 pv3 pa3-ns pa4-l'

export default function WorkList (props) {
  const {projects} = props

  return (
    <div className={STYLE}>
      <ul className={LIST_STYLE}>
        {projects.map(WorkItem)}
      </ul>
    </div>
  )
}

function WorkItem (props) {
  const {name, thumbnail, title} = props

  return (
    <li className={LIST_ITEM_STYLE} key={name}>
      <a href='#'>
        <Thumbnail src={thumbnail} text={title} />
      </a>
    </li>
  )
}

WorkList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  })).isRequired
}
