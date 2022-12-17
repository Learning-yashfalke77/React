import React from 'react'
import PropTypes from 'prop-types'
import './Ball.css'


function Ball(props) {
    return (
        <div className='Ball'>
            {props.num}
        </div>
    )
}

Ball.propTypes = {
    num: PropTypes.number.isRequired
}

export default Ball
