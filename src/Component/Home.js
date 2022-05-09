import React, { useContext, useEffect} from 'react'
import {Routes, Route } from "react-router-dom"

// utilities
import { UserContext } from './UtilityComponents/UserContext'
import { SpaceContext } from './UtilityComponents/SpaceContext'
import { QuestionContext } from './UtilityComponents/QuestionContext'
// import { ImageContext } from './UtilityComponents/ImageContext'

import UserProfile from './UserProfile'
// subcomponents
import Navbar from './SubComponents/Navbar'
import LeftSidebar from './SubComponents/LeftSidebar'
import RightSidebar from './SubComponents/RightSidebar'
import AddSpace from './SpacesUIComponents/AddSpace'
import EditSpace from './SpacesUIComponents/EditSpace'
import ViewSpace from './SpacesUIComponents/ViewSpace'
import Spaces from './SpacesUIComponents/Spaces'

import AskAQuestion from './QuestionsUIComponents/AskAQuestion'
import ViewQuestion from './QuestionsUIComponents/ViewQuestion'

export default function Home() {

  const {user, fetchUserDetails } = useContext(UserContext)

  // 
  const { fetchSpaces } = useContext(SpaceContext)
  // 
  const { fetchQuestions } = useContext(QuestionContext)

  // const { getAllImages } = useContext(ImageContext)


  useEffect(() => {
    fetchUserDetails()
    fetchSpaces()
    fetchQuestions()
    // getAllImages()

  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className="app-style h-full relative">
      <Navbar user={user}/>
      
        <main>
          <div className="mt-8 flex flex-col-reverse
                sm:mt-10 
                md:mt-12
                xl:grid xl:grid-cols-12"
          >   
            
            <LeftSidebar />
            

            <Routes>
              <Route path="/*" element={
                <Spaces />
              } />

              <Route path="view-space/:Id" element={
                <ViewSpace />
              } />

              <Route path="question/:Id" element={
                <ViewQuestion />
              } />

              <Route path="edit-space" element={
                <EditSpace />
              } />

              <Route path="add-space" element={
                  <AddSpace />
              } />

              <Route path="ask-a-question" element={
                <AskAQuestion />
              } />

              <Route path="/user-profile" element={
                <UserProfile />
              } />

            </Routes>      
              
            <RightSidebar />  

          </div>
        </main>
    </div>
  )
}
