import React from 'react'
import TwoPeopleLearning from '../../images/carton.png'
import DevSpaceImg from '../../images/devspace.png'


export default function Main() {
  return (
    <main className="sm:p-0 md:p-0 lg:p-0 xl:p-0">

        <div className="grid grid-col-1 px-16
                        lg:grid-cols-12 
                        xl:gap-10 xl:my-10 xl:px-24"
        
        >
            {/* Banner */}
            <div className="mb-20
                            sm:mx-10
                            lg:col-span-7">

                <h1 className="font-extrabold text-5xl py-3
                                sm:text-5xl
                                md:text-6xl
                                lg:text-7xl"
                >
                    Welcome to <span className="text-indigo-400"> DevSpace!</span>    
                </h1>
                <p className="pb-5 text-lg
                                sm:text-2xl
                                lg:text-3xl"
                >
                    Where everyone has something to share and learn
                </p>
                <button className="btn-indigo font-bold
                                   sm:text-4xl sm:p-6
                                   lg:text-2xl"
                > 
                    Join DevSpace
                </button>
            </div>
            <img src={TwoPeopleLearning} alt="two people learning together" 
                className="w-full sm:mx-16 lg:col-span-5"
            />
        </div>

        <section className="bg-indigo-900 my-20 p-4">
            <div className="flex justify-center">
                <h2 className="text-3xl font-bold text-yellow-100 py-10 decoration-4 uppercase
                                sm:text-5xl"
                >
                    About DevSpace
                </h2>
            </div>

            <div className="grid grid-cols-1 my-10 px-4
                            md:mx-10
                            lg:grid-cols-12 lg:gap-10"
            >
                {/* About */}
                <div className="shadow-2xl bg-slate-400 rounded-xl mb-20 mx-8
                                lg:col-span-6"
                >
                    <img src={DevSpaceImg} alt="two people learning together" 
                         className="rounded-xl origin-bottom -rotate-12 drop-shadow-2xl ml-10"
                    />
                </div>

                <div className="col-span-12
                                lg:col-span-6"
                >
                    <p className="pb-5 px-6 text-3xl text-white">
                        <span className="text-yellow-100 font-bold">DevSpace </span>
                        is a tech community where live video conference sessions are created and shared.
                        <span className="block py-4">
                        Concepts, ideas, "how to"s in <span className="text-red-200 font-bold">tech </span> are explained during the sessions with the 
                        opportunity to interact and connect with participants
                        </span>
                    </p>
                    <p className="font-bold px-6 text-white text-2xl italic">Think about blog articles in videos but live!</p>
                </div>
            </div>

            <div className="flex justify-center pb-8">
                <button className="btn-pink font-bold uppercase px-6 mt-8 w-full mx-10 text-2xl py-8
                                   md:mx-20
                                   lg:w-auto"
                > 
                    Start a live session
                </button>
            </div>
        </section>
    </main>
  )
}
