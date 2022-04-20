import React from "react"
import Welcome from "./Component/Welcome"

import { Switch, Route } from "react-router-dom"

export default function App() {

  return (
    <div className="">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  )
}
