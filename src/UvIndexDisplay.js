import React, { useState } from 'react'
import axios from 'axios'
import Recommendation from './Recommendations'
import { pickColorForUvIndex } from './utils'
import { pickGradientForUvIndex } from './utils'

import './UVIndexDisplay.css'

export default function UvIndexDisplay( {lon, lat} ) {
    const [loaded, setLoaded] = useState(false)
    const [uvIndex, setUvIndex] = useState("")
    
    function uvApiCall() {
        const apiKey = 'f653f847ce192eb5c3a82eb0539032a2'
        const url = `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&appid=${apiKey}`
        axios.get(url).then(fetchUvData)
    }

    function fetchUvData(response) {
        setUvIndex({
            uvi: Math.round(response.data.current.uvi),
            lat: response.data.lat,
            lon: response.data.lon,
            time: new Date(response.data.current.dt * 1000)
        })
        setLoaded(true)
    }

    function uvRisk() {

        if (uvIndex.uvi < 3) {
            return 'Low Risk'
                } 
        else if (uvIndex.uvi > 2 && uvIndex.uvi < 6) {
            return 'Medium Risk'
                } else {
                    if (uvIndex.uvi > 5 && uvIndex.uvi < 8) {
                        return 'High Risk'
                            }
                            else if (uvIndex.uvi > 7 && uvIndex.uvi < 11) {
                                return 'Very High Risk'
                                    } else {
                                        return 'Maximum Risk'
                                            }
                                        }
                                    }

    if((loaded && lat === uvIndex.lat) && (loaded && lon === uvIndex.lon)) {
        return(
            <div className="UVIndexDisplay">
                <style>{`body { background: ${pickGradientForUvIndex(uvIndex.uvi)} fixed}`}</style>
                <div className={`loader ${pickColorForUvIndex(uvIndex.uvi)}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="uvi">
                     <h2 className="indexNumber">{uvIndex.uvi}</h2>
                     <p className="riskFactor">{uvRisk()}</p>
                </div>
                <Recommendation date={uvIndex.time} uvIndex={uvIndex}/>
            </div>
        )
    } else {
        uvApiCall()
        return null;
    }
    }