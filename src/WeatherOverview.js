import React from 'react'
import Temperature from './Temperature'
import DateTime from './DateTime'

export default function WeatherOverview( {data} ) {
        let icon = `http://openweathermap.org/img/wn/${data.icon}.png`
return(
    <div className="WeatherOverview">
        <h1>{data.city}, {data.country}</h1>
        <Temperature celsius={Math.round(data.temp)} />
        <img src={icon} alt={data.description} />
        <p>{data.condition}</p>
        <DateTime date={data.date}/>
    </div>
)
}