import React from 'react'

const Image = (props) => {
    return (

        <div className="image-container">
            <img className="img-fluid" src={props.url} alt="Responsive daddy" />

        </div>
    )
}

export default Image