import React from 'react'
import {formatTime} from './TimeHelper'

export default function DateTime( {date} ) {
    let hour = date.getHours()
    let minutes = date.getMinutes()
    return(
        <div>
            <p>Time of search: {formatTime(hour)}:{formatTime(minutes)}</p>
        </div>
    )
}