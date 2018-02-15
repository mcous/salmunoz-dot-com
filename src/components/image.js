// image component
import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import classNames from 'classnames'
import rafDebounce from '@f/raf-debounce'

import {LinkExternal} from './icons'

const STYLE = 'relative w-100 h-100 hide-child'
const BASE_STYLE = 'absolute absolute--center mxh-100 obj-contain'
const EXTERNAL_LINK_STYLE = 'db absolute na2 pa3 w3 h3 white-70'
const EXTERNAL_LINK_ICON_STYLE = 'w-100 h-100 child-l'

const isLoadedBySrc = {}

const Image = createReactClass({
  $ (selector) {
    return this.refs.$self.querySelector(selector)
  },

  size () {
    const {$self} = this.refs

    return {width: $self.offsetWidth, height: $self.offsetHeight}
  },

  handleImageLoaded () {
    isLoadedBySrc[this.props.src] = true
    this.handleExternalLinkPosition()
  },

  listenToResize () {
    if (typeof window !== 'undefined' && !this._onResize) {
      this._onResize = rafDebounce(this.handleExternalLinkPosition)
      window.addEventListener('resize', this._onResize)
    }
  },

  unlistenToResize () {
    if (typeof window !== 'undefined' && this._onResize) {
      window.removeEventListener('resize', this._onResize)
      this._onResize = null
    }
  },

  handleExternalLinkPosition () {
    const {show, link} = this.props

    if (show && link) {
      const $link = this.$('a')
      const $image = this.$('img')
      const {width, height} = this.size()
      const {offsetWidth: imageWidth, offsetWidth: imageHeight} = $image

      $link.style.top = `${(height - imageHeight) / 2}px`
      $link.style.right = `${(width - imageWidth) / 2}px`
      this.listenToResize()
    } else {
      this.unlistenToResize()
    }
  },

  componentDidUpdate () {
    this.handleExternalLinkPosition()
  },

  componentWillUnmount () {
    this.unlistenToResize()
  },

  render () {
    const {src, name, show, link, linkTitle} = this.props

    const isLoaded = isLoadedBySrc[src]
    const style = classNames(BASE_STYLE, {'dn': !show})
    const onLoad = this.handleImageLoaded

    const image = (isLoaded || show)
      ? (<img src={src} title={name} onLoad={onLoad} className={style} />)
      : (<div className={style} />)

    const externalLink = show && link
      ? (<ExternalLink link={link} title={linkTitle} />)
      : null

    return (
      <div className={STYLE} ref='$self'>
        {image}
        {externalLink}
      </div>
    )
  }
})

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  linkTitle: PropTypes.string,
  link: PropTypes.string
}

function ExternalLink (props) {
  const {link, title} = props

  return (
    <a
      href={link}
      title={title}
      target='_blank'
      className={EXTERNAL_LINK_STYLE}
    >
      <LinkExternal style={EXTERNAL_LINK_ICON_STYLE} />
    </a>
  )
}

export default Image
