import React, { Component } from 'react'

export default class Randbtn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            no: 1
        }
        this.randClick = this.randClick.bind(this)
    }

    randClick() {
        this.setState({no: Math.floor(Math.random() * 10 )})
    }

    render() {
        return (
            <div>
                <h1>The Number is : {this.state.no}</h1>
                {(this.state.no === 7) && <h2>YOU Win</h2>}
                {!(this.state.no === 7) && <button onClick={this.randClick}>Clck me</button>}
            </div>
        )
    }
}
