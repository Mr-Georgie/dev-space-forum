import React, { useContext, useState } from 'react'
import learn from '../../images/learn.png'

import { UserContext } from '../UtilityComponents/UserContext'

export default function SignUp(props) {

  const {signUpUser } = useContext(UserContext) // implement signUpWithGoogle, signUpWithGithub

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
    <>
      <div className="bg-trans-black h-screen w-full absolute top-0 left-0 z-10">
        <div className="bg-white drop-shadow-2xl rounded-2xl my-16 mx-17 sm:mx-20 md:mx-48 lg:mx-36">

          {/* Close modal button */}
          <div className="flex justify-end p-4">
  
            {/* add the toggle function to the on click event */}
            <span onClick={() => [props.toggle(), props.showModalHandler()]} className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
  
          </div>
  
          {/* Modal Content */}
          <div className="lg:divide-x lg:divide-slate-300 lg:px-20
                      lg:grid grid-cols-2 gap-4 px-4 pt-2 pb-14"
          >
            <div className="px-8 items-center hidden lg:flex lg:flex-col">
              <h1 className="font-extrabold text-2xl py-3">Welcome to 
                <span className="text-indigo-400"> DevSpace!</span>    
              </h1>
              <img src={learn} alt="connect and network" className="h-fit md:h-[300px] lg:h-[336px]" />
            </div>
            <div className="px-8">
  
              {/* form */}
              <form 
                onSubmit={(event) => signUpUser(event, formData)}
              >

                <label className="block py-2">

                  <span className="block text-sm font-medium text-slate-700 pb-1">Email</span>

                  <input type="text" name="email" onChange={handleChange} value={formData.email}
                        className="mt-1 block w-full px-3 py-2 
                      bg-white border border-slate-300 rounded-md 
                        text-sm shadow-sm placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 
                        focus:ring-1 focus:ring-sky-500"
                  />
                </label>

                <label className="block py-2">

                  <span className="block text-sm font-medium text-slate-700 pb-1">Username</span>

                  <input type="text" name="username" onChange={handleChange} value={formData.username}
                        className="mt-1 block w-full px-3 py-2 
                      bg-white border border-slate-300 rounded-md 
                        text-sm shadow-sm placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 
                        focus:ring-1 focus:ring-sky-500"
                  />
                </label>
  
                <label className="block py-2">
                  <span className="block text-sm font-medium text-slate-700 pb-1">Password</span>
                  <input type="text" name="password" onChange={handleChange} value={formData.password}
                        className="mt-1 block w-full px-3 py-2 
                      bg-white border border-slate-300 rounded-md 
                        text-sm shadow-sm placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 
                        focus:ring-1 focus:ring-sky-500"
                  />
                </label>
  
                <button className="btn-indigo font-bold w-full mt-6"> Join DevSpace</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
