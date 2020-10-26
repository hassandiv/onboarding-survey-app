import React, { useState, useContext, useEffect } from 'react'
import RadioButton from './RadioButton'
import Nav from './Nav'
import { AppContext } from './AppContext'
import { useHistory } from 'react-router-dom'

const StepTwo = () => {

    const history = useHistory()
    const [selected, setSelected] = useState({})
    const { count, setCount, percentage, setPercentage } = useContext(AppContext)

    useEffect(() => {
        setCount(2)
        setPercentage(40)
    })

    const handleFormSubmit = e => {
        e.preventDefault()
        setSelected(selected)
        console.log("You have submitted:", selected)
        history.push("./step-three")
    }

    const handleOnChange = e => {
        setSelected({ selected: e.target.value })
        console.log(selected)
    }

    return (
        <>
            <Nav />
            <h2>How big are your portion sizes?</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="radioGroup">
                    <RadioButton
                        changed={handleOnChange}
                        id="op1"
                        isSelected={selected === "Smaller than average"}
                        label="Smaller than average"
                        value="Smaller than average"
                        name="diet"
                    />
                    <RadioButton
                        changed={handleOnChange}
                        id="op2"
                        isSelected={selected === "Average"}
                        label="Average"
                        value="Average"
                        name="diet"
                    />
                    <RadioButton
                        changed={handleOnChange}
                        id="op3"
                        isSelected={selected === "Larger than average"}
                        label="Larger than average"
                        value="Larger than average"
                        name="diet"
                    />
                    <RadioButton
                        changed={handleOnChange}
                        id="op4"
                        isSelected={selected === "I'm not sure"}
                        label="I'm not sure"
                        value="I'm not sure"
                        name="diet"
                    />
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

export default StepTwo