import React, { useContext } from 'react'
import Card from '../SubComponents/Card'

import { SpaceContext } from '../UtilityComponents/SpaceContext'

export default function Live() {

  const { spaces } = useContext(SpaceContext)

  let LiveSpaces = spaces.documents === undefined ? null
  :
  spaces.documents.filter((space) => space.is_live)

  return (
    <div className="divide-y divide-dashed">
    {
        LiveSpaces ? 
          LiveSpaces.length !== 0 ?
            LiveSpaces.map((space) => {
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
                      
                      // 
                      is_question={false}
                  />
              )
            })
          :
          <p className="p-5">No Live spaces at the moment...</p>
        :
        <p className="p-5">Couldn't fetch live spaces from the database...</p>
    }
    </div>
  )
}
