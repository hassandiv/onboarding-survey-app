import React, { useState, useContext, useEffect } from 'react'
import RadioButton from './RadioButton'
import Nav from './Nav'
import { AppContext } from './AppContext'
import { useHistory } from 'react-router-dom'

const StepFour = () => {

    const history = useHistory()
    const [selected, setSelected] = useState({})
    const { count, setCount, percentage, setPercentage } = useContext(AppContext)

    useEffect(() => {
        setCount(4)
        setPercentage(80)
    })

    const handleFormSubmit = e => {
        e.preventDefault()
        setSelected(selected)
        console.log("You have submitted:", selected)
        history.push("./step-five")
    }

    const handleOnChange = e => {
        setSelected({ selected: e.target.value })
        console.log(selected)
    }

    return (
        <>
            <Nav />
            <h2 className="step4">How often do you eat avocados, asparagus, kiwi fruit or pineapple?</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="radioGroup">
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

export default StepFour