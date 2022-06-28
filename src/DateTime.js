import React from 'react'
import {formatTime} from './utils'

import './DateTime.css' 

export default function DateTime( {date} ) {
    let hour = date.getHours()
    let minutes = date.getMinutes()
    return(
        <div className="DateTime">
            <p>Time of search: {formatTime(hour)}:{formatTime(minutes)}</p>
        </div>
    )
}