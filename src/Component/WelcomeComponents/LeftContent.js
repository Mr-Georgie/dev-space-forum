import React from 'react'

import DevSpaceDarkLogo from '../../images/devspace-logo-dark.png'
import TwoPeopleLearning from '../../images/carton.png'

export default function LeftContent(props) {

    return (
        <main className={`w-full bg-indigo-900 p-7 space-y-5 md:block md:w-96 ${props.close ? "hidden" : " "}`}>
            <header>
                    <nav className="p-3">
                        {/* <h4 className="text-xl text-white font-normal uppercase">DevSpace Forum</h4> */}
                        <img src={DevSpaceDarkLogo} alt="devspace forum icon" className="h-16" />
                    </nav>
            </header>
            <div className="p-3 my7 space-y-6">
                <h1 className="text-2xl text-white font-semibold">
                    {/** style="font-family: 'montserrat regular';" */}
                    Join DevSpace Community     
                </h1>
                <p className="text-white text-sm">
                    {/* style="font-family: 'inter';" */}
                    Ask questions. Explain difficult concepts via video sessions.
                    Everyone has something to share and learn. Add your voice too 
                </p>
            </div>
            <div className="flex justify-center">
                <img src={TwoPeopleLearning} alt="reader"/>
            </div>

            <div className="flex justify-center md:hidden">
                <span 
                    onClick={() => props.toggle()}
                    className="cursor-pointer flex justify-center p-4 mt-4 font-medium bg-red-400 text-white
                        hover:outline-none hover:bg-red-500 
                        focus:outline-none focus:bg-red-500 focus:ring focus:ring-red-200 
                        w-80 rounded"
                >
                    Get Started
                </span>
            </div>
        </main>
    )
}
