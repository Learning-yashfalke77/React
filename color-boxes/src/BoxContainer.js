import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

export default class BoxContainer extends Component {

    static defaultProps = {
        colors: ['red', 'green', 'blue', 'orange', 'yellow'],
        numBoxes: 18
    }

    render() {

        const boxes = Array.from({ length: this.props.numBoxes }).map(() => (<Box colors={this.props.colors} />))

        return (
            <div className='BoxContainer' >
                {boxes}
            </div>
        )
    }
}
