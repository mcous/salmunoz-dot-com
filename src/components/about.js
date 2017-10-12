// about component to describe a piece
import React from 'react'
import PropTypes from 'prop-types'

import Heading from './heading'

const TITLE_STYLE = 'mt0 mb3 mh3 tc'
const STATS_LIST_STYLE = 'list mv3 center pl0 f6 tc mid-gray'
const STATS_ITEM_STYLE = 'dib-ns ma2 mv0-ns'
const DESCRIPTION_STYLE = 'lh-copy ma3 mh4-ns f5'

About.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default function About (props) {
  const {title, stats, description} = props

  return (
    <div>
      <Heading level='2' style={TITLE_STYLE} html={title} />
      <ul className={STATS_LIST_STYLE}>
        {stats.map((stat, index) => (
          <li
            key={index}
            className={STATS_ITEM_STYLE}
            dangerouslySetInnerHTML={{__html: stat}}
          />
        ))}
      </ul>
      {description.map((paragraph, index) => (
        <p
          key={index}
          className={DESCRIPTION_STYLE}
          dangerouslySetInnerHTML={{__html: paragraph}}
        />
      ))}
    </div>
  )
}
