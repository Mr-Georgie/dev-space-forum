import React from 'react'
import Card from './Card'

import tutorImg from '../../images/tutor5.png'

export default function UserFeed() {
  return (
    
    <div className="py-3 col-span-12 sm:col-span-12
        md:ml-[300px] md:mr-5 md:z-10 md:col-span-12
        lg:mx-[325px] lg:z-10
        xl:mx-[400px] xl:z-10">
        
        <> 
            {/* Header */}
            <h1 className="my-4 font-medium uppercase">Getting Started </h1>

            <div className="bg-white rounded-md relative overflow-hidden mb-12">
                <img src={tutorImg} alt="class screenshot" className="w-full h-32 sm:h-48 object-cover"/>

                <div className="grid grid-cols-12 p-2 absolute top-0 right-0 left-0 h-full bg-trans-black">

                    <div className="col-span-1 flex justify-center items-center cursor-pointer hover:bg-trans-black">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 text-white" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>

                    <div className="col-span-10 flex flex-col items-center">
                        <h3 className="text-white text-3xl font-extrabold ">
                            New to DevSpace?
                        </h3>
                        <p className="text-yellow-300 text-2xl font-semibold">
                            Share what you learnt today in a live session 
                        </p>
                        <div className="col-span-6">
                            <button className="btn-indigo font-bold mt-6">Start Here</button>
                        </div>
                    </div>

                    <div className="col-span-1 flex justify-center items-center cursor-pointer hover:bg-trans-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-white" fill="none" 
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>

                </div>
            </div>
        </> 


        <>
            {/* Header */}
            <h1 className="my-4 font-medium uppercase">Ongoing sessions</h1>

            <div className="grid mt-5 md:grid-cols-1 xl:grid-cols-2 xl:gap-8">
                <Card />
                <Card />
            </div>
        </>
        <> 
            {/* Header */}
            <h1 className="my-4 font-medium uppercase">Watch old sessions</h1>

            <div className="grid grid-cols-2 gap-8 mt-5">
                <Card />
                <Card />
            </div>
        </> 
    </div>
  )
}
