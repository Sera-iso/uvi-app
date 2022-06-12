import React, { useState } from 'react'
import axios from 'axios'

export default function UvIndex( {city, data} ) {
    const [loaded, setLoaded] = useState(false);
    const [UvIndex, setUvIndex] = useState(null)
    function fetchUvData(response) {
        setUvIndex({
            uvi: response.hourly.uvi
        })
        setLoaded(true)
    }

    if(loaded && city === data.city) {
        return(
            <div>
                {UvIndex.uvi}
            </div>
        )
    } else {
        const apiKey = 'f653f847ce192eb5c3a82eb0539032a2'
        const url = `https://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${apiKey}`
        axios.get(url).then(fetchUvData)

        return null
    }
}