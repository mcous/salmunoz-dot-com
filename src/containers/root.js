// root container
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import content from '../content.json'
import Home from './home'

export default function Root () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={content.home.href} component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
