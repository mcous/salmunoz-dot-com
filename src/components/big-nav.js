// big nav component
import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const STYLE = 'ma4 mh5-ns mh6-l'
const LIST_STYLE = 'list pl0 tc mw7 center'

const ITEM_STYLE_BASE = 'dib-ns w-third-ns'
const LINK_STYLE = 'link db pa3 f4 black dim'
const ACTIVE_LINK_STYLE = 'link db pa3 f4 black fw6'
const TITLE_STYLE = 'dn di-l'
const SHORT_TITLE_STYLE = 'di dn-l'

export default function BigNav (props) {
  return (
    <nav className={STYLE}>
      <ul className={LIST_STYLE}>
        {props.pages.map(BigNavLink)}
      </ul>
    </nav>
  )
}

function BigNavLink (props, index, collection) {
  const {href, title} = props
  const shortTitle = props.shortTitle || title
  const isntLast = index !== collection.length - 1

  const style = classNames(ITEM_STYLE_BASE, {
    'bb br-ns bb-0-ns b--black-30': isntLast
  })

  return (
    <li className={style} key={href}>
      <NavLink
        to={href}
        title={title}
        className={LINK_STYLE}
        activeClassName={ACTIVE_LINK_STYLE}
      >
        <span className={TITLE_STYLE}>{title}</span>
        <span className={SHORT_TITLE_STYLE}>{shortTitle}</span>
      </NavLink>
    </li>
  )
}

BigNav.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    shortTitle: PropTypes.string
  })).isRequired
}
