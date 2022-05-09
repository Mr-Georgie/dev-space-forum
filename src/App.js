// eslint-disable-next-line
import React, {useEffect} from "react"
import Welcome from "./Component/Welcome"
import Home from "./Component/Home"


import {Routes, Route } from "react-router-dom"
import { UserContextProvider } from "./Component/UtilityComponents/UserContext"
import { SpaceContextProvider } from './Component/UtilityComponents/SpaceContext'
import { QuestionContextProvider } from "./Component/UtilityComponents/QuestionContext"
import { ImageContextProvider } from './Component/UtilityComponents/ImageContext'

export default function App() {

  return (
    <div className="">
      <Routes>
        <Route exact path="/*" element={
          <UserContextProvider>
            <Welcome />
          </UserContextProvider>
        }>
        </Route>
        <Route path="/home/*" element={
          <UserContextProvider>
            <SpaceContextProvider>
              <QuestionContextProvider>
                <ImageContextProvider>
                  <Home />
                </ImageContextProvider>
              </QuestionContextProvider>
            </SpaceContextProvider>
          </UserContextProvider>
        }>
        </Route>
      </Routes>
    </div>
  )
}
