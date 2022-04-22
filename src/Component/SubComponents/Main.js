import React from 'react'

import Pending from './Pending'
import UserFeed from './UserFeed'
import Tags from './Tags'


export default function Main() {
  return (
    <main>
        <div className="mt-8 grid grid-cols-12 px-10 
              sm:mt-10 
              md:mt-14 md:px-0"
        >            
            <Pending />

            <UserFeed />
            
            <Tags />
        </div>
    </main>
  )
}
