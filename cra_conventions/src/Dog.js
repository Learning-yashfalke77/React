import React from 'react'
import PropTypes from 'prop-types';
import pug from './pug.jpg'
import './Dog.css'

function Dog(prop) {
    return (
        <div className="Dog">
            <h1>Dog</h1>
            <h2>Hello {prop.name} </h2>
            <img className="Dog-image" src={pug} alt="pug" />
        </div>
    )
}

Dog.propTypes = {
    name: PropTypes.string.isRequired
}

Dog.defaultProps = {
    name: 'puppy'
}



export default Dog
