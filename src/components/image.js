// image component
import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

const STYLE = 'mxh-100 w-100 h-100 obj-contain'

const isLoadedBySrc = {}

export default createReactClass({
  handleImageLoaded () {
    isLoadedBySrc[this.props.src] = true
  },

  render () {
    const {src, isCurrent} = this.props
    const isLoaded = isLoadedBySrc[src]

    if (isLoaded || isCurrent) {
      return (
        <img src={src} className={STYLE} />
      )
    }

    return (
      <div className={STYLE} />
    )
  }
})

Image.propTypes = {
  src: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired
}
