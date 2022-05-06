import React, { useState, useContext } from 'react'

import tutorImg from '../../images/tutor5.png'

import { QuestionContext } from '../UtilityComponents/QuestionContext'
// import { UserContext } from '../UtilityComponents/UserContext'

export default function AskAQuestion() {

    const { createNewQuestion } = useContext(QuestionContext)
    // const { user } = useContext(UserContext)

    const [formData, setFormData] = useState({
        title: "",
        comment: ""
    })
    
    // update form user input state on change
    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
          created_at: Date.now()
        }))
    }

    // console.log(formData)

    return (
    
        <div className="main-content">
            
            <div className="">
                {/* form */}
                <form onSubmit={(event) => createNewQuestion(event, formData)}>

                    <div className="bg-white relative overflow-hidden mb-8">
                        <div className="space-y-6">
                            <div className="shrink-0">
                                <img className="w-full h-48 object-cover" 
                                    src={tutorImg} 
                                    alt="space cover" 
                                />
                            </div>
                        </div>

                        <div className="p-2 absolute top-0 right-0 left-0 h-full bg-trans-black">

                            <div className="flex flex-col items-center justify-center">
                                <h3 className="text-white text-3xl font-extrabold ">
                                    Ask your question
                                </h3>
                                <div className="mt-8">
                                    <span className="text-white font-medium italic">
                                        Ask anything tech related...
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4">
                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">Title</span>
                            <input 
                                type="text" 
                                name="title" 
                                onChange={handleChange} 
                                value={formData.title}
                                placeholder="Write a short but descriptive title"
                                className="mt-1 block w-full px-3 py-2 
                                  bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                                required
                            />
                        </label>

                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">Comment</span>
                            <textarea 
                                placeholder="What exactly do you want to learn during the space?"
                                name="comment" 
                                onChange={handleChange} 
                                value={formData.comment}
                                className="mt-1 block w-full px-3 py-2 
                                  bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                                required
                            />
                        </label>

                        <div className="">
                            <button className="btn-indigo font-bold mt-6"> Post This Question</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
