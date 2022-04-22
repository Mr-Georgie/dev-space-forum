import React from 'react'
import img1 from '../../images/card-img1.png'
// import img2 from '../images/card-img2.png'

export default function Card() {
  return (
    <div className="bg-white rounded-md overflow-hidden my-3 relative">
        <img src={img1} alt="class screenshot" className="w-full h-32 sm:h-48 object-cover"/>
        <div className="flex flex-col text-normal m-4">
            <span className="font-bold">Title</span>
            <span className="">Review</span>
        </div>

        <div className="bg-white text-secondary text-xs uppercase rounded-full p-2 absolute top-0 ml-2 mt-2">
            <span className="font-bold">@ 45 mins</span>
        </div>
    </div>
  )
}
