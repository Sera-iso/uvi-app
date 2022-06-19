import React, { useState } from 'react'
import axios from 'axios'

import './UVIndex.css'

export default function UvIndex( {lon, lat} ) {
    const [loaded, setLoaded] = useState(false)
    const [UvIndex, setUvIndex] = useState("")
    
    function fetchUvData(response) {
        setUvIndex({
            uvi: response.data.current.uvi,
            lat: response.data.lat,
            lon: response.data.lon
        })
        setLoaded(true)
    }
    function UVRecommendation() {
        if(UvIndex.uvi <2) {
            return (
                <p>low risk: apply sunscreen and wear hat and UPF clothes</p>
            )
        } else {
            return (
                <p>high risk: apply sunscreen and stay indoor</p>
            )
        }
    }

    if((loaded && lat === UvIndex.lat) && (loaded && lon === UvIndex.lon)) {
        return(
            <div className="UVIndex">
                Uv Index: {UvIndex.uvi}
                {UVRecommendation()}
            </div>
        )
    } else {
        const apiKey = 'f653f847ce192eb5c3a82eb0539032a2'
        const url = `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&appid=${apiKey}`
        axios.get(url).then(fetchUvData)
        
        return null;
    }
    }