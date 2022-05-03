import React, {useState} from "react"

import { sdk } from "../../config"
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UserContext = React.createContext()

function UserContextProvider(props) {

    // will hold user data from fetching from api
    const [user, setUser] = useState({})

    // for redirecting users
    const navigate = useNavigate()

    // handle signup events
    const signUpUser = async (event, data) => {
        event.preventDefault()
    
        console.log("button clicked...")
        // console.log("user input: ", data)
    
        try {
          await sdk.account.create(
              'unique()', 
              data.email, 
              data.password, 
              'Georgie')
          
          await sdk.account.createSession(data.email, data.password)
    
          await sdk.account.createVerification('http://localhost:3000/home')
    
          toast.info("Verification email sent")
          
          navigate("/home")
        }
        catch (error) {
          toast.error("Oops! An error occured while signing up")
          console.log(error)
        }
    }

    const signUpWithGoogle = () => {
      sdk.account.createOAuth2Session(
        'google',
        'http://localhost:3000/home',
        'http://localhost:3000'
        );
    }

    const signUpWithGithub = () => {
      sdk.account.createOAuth2Session(
        'github',
        'http://localhost:3000/home',
        'http://localhost:3000'
      );
    }
    
    // function to get user data
    const fetchUserDetails = async () => {
      try {
        const data = await sdk.account.get()
        setUser(data)
        // console.log("data: ", data)
      }
      catch (error) {
        toast.error("Oops! An error occured while fetching user details")
        console.log(error)
      }
    }

    const loginUser = async (event, data) => {
        event.preventDefault()
    
        try {
        //   await sdk.account.createSession('thereactnewbie@gmail.com', 'password')
          await sdk.account.createSession(data.email, data.password)
    
          navigate('/home')
        }
        catch (error) {
          toast.error("Oops! An error occured while trying to login")
          console.log(error)
        }
    }

    const logOut = async() => {

      console.log("login out...")
      
      // checked if there is a logged in user
      if (Object.keys(user).length !== 0) {
        await sdk.account.deleteSession('current')
      } else {
        toast.warning("No user session was detected")
      }
      
  
      navigate('/')
    }

    // pass user and fetchuser method to any child component of UserContext
      return (
        <>
          <UserContext.Provider value={{user, signUpUser, signUpWithGithub, signUpWithGoogle, fetchUserDetails, loginUser, logOut, toast}}>
            {props.children}
          </UserContext.Provider>
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

export {UserContextProvider, UserContext}