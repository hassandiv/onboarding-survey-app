import React, { useState, createContext } from 'react'
export const AppContext = createContext()


export const AppProvider = props => {

    //first state count numbers
    const [count, setCount] = useState(1)
    //second state count percentage
     const [percentage, setPercentage] = useState(20)
    
    return (
        <>
            <AppContext.Provider value={{ count, setCount, percentage, setPercentage }}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}

    //This is our context component it has 2 states.
    //First state is a simple counter for our questions 1,2,3... of 24
    //Second state is a simple counter for the top progress bar
    //Our states are passed into the AppContext.Provider value as objects
    //We imported our AppContext into our Nav Component and 1 to 5 Steps Components
    //The Nav component displays the changes from our state.
    //The 1 to 5 Steps Components makes the changes to our state, by clicking on the "Next question" green button.