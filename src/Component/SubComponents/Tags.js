import React from 'react'

export default function Tags() {
  return (
    <div className="col-span-12 sm:col-span-12
        md:ml-[300px] md:mr-5 md:z-10 md:col-span-12 md:overflow-hidden
        lg:mt-14 lg:w-64 lg:fixed lg:top-5 lg:right-5 lg:z-10 lg:overflow-hidden
        xl:w-[330px]"
    >
      <div className="bg-white p-3 mb-6 border rounded-md">
        <h1 className="font-medium uppercase">Search for a devspace here:</h1>

        <div className="py-4">
          <input type="text" placeholder="Search" 
            className="mt-1 block w-full px-3 py-2 bg-slate-100 focus:bg-white 
            border border-slate-300 rounded-md text-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>
      </div>

      <div className="bg-white p-3 mb-2 border rounded-md">
        <h1 className="font-medium uppercase">Filter with Tags:</h1>
        <div className="flex flex-wrap mt-8 gap-1">
          <span className="btn-tag font-bold">ReactJs</span>
          <span className="btn-tag font-bold">Open Source</span>
          <span className="btn-tag font-bold">JavaScript</span>
          <span className="btn-tag font-bold">Appwrite</span>
          <span className="btn-tag font-bold">CSS</span>
        </div>
      </div>
    </div>
  )
}
