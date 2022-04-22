import React from 'react'
import Navbar from './SubComponents/Navbar'
// import Footer from './SubComponents/Footer'
import Main from './SubComponents/Main'

export default function Home() {
  return (
    <div className="app-style h-full relative">
      <Navbar />
      <Main />
    </div>
  )
}
