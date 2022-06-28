import React from 'react'
import UvIndexDisplay from './UvIndexDisplay'
import Temperature from './Temperature'
import DateTime from './DateTime'

import './WeatherOverview.css'

export default function WeatherOverview( {data} ) {
        let icon = `http://openweathermap.org/img/wn/${data.icon}.png`

    return(
        <div className="WeatherOverview">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Temperature celsius={Math.round(data.temp)} />
                    </div>
                    <div className="col-3">
                        <img src={icon} alt={data.description} />
                    </div>
                    <div className="col-6">
                        <DateTime date={data.date}/>
                    </div>
                </div>
            </div>
            <p className="city">{data.city}, {data.country}</p>
            <UvIndexDisplay lon={data.lon} lat={data.lat} />
        </div>
    )
}