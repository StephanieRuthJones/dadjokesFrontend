import React from 'react'

const DateComponent = () => {
  let today = new Date(),
  date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

    return (
        <div className="container">
            <p>{date}</p>

        </div>
    )
}

export default DateComponent