import React from 'react'


export default function Header(props) {
  
  return (
    <header className="fixed top-0 left-0 right-0 z-20 px-16 bg-white border-b-2">

      {/* Navbar starts here */}
      <nav className="grid grid-cols-2 py-2">
        <div className="flex justify-start">
          <span href="" className="nav-link p-2"> DevSpace</span>{/* Put Logo here */}
        </div>

        <div className="flex justify-end gap-5 static">
          <button href="" className="nav-link p-2" >Profile</button>
          <button href="" className="nav-link p-2" >Settings</button>      
        </div>
      </nav>
    </header>
  )
}
