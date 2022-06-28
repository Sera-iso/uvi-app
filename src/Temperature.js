import React, { useState } from 'react'

import './Temperature.css'

export default function Temperature( {celsius} ) {
    const [temp, setTemp] = useState("unitC")
    
    function convertToF(event) {
        event.preventDefault()
        setTemp("unitF")
    }

    function convertToC(event) {
        event.preventDefault()
        setTemp("unitC")
    }

    function calculateF() {
        return Math.round((celsius * 9/5) + 32);
    }

    if (temp === "unitC") {
        return (
            <div className="Temperature">
                <ul>
                    <li className="cityTemperature">{celsius}°</li>
                    <li className="units">C | <a href="/" onClick={convertToF}>F</a></li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className="Temperature">
                <ul>
                    <li className="cityTemperature">{calculateF()}°</li>
                    <li className="units"><a href="/" onClick={convertToC}>C</a> | F</li>
                </ul>
            </div>
        )
    }
}