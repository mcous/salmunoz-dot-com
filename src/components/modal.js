// modal component
import React from 'react'
import createReactClass from 'create-react-class'

const STYLE = 'fixed z-999 absolute--fill pa3 pa4-ns bg-black-50'

export default createReactClass({
  componentWillMount () {
    document.body.classList.add('overflow-hidden')
  },

  componentWillUnmount () {
    document.body.classList.remove('overflow-hidden')
  },

  render () {
    return (
      <div className={STYLE}>
        {this.props.children}
      </div>
    )
  }
})
