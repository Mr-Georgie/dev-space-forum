import React, { useState } from "react"
import Header from "./WelcomeComponents/Header"
import Main from "./WelcomeComponents/Content"
import Footer from "./SubComponents/Footer"

import { UserContextProvider } from "./UtilityComponents/UserContext"

export default function Welcome() {
    /**
     * This welcome component will show for unauthenticated users
     */

    // this show modal state will determine welcome component UI behaviour when the modals in the <Header/> is active
    const [showModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(prevState => !prevState)
    }

    return (
        // Add overflow-hidden to the welcome component UI when modal in <Header/> is active
        <div className={`${showModal ? "overflow-y-hidden h-screen" : " "} app-style`}>
            <UserContextProvider>
                <Header showModalHandler={showModalHandler}/>
            </UserContextProvider>
            <Main />
            <Footer />
        </div>
    )
}
