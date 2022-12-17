import React from 'react'
import PropTypes from 'prop-types'
import './Die.css'


function Die(props) {
    return (
        <i className={`${props.roll && 'shake'} Die-icon fas fa-dice-${props.face}`}></i>
    )
}

Die.propTypes = {
    face: PropTypes.string.isRequired,
}

Die.defaultProps = {
    face: 'one'
}

export default Die
