// modal component
import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import {Link} from 'react-router-dom'

const STYLE = 'fixed z-999 absolute--fill pa3 pa4-l'
const BG_STYLE = 'db link absolute absolute--fill z-back bg-black-50'

const Modal = createReactClass({
  componentWillMount () {
    document.body.classList.add('overflow-hidden')
  },

  componentWillUnmount () {
    document.body.classList.remove('overflow-hidden')
  },

  render () {
    const {back} = this.props

    return (
      <div className={STYLE}>
        <Link to={back} className={BG_STYLE} />
        {this.props.children}
      </div>
    )
  }
})

Modal.propTypes = {
  back: PropTypes.string.isRequired
}

export default Modal
