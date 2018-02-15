// root container
import React from 'react'
import {Redirect, BrowserRouter, Switch, Route} from 'react-router-dom'

import content from '../content.json'
import Projects from './projects'
import About from './about'

export default function Root () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() => (
          <Redirect to={content.defaultPage} />)
        } />
        <Route path={content.projects.href} component={Projects} />
        <Route path={content.about.href} component={About} />
      </Switch>
    </BrowserRouter>
  )
}
