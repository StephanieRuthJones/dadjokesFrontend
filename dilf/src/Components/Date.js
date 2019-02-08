import React from 'react'

const DateComponent = () => {
    let today = new Date(),
        date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    console.log(today.getMonth())

    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December']
    return (
        <div className="date container">
            <p>{date}</p>
        </div>
    )
}

export default DateComponent