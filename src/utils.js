export function formatTime(value) {
    if(value < 10) {
        return `0${value}`
    } else {
        return `${value}`
    }
}

export function pickColorForUvIndex(value) {
    if (value < 3) {
        return 'green'
        } 
    else if (value > 2 && value < 6) {
            return 'yellow'
    } else {
        if (value > 5 && value < 8) {
                    return 'orange'
            }
        else if (value > 7 && value < 11) {
                    return 'red'
            } else {
                    return 'purple'
            }
        }   
    }

export function pickGradientForUvIndex(value) {
    if (value < 3) {
        return `linear-gradient(#dbf7a8,#8cdc6e, #58ab39)`
        } 
    else if (value > 2 && value < 6) {
            return `linear-gradient(#fff8a8,#ffef54, #ffe700)`
    } else {
        if (value > 5 && value < 8) {
                    return `linear-gradient(#ffc9aa,#fba16f, #f97a33)`
            }
        else if (value > 7 && value < 11) {
                    return `linear-gradient(#fbb6bb,#e96f78, #df3340)`
            } else {
                    return `linear-gradient(#e1d6ff,#ab98e0, #886dd3)`
            }
        }   
    }