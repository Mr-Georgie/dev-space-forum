import React, { useState, useContext } from 'react'

import { SpaceContext } from '../UtilityComponents/SpaceContext'
import { UserContext } from '../UtilityComponents/UserContext'

export default function AddSpace() {

    const { createNewSpace } = useContext(SpaceContext)
    const { user } = useContext(UserContext)

    const [formData, setFormData] = useState({
        title: "",
        link: "",
        tags: "",
        date: "",
        time: "",
        about: ""
    })
    
    // update form user input state on change
    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
          host: user.name,
          created_at: Date.now()
        }))
    }

    return (
    
        <div className="main-content">
            
            <div className="">
                {/* form */}
                <form onSubmit={(event) => createNewSpace(formData, event)}>

                    <div className="space-y-6">
                        <div className="shrink-0">
                            {
                                false &&
                                <img className="w-full h-48 object-cover" 
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" 
                                    alt="space cover" 
                                />
                            }

                            {
                                true &&
                                <div className="bg-white relative overflow-hidden mb-12">
                                    <div className="w-full h-48 bg-slate-500"></div>
                                    <div className="flex justify-center items-center absolute top-0 right-0 left-0 h-full bg-trans-black">

                                        <div className="p-8">
                                            <h3 className="flex justify-center text-white text-3xl font-extrabold ">
                                                image preview
                                            </h3>
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                        <div className="flex justify-center">
                            <label className="block">
                                <span className="sr-only">Choose photo for this space</span>
                                <span className="flex justify-center text-sm font-medium text-slate-700 pb-1">Add cover Image</span>
                                <input type="file" className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100
                                "/>
                            </label>
                        </div>
                    </div>

                    <div className="p-4">
                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">Title</span>
                            <input type="text" name="title" onChange={handleChange} value={formData.title}
                                    className="mt-1 block w-full px-3 py-2 
                                  bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                                    required
                            />
                        </label>

                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="tags">Tags</span>
                            <input type="text" name="tags" onChange={handleChange} value={formData.tags}
                                    className="mt-1 block w-full px-3 py-2 
                                  bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500
                                    "
                                    required
                            />
                        </label>

                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="link">Link</span>
                            <input type="url" name="link" onChange={handleChange} value={formData.link}
                                    className="mt-1 block w-full px-3 py-2 
                                bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                            />
                        </label>

                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="date">Date</span>
                            <input type="date" name="date" onChange={handleChange} value={formData.date}
                                    className="mt-1 block w-full px-3 py-2 
                                bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                            />
                        </label>

                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="time">Time</span>
                            <input type="time" name="time" onChange={handleChange} value={formData.time}
                                    className="mt-1 block w-full px-3 py-2 
                                bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                            />
                        </label>

                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">About this space</span>
                            <textarea 
                                rows="10"
                                placeholder="What exactly will be discoursed during the space?"
                                name="about" 
                                onChange={handleChange} 
                                value={formData.about}
                                className="mt-1 block w-full px-3 py-2 
                                  bg-white border border-slate-300 rounded-md 
                                    text-sm shadow-sm placeholder-slate-400 
                                    focus:outline-none focus:border-sky-500 
                                    focus:ring-1 focus:ring-sky-500"
                                required
                            />
                        </label>

                        <div className="">
                            <button className="btn-indigo font-bold mt-6"> Create Space</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
