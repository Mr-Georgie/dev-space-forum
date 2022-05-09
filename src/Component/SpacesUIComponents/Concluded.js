import React, { useContext } from 'react'
import Card from '../SubComponents/Card'

import { SpaceContext } from '../UtilityComponents/SpaceContext'

export default function Concluded() {

  const { spaces } = useContext(SpaceContext)

  let concludedSpaces = spaces.documents === undefined ? null
  :
  spaces.documents.filter((space) => !space.is_live && !space.is_upcoming)
  

  return (
    <div className="divide-y divide-dashed">
    {
        concludedSpaces ? 
          concludedSpaces.length !== 0 ?
            concludedSpaces.map((space) => {
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
                        is_live={space.is_live} 
                        reviews={space.reviews} 
                        participants={space.participants}
                        image_id={space.image_id} 

                        // 
                        is_question={false}
                    />
                )
            })
          :
          <p className="p-5">No Concluded spaces at the moment...</p>
        :
        <p className="p-5">Couldn't get Concluded spaces from database...</p>
    }
    </div>
  )
}
