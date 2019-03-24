import React from 'react'

const DateComponent = () => {

    let today = new Date()
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = (month[today.getMonth()]) + ' ' + today.getDate() + ', ' + today.getFullYear();


    return (
        <div className="date container">
            <p>{date}</p>
        </div>
    )
}

export default DateComponent