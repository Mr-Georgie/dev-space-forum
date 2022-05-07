import React, { useContext, useState } from 'react'

import google from '../../images/google.png'
import twitter from '../../images/twitter.png'

import { UserContext } from '../UtilityComponents/UserContext'

import { Link } from 'react-router-dom'

export default function SignUp(props) {

    const { signUpUser, signUpWithGoogle } = useContext(UserContext) // implement signUpWithGithub

    // will hold all user form inputs
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: ""
    })

    // update form user input state on change
    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        }))
    }




    return (
        <main className={`flex-auto bg-white space-y-7 p-2" md:block ${props.close ? "" : "hidden"}`}>
            <header className="py-5 px-5 my-4">
                <nav>
                    <a href="https://twitter.com/GeorgeIsiguzo" >
                        <span className="flex items-center justify-end">
                            <span 
                                className="border flex items-center space-x-4 p-2 rounded 
                                        hover:bg-slate-50 hover:font-medium shadow-sm
                                        focus:bg-slate-50 focus:font-medium">
                                <img src={twitter} alt="twitter icon" className="h-3"/>
                            </span>
                        </span>
                    </a>
                </nav>
            </header>
            <div className="flex items-center justify-center p-5">
                <h4 className="text-3xl font-black text-black">
                    {/* style="font-family: 'montserrat regular';" */}
                    Sign Up
                </h4>
            </div>
            <section className="flex flex-col items-center justify-center">

                <form onSubmit={(event) => signUpUser(event, formData)} className="space-y-4">
                    
                    <div className="">
                        <div className="relative mt-1">
                            <input type="email" name="email" onChange={handleChange} value={formData.email} 
                                className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border 
                                border-gray-200 focus:border-indigo-800 font-light" 
                                placeholder="email address"
                            />
                            <svg className="w-4 h-4 absolute top-0 m-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path  
                                    fillRule="evenodd" 
                                    d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 
                                    10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" 
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                    
                    <div className="">
                        <div className="relative mt-1">
                            <input type="text" name="username" onChange={handleChange} value={formData.username} 
                                className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border 
                                border-gray-200 focus:border-indigo-800 font-light" 
                                placeholder="username"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute top-0 m-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path 
                                    strokeLinecap="round" strokeLinejoin="round" 
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 
                                    0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                                />
                            </svg>
                        </div>
                    </div>  
                    
                    <div className="">
                        <div className="relative mt-1 mb-2">
                            <input type="password"  name="password" onChange={handleChange} value={formData.password}
                                className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border 
                                border-gray-200 focus:border-indigo-800 font-light" 
                                placeholder="password" 
                            />
                            <svg className="w-4 h-4 absolute top-0 m-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"></path></svg>
                        </div>  
                    </div>
                    <button 
                        className="focus:outline-none bg-indigo-800 focus:bg-indigo-900 
                        focus:ring focus:ring-indigo-200 w-80 text-white rounded py-4"
                    >
                        Log in
                    </button>
                </form>
            </section>
            <section className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-gray-400"><span> or signup with</span></h2>
                <div>
                    <ul className="flex items-center justify-around space-x-5">

                        <span className="cursor-pointer" onClick={signUpWithGoogle}>
                            <li className="border shadow-sm p-2 w-10 h-10 rounded flex items-center 
                            justify-center hover:bg-slate-50 focus:bg-slate-50">
                                <img src={google} alt="google icon" />
                            </li>
                        </span>

                        {
                        /* Has not been implemented yet 
                        <a href="#">
                            <li className="border border-indigo-800 w-10 h-10 rounded flex items-center 
                            justify-center text-indigo-800 hover:bg-indigo-800 hover:text-white">
                                <img src={linkedIn} alt="linkedin icon" />
                            </li>
                        </a>
                        <a href="#">
                            <li className="border border-indigo-800 w-10 h-10 rounded flex items-center 
                            justify-center text-indigo-800 hover:bg-indigo-800 hover:text-white">
                                <img src={twitter} alt="twitter icon" />
                            </li>
                        </a> */
                        }
                    </ul>
                </div>
                <div className="sign_up_link space-x-1">
                    <span className="text-sm font-light">Already have an account?</span> 
                    <Link 
                        to="/"
                        className="text-indigo-800 
                            hover:text-indigo-900 text-sm 
                            font-light hover:underline">
                        Login
                    </Link>
                </div>
            </section>
        </main>
    )
}
