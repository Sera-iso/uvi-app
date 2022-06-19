import React, { useState } from 'react'
import axios from 'axios'

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

    if((loaded && lat === UvIndex.lat) && (loaded && lon === UvIndex.lon)) {
        return(
            <div>
                <span>Uv Index: {UvIndex.uvi}</span>
            </div>
        )
    } else {
        const apiKey = 'f653f847ce192eb5c3a82eb0539032a2'
        const url = `https://api.openweathermap.org/data/2.5/onecall?lon=${lon}&lat=${lat}&appid=${apiKey}`
        axios.get(url).then(fetchUvData)
        
        return null;
    }
    }