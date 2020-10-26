import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Image from './assets/img.svg'

const Home = () => {

    return (
        <>
            <img className="Image" src={Image} alt="" />
            <h1>Calculate your personal Score</h1>
            <p>Next we have a short 2&ndash;3 minute survey covering Diet, Home, Travel, and Other that will let us calculate your personal carbon footprint.</p>

            <Link to="/diet/step-one">
                <button
                    className="btnComponent">
                    Take the survey
                </button>
            </Link>
        </>
    )
}

export default Home