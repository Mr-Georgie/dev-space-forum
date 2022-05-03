// eslint-disable-next-line
import React, { useContext, useState } from 'react'
import connect from '../../images/connect.png'
import gmail from '../../images/g-icon.png'

import { UserContext } from '../UtilityComponents/UserContext'

export default function LoginModal(props) {

  const {loginUser, signUpWithGithub, signUpWithGoogle} = useContext(UserContext)

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
    <div className="bg-trans-black h-screen w-full absolute top-0 left-0 z-10">
      <div className="bg-white my-16 mx-10 drop-shadow-2xl rounded-2xl
                      lg:mx-36"
      >
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
        <div className="grid grid-cols-1 gap-4 px-4 pt-2 pb-14
                        md:grid-cols-2 md:divide-x md:divide-slate-300 md:px-20"
        >
          <div className="px-8 flex flex-col items-center">
            <h1 className="font-extrabold text-2xl py-3">Welcome 
              <span className="text-indigo-400"> Back!</span>    
            </h1>
            <img src={connect} alt="connect and network" className="h-fit md:h-[300px] lg:h-[336px]" />
          </div>
          <div className="px-8">

            {/* Log in with Google here */}
            <div className="flex border-2 gap-3 rounded-md mb-8 cursor-pointer" onClick={() => signUpWithGoogle()}>
              <span>
                <img src={gmail} alt="gamil icon" className="w-10 h-10 p-1"/>
              </span>
              <span className="p-2">Log in with Google</span>
            </div>

            {/* Login with Github here */}
            <div className="flex border-2 gap-3 rounded-md mb-8 cursor-pointer" onClick={() => signUpWithGithub()}>
                <span>
                  <img src="" alt="gamil icon" className="w-10 h-10 p-1"/>
                </span>
                <span className="p-2">Login with Github</span>
              </div>

            {/* text */}
            <div className="flex justify-center gap-2">
              <span>--- </span>
              <span>Or login with your email</span>
              <span> ---</span>
            </div>

            {/* form */}
            <form onSubmit={(event) => loginUser(event, formData)}>
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
                <span className="block text-sm font-medium text-slate-700 pb-1">Password</span>
                <input type="text" name="password" onChange={handleChange} value={formData.password}
                        className="mt-1 block w-full px-3 py-2 
                      bg-white border border-slate-300 rounded-md 
                        text-sm shadow-sm placeholder-slate-400 
                        focus:outline-none focus:border-sky-500 
                        focus:ring-1 focus:ring-sky-500"
                />
              </label>

              <button className="btn-indigo font-bold w-full mt-6"> Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
