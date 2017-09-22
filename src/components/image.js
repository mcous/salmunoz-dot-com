// image component
import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'

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
        <img src={src} />
      )
    }

    return (
      <div />
    )
  }
})

Image.propTypes = {
  src: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired
}
