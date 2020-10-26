import React from 'react'
import './App.css'

const RadioButton = ({ id, changed, value, name, label }) => {

    //Re-usable Radio Button component, imported in our steps components.
    //props destructuring used for our input properties.
    //Radio Button styled inside our App.css file.
    
    return (
        <div className="radioGroup">
            <input
                id={id}
                onChange={changed}
                value={value}
                type="radio"
                name={name}
            />
            <label
                htmlFor={id}
                id={id}>
                <span>{label}</span>
            </label>
        </div>
    )
}

export default RadioButton;