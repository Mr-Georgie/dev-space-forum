import React, { 
    useContext, 
    useEffect 
} from 'react'

import { SpaceContext } from '../UtilityComponents/SpaceContext'
import { UserContext } from '../UtilityComponents/UserContext'

import { Link, useParams } from "react-router-dom"

export default function ViewSpace() {

    let { Id } = useParams()

    const { fetchSpaceById, space, deleteSpace, updateSpace } = useContext(SpaceContext)
    const { user, toast } = useContext(UserContext)

    useEffect(() => {
        fetchSpaceById(Id)
    }, [])

    const spaceHandler = () => {

        let {...cardData} = space
        
        if (cardData.participants.includes(user['$id'])) {
            toast.info("You've joined already")
        } else {
            cardData.participants.push(user['$id'])
            toast.info("You've Joined!")
            updateSpace( cardData, space['$id'] )
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
                    { 
                        space.host === user.name ?
                        <label className="flex flex-col items-center py-2 border-b">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">
                                You're the host of this space!
                            </span>
                            <span>
                                Make sure to edit it so that community members finds it interesting
                            </span>
                        </label>
                        :
                        <label className="flex flex-col items-center py-2 border-b">
                            <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="title">
                                You've joined this space!
                            </span>
                            <span>
                                Here are details about this space
                            </span>
                        </label>
                    }
                    
                    <label className="block py-2 mt-4">
                        <span className="block text-sm font-medium text-slate-500 pb-1" htmlFor="title">Title</span>
                        <span className="block text-lg text-slate-700 pb-1" htmlFor="title">{space.title}</span>
                    </label>

                    <div className="flex flex-col lg:flex-row lg:gap-28">
                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-500 pb-1" htmlFor="tags">Tags</span>
                            <span className="block text-md text-slate-700 pb-1" htmlFor="tags">
                                {
                                    space.host === user.name ?
                                        space.tags === null ?
                                        <span className="text-red-700 font-medium text-sm">Please click on edit space to add tag *</span>
                                        :
                                        space.tags
                                    :
                                    <span className="text-slate-400 font-medium text-sm">The host is yet to add this detail</span>
                                }
                                
                            </span>
                        </label>

                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-500 pb-1" htmlFor="link">Link</span>
                            <span className="block text-md text-slate-700 pb-1" htmlFor="link">
                                {
                                    space.host === user.name ?
                                        space.link === null ?
                                        <span className="text-red-700 font-medium text-sm">Please click on edit space to add link *</span>
                                        :
                                        <a href={space.link} className="text-blue-400">{space.link}</a>
                                    :
                                    <span className="text-slate-400 font-medium text-sm">The host is yet to add this detail</span>
                                }
                            </span>
                        </label>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:gap-28">
                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-500 pb-1" htmlFor="date">Date</span>
                            <span className="block text-md text-slate-700 pb-1" htmlFor="date">
                                {
                                    space.host === user.name ?
                                        space.date === null ?
                                        <span className="text-red-700 font-medium text-sm">Please click on edit to add date *</span>
                                        :
                                        space.date
                                    :
                                    <span className="text-slate-400 font-medium text-sm">The host is yet to add this detail</span>
                                }
                            </span>
                        </label>

                        <label className="block py-2">
                            <span className="block text-sm font-medium text-slate-500 pb-1" htmlFor="date">Time</span>
                            <span className="block text-md text-slate-700 pb-1" htmlFor="date">
                                {
                                    space.host === user.name ?
                                        space.time === null ?
                                        <span className="text-red-700 font-medium text-sm">Please click on edit to add time *</span>
                                        :
                                        space.time
                                    :
                                    <span className="text-slate-400 font-medium text-sm">The host is yet to add this detail</span>
                                }
                            </span>
                        </label>
                    </div>


                    <label className="block py-2">
                        <span className="block text-sm font-medium text-slate-500 pb-1" htmlFor="time">About</span>
                        <span className="block text-md text-slate-700 pb-1" htmlFor="time">
                            {
                                space.host === user.name ?
                                    space.about === null ?
                                    <span className="text-red-700 font-medium text-sm">Please click on edit space to add info about this space *</span>
                                    :
                                    space.about
                                :
                                <span className="text-slate-400 font-medium text-sm">The host is yet to add this detail. Please check back</span>
                            }
                        </span>
                    </label>

                    <label className="block py-2">
                        <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="time">Participants</span>
                        <span className="block text-sm font-medium text-slate-700 pb-1" htmlFor="time">
                            {
                                space['participants'] !== undefined &&
                                space['participants'].length
                                // ?    "No participants yet. Be the first!"
                                //     :
                                //     space['participants'].length
                            }
                        </span>
                    </label>

                    <div className="flex items-center gap-10">
                        {
                            space.host === user.name ?
                            <>
                            <div className="mt-3">
                                <Link 
                                    className="btn-indigo font-bold" 
                                    to="/home/edit-space"
                                    state={space}
                                > 
                                    Edit Space
                                </Link>
                            </div>
                            <div className="mt-3" onClick={() => deleteSpace(Id)}>
                                <button className="btn-red font-bold"> Delete</button>
                            </div>
                            </>
                            :
                            <span
                                onClick={() => spaceHandler()} 
                                className="flex items-center gap-2 btn-pink cursor-pointer mt-3"
                            >
                                <span className="">Join</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                            </span>
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
