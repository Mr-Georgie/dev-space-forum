import React from 'react'

/**
 * 
 * This right aside component will not be implemented in the first push to live server
 */


export default function RightSidebar() {
  return (
    <div className="px-4 bg-slate-50
        md:ml-[210px] md:z-10
        lg:col-span-12 
        xl:w-[280px] xl:fixed xl:top-0 xl:right-0 xl:z-10 xl:border-l xl:overflow-hidden xl:h-screen"
    >
      <div className="mt-4 xl:mt-14">
        {/* <h1 className="font-medium">Search for a devspace here</h1> */}

        {/* <div className="py-4">
          <input type="text" placeholder="Search for a devspace here" 
            className="mt-1 block w-full px-3 py-2 bg-slate-100 focus:bg-white 
            border border-slate-300 rounded-md text-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div> */}
      </div>
    </div>
  )
}
