import React, { useContext } from 'react'
import Card from '../SubComponents/Card'
import { QuestionContext } from '../UtilityComponents/QuestionContext'


export default function AllQuestion() {

  const { questions } = useContext(QuestionContext)

  let questionsValidation = questions.documents === undefined ? null
  :
  questions.documents


  return (
    <div className="divide-y divide-dashed">
      { questionsValidation ? questions.documents.filter((question) => question.host === null).map((question) => {
          return (
              <Card 
                key={question.title}
                id={question['$id']}
                title={question.title}
                host={question.host} 
                comment={question.comment}
                participants={question.participants}
                is_question={true}
              />
          )
        })
        :
        <p className="p-5">Couldn't fetch questions from database...</p>
      }
    </div>
  )
}
