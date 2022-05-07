import React, { useState } from "react"

import LeftContent from "./WelcomeComponents/LeftContent"
import Login from "./WelcomeComponents/Login"
import SignUp from "./WelcomeComponents/SignUp"

import {Routes, Route } from "react-router-dom"

export default function Welcome() {
    /**
     * This welcome component will show for unauthenticated users
     */

     const [ close, setClose ] = useState(false)

     const toggleClose = () => {
        setClose(prevState => !prevState)
     }

    return (
        <div className="flex h-screen">
            
            <LeftContent close={close} toggle={toggleClose}/>
            
            <Routes>
                <Route path="" element={
                    <Login close={close}/>
                } />

                <Route path="signup" element={
                    <SignUp close={close}/>
                } />
            </Routes>
        </div>
    )
}
