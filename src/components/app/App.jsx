import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { About } from '../about/About'
import { Home } from '../home/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
