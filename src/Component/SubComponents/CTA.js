import React from 'react'


/**
 * 
 * CTA - Call to action Component
 * 
 * This is an extra component.
 * May be used in future versions to improve UX
 */


export default function CTA() {
  return (
    <div className="px-4"> 
                {/* Header */}
                <h1 className="my-4 font-medium uppercase">Getting Started </h1>

                <div className="bg-white rounded-md relative overflow-hidden mb-12">
                    <img src={tutorImg} alt="class screenshot" className="w-full h-32 sm:h-48 object-cover"/>

                    <div className="grid grid-cols-12 p-2 absolute top-0 right-0 left-0 h-full bg-trans-black">

                        <div className="col-span-12 flex flex-col items-center">
                            <h3 className="text-white text-3xl font-extrabold ">
                                New to DevSpace?
                            </h3>
                            <div className="col-span-6 mt-8">
                                <Link to="/home/add-space" className="btn-indigo font-bold mt-6">Start Here</Link>
                            </div>
                        </div>

                    </div>
                </div>
    </div>
  )
}
