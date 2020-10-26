import React, { useState, useContext, useEffect } from 'react'
import RadioButton from './RadioButton'
import Nav from './Nav'
import { AppContext } from './AppContext'
import { useHistory } from 'react-router-dom'

const StepThree = () => {

    const history = useHistory()
    const [selected, setSelected] = useState({})
    const { count, setCount, percentage, setPercentage } = useContext(AppContext)

    useEffect(() => {
        setCount(3)
        setPercentage(60)
    })

    const handleFormSubmit = e => {
        e.preventDefault()
        setSelected(selected)
        console.log("You have submitted:", selected)
        history.push("./step-four")
    }

    const handleOnChange = e => {
        setSelected({ selected: e.target.value })
        console.log(selected)
    }

    return (
        <>
            <Nav />
            <h2>How much food ends up wasted in your household?</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="radioGroup">
                    <RadioButton
                        changed={handleOnChange}
                        id="op1"
                        isSelected={selected === "None"}
                        label="None"
                        value="None"
                        name="diet"
                    />
                    <RadioButton
                        changed={handleOnChange}
                        id="op2"
                        isSelected={selected === "1-5 plates per week"}
                        label="1-5 plates per week"
                        value="1-5 plates per week"
                        name="diet"
                    />
                    <RadioButton
                        changed={handleOnChange}
                        id="op3"
                        isSelected={selected === "6-10 plates per week"}
                        label="6-10 plates per week"
                        value="6-10 plates per week"
                        name="diet"
                    />
                    <RadioButton
                        changed={handleOnChange}
                        id="op4"
                        isSelected={selected === "More than 10 plates per week"}
                        label="More than 10 plates per week"
                        value="More than 10 plates per week"
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

export default StepThree