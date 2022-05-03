import React, { useContext } from 'react'
import { QuestionContext } from '../UtilityComponents/QuestionContext'
import { Link } from 'react-router-dom'

export default function LeftSidebar() {

  const { questions } = useContext(QuestionContext)

  let questionsValidation = questions.documents === undefined ? null
  :
  questions.documents

  return (
    <div className="mt-14 col-span-12 divide-y divide-solid divide-gray-300 px-4 bg-white border
          sm:col-span-12
          md:w-52 md:fixed md:top-0 md:left-0 md:z-10 md:h-screen
          lg:w-52 lg:fixed lg:top-0 lg:left-0 lg:z-10
          xl:w-[280px]"
    >
      <div className="pb-2">
        <h1 className="p-3 mb-4 uppercase font-medium">Top 3 Questions</h1>
        <div className="grid grid-cols-1 pb-3">
          {
            questionsValidation ? questionsValidation.filter((question) => question.host === null).slice(-3).map((space) => (
              
              <Link 
                key={space['$id']} 
                className="py-2 px-4 cursor-pointer hover:bg-indigo-200 hover:text-indigo-600 hover:font-medium"
                to={`/home/question/${space['$id']}`}
                >
                  {space.title}
              </Link>
            ))
            :
            <div className="">
              No question yet
            </div>
          }
        </div>

      </div>

      <div className="pt-5 px-3">
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
