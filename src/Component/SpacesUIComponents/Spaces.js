import React from 'react'
import {Routes, Route, Link } from "react-router-dom"

import AllSpace from './AllSpace'
import AllQuestion from '../QuestionsUIComponents/AllQuestion'
import Upcoming from './Upcoming'
import Live from './Live'
// import Concluded from './Concluded'

import Tabs from '../SubComponents/Tabs'

import tutorImg from '../../images/tutor5.png'

export default function Spaces() {

  return (
  
    <div className="main-content">
        
      <div className="">
        <div className="px-4"> 
                {/* Header */}
                <h1 className="my-4 font-medium uppercase">Getting Started </h1>

                <div className="bg-white rounded-md relative overflow-hidden mb-12">
                    <img src={tutorImg} alt="class screenshot" className="w-full h-32 sm:h-48 object-cover"/>

                    <div className="grid grid-cols-12 p-2 absolute top-0 right-0 left-0 h-full bg-trans-black">

                        <div className="col-span-12 flex flex-col items-center">
                            <h3 className="text-white text-3xl font-extrabold ">
                                New to DevSpace?
                            </h3>
                            <div className="col-span-6 mt-8">
                                <Link to="/home/add-space" className="btn-indigo font-bold mt-6">Start Here</Link>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
        <div className="">
          <div className="px-4 py-2 uppercase flex flex-wrap">
            <Tabs />
          </div>

          
          <Routes>
              <Route path="" element={
                <AllSpace />
              } />

              <Route path="all-questions" element={
                <AllQuestion />
              } />

              <Route path="upcoming-spaces" element={
                <>
                  <Upcoming />
                </>
              } />

              <Route path="live-spaces" element={
                <>
                  <Live />
                </>
              } />

              {/* <Route path="concluded-spaces" element={
                <Concluded />
              } /> */}
            </Routes>
        </div>
      </div>
    </div>
  )
}
