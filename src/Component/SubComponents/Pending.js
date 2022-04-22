import React from 'react'

export default function Pending() {
  return (
    <div className="bg-white mt-14 border rounded-md col-span-12 sm:col-span-12
          md:w-64 md:fixed md:top-5 md:left-5 md:z-10 md:overflow-hidden
          lg:w-64 lg:fixed lg:top-5 lg:left-5 lg:z-10 lg:overflow-hidden
          xl:w-[330px]"
    >


        <h1 className="p-3 mb-4 uppercase font-medium">Pending requests:</h1>

        <div className="grid grid-cols-1">
          <div className="py-2 px-4 cursor-pointer hover:bg-indigo-200 hover:text-indigo-600 hover:font-bold">
            How to get started open source?
          </div>
          <div className="py-2 px-4 cursor-pointer rounded hover:bg-indigo-200 hover:text-indigo-600 hover:font-bold">
            Setting up Appwrite for my frontend
          </div>
          <div className="py-2 px-4 cursor-pointer rounded hover:bg-indigo-200 hover:text-indigo-600 hover:font-bold">
            What is data structure and algorithm all about?
          </div>
        </div>
    </div>
  )
}
