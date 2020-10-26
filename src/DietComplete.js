import React, { useContext, useEffect } from 'react'
import { useHistory  } from 'react-router-dom'
import { AppContext } from './AppContext'

const DietComplete = () => {

    const history = useHistory()
    const { setCount, setPercentage } = useContext(AppContext)

    useEffect(() => {
        setCount(1)
        setPercentage(20)
    })

    return (
        <>
            <div className="topContent">
                <span>Diet</span>
                <p>Your score</p>
            </div>
            <div className="midContent">
                <small>
                    <b>UK National average:</b> 2.9 Tons
                    of CO2 produced per year
                </small>
                <h6>Your using 3.2 Tons of CO2 / year</h6>
                <span className="scoreBar"></span>
                <span className="resultBar"></span>
            </div>
            <div className="botContent">
                <p>
                    Lets take a look at how you
                    look in the <span>Home</span> category...
                </p>
                <button onClick={() => history.push("/") }className="btnComponent">Continue</button>
            </div>
        </>
    )
}
export default DietComplete