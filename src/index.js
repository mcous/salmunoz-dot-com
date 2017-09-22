// client entry point
import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import './index.css'
import Root from './containers/root'

const renderRoot = () => render(
  (
    <AppContainer>
      <Root />
    </AppContainer>
  ),
  document.getElementById('root')
)

renderRoot()

if (module.hot) {
  module.hot.accept('./containers/root', () => renderRoot())
}
