import React, {useState} from "react"

import { sdk, bucketId } from "../../config"
// import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ImageContext = React.createContext()

function ImageContextProvider(props) {

    // will hold image data from fetching from api
    const [image, setImage] = useState({})

    // will hold list of image data from fetching from api
    const [imageList, setImageList] = useState({})

    // for redirecting users
    // const navigate = useNavigate()

    // handle signup events
    const uploadImage = async (file) => {
    
        console.log("uploading image...")
        // console.log("user input: ", data)
    
        try {
          const newImage = await sdk.storage.createFile( bucketId, "unique()", file)
          setImage(newImage)  

          toast.info("Uploading image...")
          
        }
        catch (error) {
          toast.error("Oops! An error occured while uploading")
          console.log(error)
        }
    }

    const getAllImages = async () => {
    
        try {
          const images = await sdk.storage.listFiles( bucketId )
          setImageList(images.files)  

          console.log("Images fetched")
          
        }
        catch (error) {
          toast.error("Oops! An error occured while fetching images")
          console.log(error)
        }
    }

    // handles image preview on the interface
    const getImagePreview = () => {

        // console.log(image['$id'])

        if(image['$id'] !== undefined) {
            return sdk.storage.getFilePreview(bucketId, image['$id'])
        } else {
            return ""
        }
        
    }

    const removeUploadedImage = async() => {

      try {
      
          if(image['$id'] !== undefined) {
              await sdk.storage.deleteFile(bucketId, image['$id'])
          }
              
          toast.success("Removing image...")
      }
      catch (error) {
        toast.error("Oops! An error occured removing image")
        console.log(error)
      }

    }

    const removeImageFromDatabase = async(id) => {

      try {
      
        if  (id !== undefined) {
            // delete image first
            await sdk.storage.deleteFile(bucketId, image['$id'])
            console.log("image is being removed from database...")
        }
              
      }
      catch (error) {
        console.log("Oops! An error occured while removing image from database")
        console.log(error)
      }

  }
    

    

    // pass user and fetchuser method to any child component of UserContext
      return (
        <>
          <ImageContext.Provider value={{image, imageList, uploadImage, getImagePreview, getAllImages, removeUploadedImage, removeImageFromDatabase, toast}}>
            {props.children}
          </ImageContext.Provider>
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

export {ImageContextProvider, ImageContext}