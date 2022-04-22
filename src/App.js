import React from "react"
import Welcome from "./Component/Welcome"
import Home from "./Component/Home"

import { Switch, Route } from "react-router-dom"

export default function App() {

  return (
    <div className="">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
