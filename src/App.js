import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Week } from './Pages/Week'
import { Day } from './Pages/Day'
import { Month } from './Pages/Month'
import { Navbar } from './Components/Navbar'


export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Week />
          </Route>
          <Route path="/month" exact>
            <Month />
          </Route>
          <Route path="/day" exact>
            <Day />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
