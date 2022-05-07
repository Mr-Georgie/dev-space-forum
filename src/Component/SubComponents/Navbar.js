import React, { useContext, useState, useEffect } from 'react'

import { UserContext } from '../UtilityComponents/UserContext'
import { Link } from 'react-router-dom'
import Toggler from '../UtilityComponents/Toggler'

import { useNavigate } from 'react-router-dom'


export default function Header() {

  const navigate = useNavigate()

  const { logOut, user } = useContext(UserContext)
  const [navContent, setNavContent] = useState(false)

  const toggleNavContent = () => {
    setNavContent(prevState => !prevState)
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (user.name === undefined) {

        navigate('/')
      }
    }, 3000)

    return () => {
      clearTimeout(timer);
    };
      
  })


  return (
    <header className="fixed top-0 left-0 right-0 z-20 px-8 bg-white border-b-2 lg:px-16">

      {/* Navbar starts here */}
      <nav className="md:flex md:justify-between py-2">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleNavContent} 
            className="
                h-6 w-6 cursor-pointer 
                md:hidden block" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <Link to="/home" className="nav-link p-2"> DevSpace</Link>{/* Put Logo here */}
        </div>

        <div className={`${navContent ? "flex flex-col" : "hidden"} gap-3 md:flex md:flex-row md:gap-3 md:items-center md:w-auto`} id="menu">

          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </span>
            <input 
              className="placeholder:italic placeholder:text-slate-400 block 
                      bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 
                      shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
              placeholder="Search for a devspace..." 
              type="text" 
              name="search"/>
          </label>

          <div className="flex flex-col items-end gap-3 md:flex-row md:items-center md:gap-5 md:static">
            <Link to="ask-a-question" className="btn-indigo text-sm inline-block">Ask a question</Link>
            <Link to="/home/add-space" className="btn-pink text-sm inline-block">Create Space</Link>
            <div className="relative inline-block text-left">
            <Toggler>
              {({on, toggle}) => (
                <>
                  <div className="flex items-center gap-1 cursor-pointer" onClick={() => toggle()}>
                    <img className="shrink-0 h-10 w-10 rounded-full"
                      src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png"  
                      alt="" 
                    />
                    <span className="block md:hidden lg:block">
                        Hi { user.name === undefined ? "Guest" : user.name }
                      </span>
                    </div>
                  {
                    // show dropdown if toggle on is true
                    on && 
                    <div 
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white 
                      ring-1 ring-black ring-opacity-5 focus:outline-none" 
                      role="menu" aria-orientation="vertical" 
                      aria-labelledby="menu-button" tabIndex="-1"
                    >

                      <div className="py-1" role="none">
                        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                        <Link 
                          to="/home/user-profile" 
                          className="nav-link block px-4 py-2 text-sm" role="menuitem" 
                          tabIndex="-1" 
                          id="menu-item-0">Your Profile
                        </Link>
                        <Link 
                          to="" 
                          className="nav-link block px-4 py-2 text-sm" 
                          role="menuitem" 
                          tabIndex="-1" 
                          id="menu-item-1">Notifications
                        </Link>

                        <button 
                          className="nav-link block w-full text-left px-4 py-2 text-sm" 
                          onClick={() => logOut()}>Logout
                        </button>
                      </div>
                    </div>
                  }
                </>
              )}

            </Toggler>
            </div>  
                
          </div>
        </div>

          
      </nav>
    </header>
  )
}
