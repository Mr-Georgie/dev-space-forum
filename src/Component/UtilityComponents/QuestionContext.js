import React, {useState} from "react"

import { sdk, questionsCollectionId } from "../../config"
// eslint-disable-next-line
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const QuestionContext = React.createContext()

function QuestionContextProvider(props) {

    const navigate = useNavigate()

    // will hold user data from fetching from api
    const [questions, setQuestions] = useState({})

    // for individual space
    const [question, setQuestion] = useState({})
    
    // function to get user data
    const fetchQuestions = async () => {
      try {
        const data = await sdk.database.listDocuments(questionsCollectionId)
        setQuestions(data)
        // console.log("spaces: ", data.documents)
      }
      catch (error) {
        console.log("Oops! An error occured while fetching questions")
        console.log(error)
      }
    }

    const fetchQuestionById = async (documentId) => {
        try {
            const data = await sdk.database.getDocument(questionsCollectionId, documentId)
            setQuestion(data)
            return data
            //   console.log("space: ", data)
        }
        catch (error) {
            toast.error("Oops! An error occured while fetching this question")
            console.log(error)
        }
      }

    const createNewQuestion = async (event, formData) => {
        event.preventDefault()
    
        console.log("about to create question")
        console.log("form data: ", formData)

        try {
        
            const data = await sdk.database.createDocument(
                questionsCollectionId, // collectionID 
                'unique()', // auto generate ID for each space
                formData
            )
            console.log(data)
            toast.success("Question created successfully")

            fetchQuestions()

            setTimeout(() => {
              navigate(`/home/question/${data['$id']}`)
            }, 5000)

        }
        catch (error) {
          toast.error("Oops! An error creating new question")
          console.log(error)
        }
    }

    const updateQuestion = async ( data, documentId ) => {  
    
      console.log("about to update question")
      console.log("form data: ", data)

      try {
        
            await sdk.database.updateDocument(
                questionsCollectionId, // collectionID 
                documentId, // auto generate ID for each space
                data
            )
                
            toast.success("Question updated successfully")

            fetchQuestions()
        }
        catch (error) {
          toast.error("Oops! An error updating this question")
          console.log(error)
        }
    }

    const deleteQuestion = async (documentId) => {
    
        console.log("about to delete space")

        try {
        
            await sdk.database.deleteDocument(
                questionsCollectionId, // collectionID 
                documentId, // auto generate ID for each space
            )
                
            toast.success("Question deleted successfully")

            fetchQuestions()

            navigate('/home')
        }
        catch (error) {
          toast.error("Oops! An error deleting this question")
          console.log(error)
        }
    }

    // pass user and fetchuser method to any child component of UserContext
      return (
        <>
          <QuestionContext.Provider value={{question, questions, createNewQuestion, fetchQuestions, fetchQuestionById, updateQuestion, deleteQuestion, toast}}>
            {props.children}
          </QuestionContext.Provider>

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

export {QuestionContextProvider, QuestionContext}