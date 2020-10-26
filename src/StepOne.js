import React, { useState, useContext, useEffect } from 'react'
import RadioButton from './RadioButton'
import Nav from './Nav'
import { AppContext } from './AppContext'
import { useHistory } from 'react-router-dom'

const StepOne = () => {

    //The same exact code used for the other 4 steps components.

    const history = useHistory()
    //useState is used for updating our state "selected", based on the selected radio button
    const [selected, setSelected] = useState({})
    //useContext is used with our AppContext that is imported, to provide all of the steps components with the count and percentage states
    const { count, setCount, percentage, setPercentage } = useContext(AppContext)
    
    //Because we don't have a go back button in our App, our state will not update if we use the browser go back button
    //useEffect is used to update our AppContext states count and percentage if you click on goback with the browser.
    useEffect(() => { 
        setCount(1)
        setPercentage(20)
    })

    //handleFormSubmit function used once the form submitted to update our state and server request
    //useHistory once the form is submitted it gives us access to the history instance and push to the next step component
    const handleFormSubmit = e => {
        e.preventDefault()
        setSelected(selected)
        console.log("You have submitted:", selected)
        history.push("./step-two")
    }

    //handleOnChange function is used to handle the onChange for the radio button to target the new value
    const handleOnChange = e => {
        setSelected({ selected: e.target.value })
        console.log(selected)
    }

    return (
        <>
            {/* We imported Nav component inside each of our steps components to display the top part */}
            <Nav />
            <h2>How often do you eat meat and dairy?</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="radioGroup">
            {/* Imported Radio button component and added the values, ids, name, label for each button. */}
                    <RadioButton
                        changed={handleOnChange}
                        id="op1"
                        isSelected={selected === "Daily"}
                        label="Daily"
                        value="Daily"
                        name="diet"
                    />
                    <RadioButton
                        changed={handleOnChange}
                        id="op2"
                        isSelected={selected === "3+ times per week"}
                        label="3+ times per week"
                        value="3+ times per week"
                        name="diet"
                    /> 
                    <RadioButton
                        changed={handleOnChange}
                        id="op3"
                        isSelected={selected === "1 or 2 times"}
                        label="1 or 2 times"
                        value="1 or 2 times"
                        name="diet"
                    /> 
                    <RadioButton
                        changed={handleOnChange}
                        id="op4"
                        isSelected={selected === "Not at all"}
                        label="Not at all"
                        value="Not at all"
                        name="diet"
                    /> 
            {/* Submit button onClick has two functions to update the AppContext states count and percentage
            (count + 1) and (percentage + 20) */}
                    <button
                        className="btnComponent"
                        type="submit"
                        onClick={() => { setCount(count + 1); setPercentage(percentage + 20); }}>
                        Next question
                    </button>
                </div>
            </form>
        </>
    )
}

export default StepOne