import React, {useState} from 'react'
import axios from 'axios'
import WeatherOverview from './WeatherOverview'

import './Search.css'

export default function Search( {defaultCity} ) {
    const [city, setCity] = useState(defaultCity)
    const [weather, setWeather] = useState({ search: false })
    
    function fetchData(response) {
        setWeather({
            search: true,
            city: response.data.name,
            country: response.data.sys.country,
            temp: response.data.main.temp,
            icon: response.data.weather[0].icon,
            description: response.data.weather.description,
            date: new Date(response.data.dt * 1000),
            lon: response.data.coord.lon,
            lat: response.data.coord.lat
        })
    }

    function searchCity() {
        const apiKey = 'f653f847ce192eb5c3a82eb0539032a2'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(url).then(fetchData)
    }
    

    function handleSubmit(event) {
        event.preventDefault();
        searchCity()
    }
    
    
    function fetchCity(event) {
        setCity(event.target.value)
    }

    if(weather.search) {
        return(
            <div className="Search">
                <form className="input-group" onSubmit={handleSubmit} >
                    <input type="search" className="form-control fw-light" placeholder="Enter a city" autoFocus onChange={fetchCity} />
                    <input type="submit" className="btn btn-dark" value="Search" />
                </form>
                <WeatherOverview data={weather} />
            </div>
        )    
    } else {
        searchCity()
        return null
    }
}