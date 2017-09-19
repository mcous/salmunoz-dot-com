// root container
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './home'

export default function Root () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
