import React, { useState } from 'react'

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
                <h2>
                    {celsius}
                </h2>
                <p>Celsius | <a href="/" onClick={convertToF}>Fahrenheit</a></p>
            </div>
        )
    } else {
        return (
            <div className="Temperature">
                <h2>{calculateF()}
                </h2>
                <p><a href="/" onClick={convertToC}>Celsius</a> | Fahrenheit</p>
            </div>
        )
    }
}