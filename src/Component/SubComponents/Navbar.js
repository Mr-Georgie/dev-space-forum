import React, { useContext } from 'react'

import { UserContext } from '../UtilityComponents/UserContext'
import { Link } from 'react-router-dom'
import Toggler from '../UtilityComponents/Toggler'


export default function Header() {

  const { logOut } = useContext(UserContext)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-20 px-16 bg-white border-b-2">

      {/* Navbar starts here */}
      <nav className="flex justify-between py-2">
        <div className="flex align-middle">
          <Link to="/home" className="nav-link p-2"> DevSpace</Link>{/* Put Logo here */}
        </div>

        <div className=" w-60">
          <input type="text" placeholder="Search for a devspace here" 
            className="mt-1 block w-full px-3 py-2 bg-slate-100 focus:bg-white 
            border border-slate-300 rounded-md text-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>

        <div className="flex gap-5 static">
          <Link to="ask-a-question" className="btn-indigo text-sm inline-block">Ask a question</Link>
          <Link to="/home/add-space" className="btn-pink text-sm inline-block">Create Space</Link>
          <div className="relative inline-block text-left">
          <Toggler>
            {({on, toggle}) => (
              <>
                <div className="cursor-pointer">
                <img className="shrink-0 h-10 w-10 rounded-full" onClick={() => toggle()}
                  src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png"  
                  alt="" 
                />
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
                        to="" 
                        className="nav-link block px-4 py-2 text-sm" role="menuitem" 
                        tabIndex="-1" 
                        id="menu-item-0">Your Profile
                      </Link>
                      <Link 
                        to="" 
                        className="nav-link block px-4 py-2 text-sm" 
                        role="menuitem" 
                        tabIndex="-1" 
                        id="menu-item-1">Support
                      </Link>
                      <Link 
                        to="" 
                        className="nav-link block px-4 py-2 text-sm" 
                        role="menuitem" 
                        tabIndex="-1" 
                        id="menu-item-2">License
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
      </nav>
    </header>
  )
}
