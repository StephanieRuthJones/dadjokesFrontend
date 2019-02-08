import React from 'react'

const DateComponent = () => {

  let today = new Date()
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];ç
  let date = today.getDate() + '-' + (month[today.getMonth()]) + '-' + today.getFullYear();


    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December']
    return (
        <div className="date container">
            <p>{date}</p>
        </div>
    )
}

export default DateComponent