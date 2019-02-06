import React from 'react'

const Image = (props) => {
    return (
        <div className="container">
            <img src={props.url} className="img-fluid" alt="Responsive image" />
        </div>
    )
}

export default Image