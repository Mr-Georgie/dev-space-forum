import React, {useState} from "react"

import { sdk, collectionId } from "../../config"
// eslint-disable-next-line
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SpaceContext = React.createContext()

function SpaceContextProvider(props) {

    const navigate = useNavigate()

    // will hold user data from fetching from api
    const [spaces, setSpaces] = useState({})

    // for individual space
    const [space, setSpace] = useState({})
    
    // function to get user data
    const fetchSpaces = async () => {
      try {
        const data = await sdk.database.listDocuments(collectionId)
        setSpaces(data)
        return data
        // console.log("spaces: ", data.documents)
      }
      catch (error) {
        toast.error("Oops! An error occured while fetching spaces")
        console.log(error)
      }
    }

    const fetchSpaceById = async (documentId) => {
        try {
            const data = await sdk.database.getDocument(collectionId, documentId)
            setSpace(data)
            //   console.log("space: ", data)
        }
        catch (error) {
            toast.error("Oops! An error occured while fetching spaces")
            console.log(error)
        }
      }

    const createNewSpace = async ( formData, event) => {
        
      if (event !== undefined){
        event.preventDefault()
      } else {
        console.log("event is: ", event)
      }
 
      console.log("about to create space")
      console.log("form data: ", formData)

      try {
      
          const data = await sdk.database.createDocument(
              collectionId, // collectionID 
              'unique()', // auto generate ID for each space
              formData
          )
              
          toast.success("Space created successfully")
          fetchSpaces()
          navigate(`/home/view-space/${data['$id']}`)
      }
      catch (error) {
        toast.error("Oops! An error creating new space")
        console.log(error)
      }
    }

    const updateSpace = async ( data, documentId, event) => {  

      // check if this function was called from a form and event was passed to it
      // prevent default behaviour of form to reload page

      if (event !== undefined){
        event.preventDefault()
      } else {
        console.log("event is: ", event)
      }
      
    
      console.log("about to update space")
      console.log("form data: ", data)

      try {
        
            await sdk.database.updateDocument(
                collectionId, // collectionID 
                documentId, // auto generate ID for each space
                data
            )
                
            toast.success("Space updated successfully")

            fetchSpaces()

            navigate(`/home/view-space/${documentId}`)
        }
        catch (error) {
          toast.error("Oops! An error updating new space")
          console.log(error)
        }
    }

    const deleteSpace = async (documentId) => {
    
        console.log("about to delete space")

        try {
        
            await sdk.database.deleteDocument(
                collectionId, // collectionID 
                documentId, // auto generate ID for each space
            )
                
            toast.success("Space deleted successfully")

            fetchSpaces()

            navigate('/home')
        }
        catch (error) {
          toast.error("Oops! An error deleting new space")
          console.log(error)
        }
    }

    // pass user and fetchuser method to any child component of UserContext
      return (
        <>
          <SpaceContext.Provider value={{space, spaces, createNewSpace, fetchSpaces, fetchSpaceById, updateSpace, deleteSpace, toast}}>
            {props.children}
          </SpaceContext.Provider>

          {/* this react toastify component specifies the components ui*/}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
    )
}

export {SpaceContextProvider, SpaceContext}