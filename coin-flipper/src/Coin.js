import React, { Component } from 'react'

export default class Coin extends Component {
    render() {
        return (
            <div>
                <img src={this.props.info.imgSrc} alt={this.props.info.sides} />
            </div>
        )
    }
}

