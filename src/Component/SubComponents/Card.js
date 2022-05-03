import React, {useContext } from 'react'
// import img1 from '../../images/card-img1.png'

import { UserContext } from '../UtilityComponents/UserContext'
import { SpaceContext } from '../UtilityComponents/SpaceContext'
import { QuestionContext } from '../UtilityComponents/QuestionContext'
import { Link } from 'react-router-dom'

export default function Card(props) {

  const { user, toast } = useContext(UserContext)
  const { updateSpace, createNewSpace } = useContext(SpaceContext)
  const { updateQuestion } = useContext(QuestionContext)
  
  // convert a space tag to an array of tag
  const tags = props.tags ? props.tags.split(",") : []

  // add style to each space tag
  const tagsElement = tags.map(( tag, index ) => {
    return (
      <span key={index} className="bg-gray-200 text-black font-semibold rounded-lg px-2 py-1 mx-1"> {tag} </span>
    )
  })

  const questionHandler = (action) => {

    if (action === "join"){
      let {id, is_question, ...cardData} = props

      if (cardData.participants.includes(user['$id'])) {
        toast.info("You've joined already")
      } else {
        cardData.participants.push(user['$id'])
        toast.info("You've Joined!")
        updateQuestion( cardData, props.id )
      }
    } else {
      let {id, is_question, ...cardData} = props
      
      if(cardData.host !== null){
        toast.info("Oops! This question already has a host")
      } else {
        // add current logged in user name as host
        cardData.host = user.name

        // update question ducment
        updateQuestion( cardData, props.id )

        // destructure comment out of the card data
        let { comment, ...dataForSpace} = cardData

        // include the created_at required attribute for space collection 
        dataForSpace.created_at = Date.now()

        // create new space with the question
        createNewSpace(dataForSpace)
      }
    }
    
  }
  
  const spaceHandler = (action) => {

    if (action === "join"){
      let {id, is_question, ...cardData} = props

      if (cardData.participants.includes(user['$id'])) {
        toast.info("You've joined already")
      } else {
        cardData.participants.push(user['$id'])
        toast.info("You've Joined!")
        updateSpace( cardData, props.id )
      }
    } else {
      let {id, is_question, ...cardData} = props
      
      if(cardData.host !== null){
        toast.info("Oops! This space already has a host")
      } else {
        cardData.host = user.name

        toast.info("Host button clicked")

        updateSpace( cardData, props.id )
      }
      
    }
  }

  return (
    <>
      {/* ---------------------------------- UI for spaces in card -------------------------------------- */}
      { 
        !props.is_question &&

        <div className=" grid grid-cols-12 gap-4 px-5 py-7">

          {/* ---------- open ----------- */}
          <div className="col-span-7">
            <div className="group flex items-center space-x-4 mb-4">

              {/* --------- user image ---------- */}
              <img className="shrink-0 h-12 w-12 rounded-full" 
                src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" 
                alt="" 
              />

              {/* --------- user name ---------- */}
              <div className="ltr:ml-3 rtl:mr-3">
                <p className="text-sm font-medium text-slate-300 group-hover:text-white">{props.host === null ? "No host yet" : `${props.host} is Hosting this space`}</p>
                <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">Director of Operations</p>
              </div>


            </div>     
            <Link to={`/home/view-space/${props.id}`} className="flex flex-col text-normal cursor-pointer">
              <span className="font-bold">{props.title}</span>
              {/* <span className="">Created by: Georgie</span> */}
              <span className="About"> {props.about === null ? "Information about this space will be added by the space host": props.about}</span>   
            </Link>
          </div> 
          {/* ---------- close ----------- */}

          {/* ---------- open ----------- */}
          <Link to={`/home/view-space/${props.id}`}  className="flex justify-center items-center col-span-5">
            <img 
              src="https://cdn.pixabay.com/photo/2020/04/04/03/42/chat-5000695_960_720.png" 
              alt="space screenshot" 
              className="w-full object-cover rounded-md h-32"/>
          </Link>
          {/* ---------- close ----------- */}

          {/* ---------- open ----------- */}
          <div className="col-span-12">
            <div className="flex items-center gap-4 text-xs">
              <span className="bg-orange-50 text-black font-semibold rounded-lg px-2 py-1 mx-1">
                {
                  props.participants.length === 0 ? 
                  "No one has booked space yet"
                  : `Participants: ${props.participants.length}`
                }
              </span>
              <span className="tags">
                { props.tags && tagsElement }
              </span>
              <span className="font-bold time">{props.duration === null ? "Not specified yet": props.duration}</span>
            </div>
          </div> 
          {/* ---------- close ----------- */}

          {/* ---------- open ----------- */}
          <div className="col-span-12">
            <div className="flex items-center gap-4 text-xs">
              {/* ---------- Join button ------------- */}
                <span 
                  onClick={() => spaceHandler("join")}
                  className="flex items-center gap-2 btn-pink py-1 cursor-pointer"
                >
                  <span className="">Join</span> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </span>
              {/* ---------- Host button ------------- */}
              {
                /**
                     * Check if this question has been hosted
                     */
                props.host === null &&
                <span
                  onClick={() => spaceHandler("host")} 
                  className="flex items-center gap-2 btn-indigo py-1 cursor-pointer"
                >
                  <span className="">Host</span> 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </span>
              }
                
            </div>
          </div> 
          {/* ---------- close ----------- */}


        </div>
      }

      {/* ---------------------------------- UI for questions in card -------------------------------------- */}
      {
        props.is_question &&
        <div className=" grid grid-cols-12 gap-4 px-5 py-7">   
            <div className="col-span-7">

                <div className="group flex items-center space-x-4 mb-4">
                    <img className="shrink-0 h-12 w-12 rounded-full" 
                    src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" 
                    alt="" 
                    />
                    <div className="ltr:ml-3 rtl:mr-3">
                    <p className="text-sm font-medium text-slate-300 group-hover:text-white">{props.host === null ? "No host yet" : `${props.host} is Hosting this space`}</p>
                    <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">Director of Operations</p>
                    </div>
                </div>

                <Link to={`/home/view-space/${props.id}`} className="flex flex-col text-normal cursor-pointer">
                    <span className="font-bold">{props.title}</span>
                    {/* <span className="">Created by: Georgie</span> */}
                    <span className="About"> {props.comment === null ? "Information about this space will be added by the space host": props.comment}</span>   
                </Link>

            </div>

            <Link to={`/home/view-space/${props.id}`}  className="flex justify-center items-center col-span-5">
              <img 
                src="https://cdn.pixabay.com/photo/2014/09/27/13/46/question-mark-463497_960_720.jpg" 
                alt="space screenshot" 
                className="w-full object-cover rounded-md h-32"/>
            </Link>


            <div className="col-span-12">
              <div className="flex items-center gap-4 text-xs">
                <span className="bg-orange-50 text-black font-semibold rounded-lg px-2 py-1 mx-1">
                  {
                    props.participants.length === 0 ? 
                    "No one has booked space yet"
                    : `Participants: ${props.participants.length}`
                  }
                </span>
              </div>
            </div>

            <div className="col-span-12">
                <div className="flex items-center gap-4 text-xs">
                  {/* ------------------- Join button -------------------- */}

                    <span 
                        onClick={() => questionHandler("join")}
                        className="flex items-center gap-2 btn-pink py-1 cursor-pointer"
                    >
                        <span className="">Join</span> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                    </span>

                  {/* --------------------- Host button ----------------------- */}
                  {
                    /**
                     * Check if this question has been hosted
                     */
                     props.host === null &&
                      <span
                          onClick={() => questionHandler("host")} 
                          className="flex items-center gap-2 btn-indigo py-1 cursor-pointer"
                      >
                          <span className="">Host</span> 
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                      </span>
                  }
                  

                </div>
            </div>

        </div>
      }
    </>
  )
}