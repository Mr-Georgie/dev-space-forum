import React, { 
    useContext, 
    useEffect 
} from 'react'

import { QuestionContext } from '../UtilityComponents/QuestionContext'
import { UserContext } from '../UtilityComponents/UserContext'
import { SpaceContext } from '../UtilityComponents/SpaceContext'

import { useParams } from "react-router-dom"

export default function ViewQuestion() {

    let { Id } = useParams()

    const { fetchQuestionById, question, deleteQuestion, updateQuestion } = useContext(QuestionContext)
    const { createNewSpace } = useContext(SpaceContext)
    const { user, toast } = useContext(UserContext)

    useEffect(() => {
        fetchQuestionById(Id)
    }, [])

    const questionHandler = (action) => {

        if (action === "join"){
            let {...cardData} = question
        
            if (cardData.participants.includes(user['$id'])) {
                toast.info("You've joined already")
            } else {
                cardData.participants.push(user['$id'])
                toast.info("You've Joined!")
                updateQuestion( cardData, question['$id'] )
            }
        } else {
            let {...cardData} = question
            
            if(cardData.host !== null){
                toast.info("Oops! This question already has a host")
            } else {
                // add current logged in user name as host
                cardData.host = user.name
        
                // update question ducment
                updateQuestion( cardData, question['$id'] )
        
                // destructure comment out of the card data
                let { $id ,comment, ...dataForSpace} = cardData
        
                // include the created_at required attribute for space collection 
                dataForSpace.created_at = Date.now()
        
                // create new space with the question
                createNewSpace(dataForSpace)
            }
        }
        
      }


    return (
    
        <div className="main-content">
            <div className="">

                <div className="space-y-6">
                    <div className="shrink-0">
                        
                        <img className="w-full h-48 object-cover" 
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" 
                            alt="space cover" 
                        />
                            
                    </div>
                </div>
                <div className="p-4">
                    <label className="block py-2">
                        <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">Title</span>
                        <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">{question.title}</span>
                    </label>

                    <label className="block py-2">
                        <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="time">Comment</span>
                        <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="time">{question.comment}</span>
                    </label>

                    <label className="block py-2">
                        <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="time">Participants</span>
                        <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="time">
                            {
                                question['participants'] !== undefined &&
                                question['participants'].length
                            }
                        </span>
                    </label>

                    <div className="flex items-center gap-10">
                        {
                            /**
                             * each document in questions collection has a '$read' attribute that holds the document creator id as e.g user:94i9dkf944fk9f
                             * use this to allow only question creator to delete question document
                             */
                            question['$read'] !== undefined && // check if questions has been fetched from database and if it has a read attribute
                            question['$read'][0].split(":")[1] === user['$id'] && // check if the creator of question is the current logged in user
                            <div className="mt-3" onClick={() => deleteQuestion(Id)}>
                                <button className="btn-red font-bold"> Delete</button>
                            </div>
                            
                        }
                        <span
                            onClick={() => questionHandler("host")} 
                            className="flex items-center gap-2 btn-indigo cursor-pointer mt-3"
                        >
                            <span className="">Host</span> 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <span
                            onClick={() => questionHandler("join")} 
                            className="flex items-center gap-2 btn-pink cursor-pointer mt-3"
                        >
                            <span className="">Join</span> 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                        </span>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
