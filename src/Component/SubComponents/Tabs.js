import React, {useState, useContext} from 'react'

import { Link } from 'react-router-dom'
import { SpaceContext } from '../UtilityComponents/SpaceContext'
import { QuestionContext } from '../UtilityComponents/QuestionContext'

export default function Tabs() {

    const { spaces } = useContext(SpaceContext)
    const { questions } = useContext(QuestionContext)

    // create header items as react state variables
    const [tabs, setActiveTab] = useState(
        [
            {to: "/home", name: "All Spaces", isActive: true, isQuestion: false},
            {to: "/home/all-questions", name: "All Questions", isActive: false, isQuestion: true},
            {to: "/home/upcoming-spaces", name: "Upcoming Spaces", isActive: false, isQuestion: false},
            {to: "/home/live-spaces", name: "Live Spaces", isActive: false, isQuestion: false},
            // {to: "/home/concluded-spaces", name: "Concluded Spaces", isActive: false, isQuestion: false}
        ]
    )

    // function to implement categories item active class
    function toggleActive(to) {
        setActiveTab(prevTabs => {

        // first change the current active class to inactive
        let changedTabs = prevTabs.map((item) => {
            return item.isActive === true ? {...item, isActive: !item.isActive} : item
        })

        // then assign a new active class to categories item based on its name
        return changedTabs.map((item) => {
            return item.to === to ? {...item, isActive: !item.isActive} : item
        })
        })
    }

    // use array.map(to display tab items)
    const tabsElements = tabs.map(item => {
        return (
        <span key={item.name} onClick={()=> toggleActive(item.to)} className="my-2">
        
        <Link
            className={ item.isActive ? "active-tab" : "tabs"} 
            to={item.to}
            state={item.isQuestion ? questions : spaces }
        > 
            {item.name}
        </Link>
        
        </span>
        )
    })

  

    return (
        <>
        {tabsElements}
        </>
        
    )
}
