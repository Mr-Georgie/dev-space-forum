import React, { useContext } from 'react'
import Card from '../SubComponents/Card'

import { SpaceContext } from '../UtilityComponents/SpaceContext'

export default function AllSpace() {

    const { spaces } = useContext(SpaceContext)

    const cardElement = spaces.documents === undefined ? <p className="p-5">Couldn't fetch spaces from database...</p>
    :
    spaces.documents.map((space) => {
        return (
            <Card 
            key={space.title}
            id={space['$id']}
            title={space.title} 
            host={space.host} 
            about={space.about} 
            tags={space.tags} 
            duration={space.duration} 
            created_at={space.created_at} 
            has_ended={space.has_ended} 
            is_ongoing={space.is_ongoing} 
            reviews={space.reviews} 
            participants={space.participants}
            // check if card is a question
            is_question={false}
            />
        )
    })


  return (
    <div className="divide-y divide-dashed">
        { cardElement }
    </div>
  )
}
