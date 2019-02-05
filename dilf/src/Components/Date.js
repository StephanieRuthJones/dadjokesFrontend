import React from 'react'

const DateComponent = () => {
  let today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <div className="container">
            <p>{date}</p>
        </div>
    )
}

export default DateComponent