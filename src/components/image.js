// image component
import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import classNames from 'classnames'

const BASE_STYLE = 'mxh-100 w-100 h-100 obj-contain'

const isLoadedBySrc = {}

const Image = createReactClass({
  handleImageLoaded () {
    isLoadedBySrc[this.props.src] = true
  },

  render () {
    const {src, name, show} = this.props
    const isLoaded = isLoadedBySrc[src]
    const style = classNames(BASE_STYLE, {'dn': !show})

    if (isLoaded || show) {
      return (
        <img
          src={src}
          title={name}
          onLoad={this.handleImageLoaded}
          className={style}
        />
      )
    }

    return (
      <div className={style} />
    )
  }
})

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired
}

export default Image
