import React, { Component } from 'react'

export default class Rando extends Component {

    constructor(props){
        super(props)
        this.state = {
            num: 0
        }
        this.maketimer()
    }
    

    maketimer(){
        setInterval(() => {
            this.setState({num: Math.floor(Math.random() * this.props.maxNum)})
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
            </div>
        )
    }
}
