import React from 'react'
import Toggler from "../Toggler"
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'


export default function Header(props) {
  
  return (
    <header className="px-16">

      {/* Navbar starts here */}
      <nav className="grid grid-cols-2 py-2 mb-16">
        <div className="flex justify-start">
          <span href="" className="nav-link p-2"> DevSpace Forum</span>{/* Put Logo here */}
        </div>

        <div className="flex justify-end gap-5 static">
          <Toggler>
            {({on, toggle}) => {
              return (
                <>
                  {
                    /*  Log in nav link 
                        On click will show the log in modal
                    */
                  }
                  <button href="" className="nav-link p-2" onClick={() => [toggle(), props.showModalHandler()]}>Log in</button>
                  {
                    // show login modal if toggle on is true
                    on && <LoginModal toggle={toggle} showModalHandler={props.showModalHandler}/>
                  }
                </>
            )}}
          </Toggler>
          <Toggler>
            {({on, toggle}) => {
              return (
                <>
                  {
                    /*  Sign up nav link 
                        On click will show the sign up modal
                    */
                  }
                  <button href="" className="nav-link p-2" onClick={() => [toggle(), props.showModalHandler()]}>Sign up</button>
                  {
                    // show signup modal if toggle on is true
                    on && <SignUpModal toggle={toggle} showModalHandler={props.showModalHandler}/>
                  }
                </>
            )}}
          </Toggler>
        </div>
      </nav>
    </header>
  )
}
