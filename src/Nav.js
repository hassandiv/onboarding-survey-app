import React, { useContext } from 'react'
import { AppContext } from './AppContext'

    

const Nav = () => {

    const { count, percentage } = useContext(AppContext)

    //Our Nav component contains the progress bar, the survey topics and the number of questions 
    //We've imported our AppContext component into our Nav component. As we need our count and percentage object.
    //We've created a parent div proBar that holds another div inside of it.
    //A fillBar div acts as the filler inside of the parent div. 
    //The width changes by 20 based on our state, percentage is added below with inline css.
    //Our 4 surveys topics are normal html small tags styled with css inside App.css file.
    //Our count state is wrapped in a html small tag and changes dynamically based on our steps components.

    return (
        <>
            <div className="proBar">
                <div className="fillBar" style={{ width: `${percentage}%` }} />
            </div>
            <small className="diet">Diet</small>
            <small className="home">Home</small>
            <small className="travel">Travel</small>
            <small className="other">Other</small>
            <div className="count">
                <small>Question {count} of 24</small>
            </div>
        </>
    )
}

export default Nav