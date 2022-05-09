import React, { useContext, useState } from 'react'

import google from '../../images/google.png'
import twitter from '../../images/twitter.png'

import { Link } from 'react-router-dom'
import { UserContext } from '../UtilityComponents/UserContext'

export default function Login(props) {

    const {loginUser, signUpWithGoogle } = useContext(UserContext) //implement signUpWithGithub

    // will hold all user form inputs
    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
                    <span>
                        <span className="flex items-center justify-end">
                            <a href="https://twitter.com/GeorgeIsiguzo" 
                                className="flex items-center space-x-4 p-2 rounded 
                                        hover:bg-slate-50 hover:font-medium hover:shadow-sm
                                        focus:bg-slate-50 focus:font-medium focus:shadow-sm">
                                <img src={twitter} alt="twitter icon" className="h-3"/>
                            </a>
                        </span>
                    </span>
                </nav>
            </header>
            <div className="flex items-center justify-center p-5">
                <h4 className="text-3xl font-black text-black">
                    {/* style="font-family: 'montserrat regular';" */}
                    Log in
                </h4>
            </div>
            <section className="flex flex-col items-center justify-center">

                <form className="space-y-4" onSubmit={(event) => loginUser(event, formData)}>

                    <div className="email">
                        <div className="relative mt-1">
                            <input type="email" name="email" onChange={handleChange} value={formData.email}
                            className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border 
                            border-gray-200 focus:border-indigo-800 font-light" 
                            placeholder="email address"/>
                            <svg className="w-4 h-4 absolute top-0 m-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd"></path></svg>
                        </div>
                    </div>

                    <div className="password">
                        <div className="relative mt-1 mb-2">
                            <input type="password"  name="password" onChange={handleChange} value={formData.password}
                            className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border 
                            border-gray-200 focus:border-indigo-800 font-light" 
                            placeholder="password" />
                            <svg className="w-4 h-4 absolute top-0 m-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"></path></svg>
                        </div>  
                    </div>

                    <button 
                        className="focus:outline-none bg-indigo-800 focus:bg-indigo-900 
                        focus:ring focus:ring-indigo-200 w-80 text-white rounded py-4">Log in</button>
                </form>
            </section>
            <section className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-gray-400"><span> or login with</span></h2>
                <div>
                    <ul className="flex items-center justify-around space-x-5">

                        <span className="cursor-pointer" onClick={signUpWithGoogle}>
                            <li className="p-1 w-10 h-10 rounded flex items-center 
                            justify-center hover:bg-slate-50 hover:shadow-sm focus:bg-slate-50 focus:shadow-sm">
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
                    <span className="text-sm font-light">Don't have an account?</span> 
                    <Link 
                        to="/signup"
                        className="text-indigo-800 
                            hover:text-indigo-900 text-sm 
                            font-light hover:underline">
                        Sign up
                    </Link>
                </div>
            </section>
        </main>
    )
}
