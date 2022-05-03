import React, {useContext } from 'react'
import Card from '../SubComponents/Card'

import { SpaceContext } from '../UtilityComponents/SpaceContext'

export default function Upcoming() {

  const { spaces } = useContext(SpaceContext)

  let upcomingSpaces = spaces.documents === undefined ? null
  :
  spaces.documents.filter((space) => space.is_upcoming)


  return (
    <div className="divide-y divide-dashed">
    {
        upcomingSpaces ? upcomingSpaces.map((space) => {
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

                    // 
                    is_question={false}
                />
            )
        })
        :
        <p className="p-5">No Upcoming spaces at the moment...</p>
    }
    </div>
  )
}
