import React, { Component } from 'react'

export default class Timer extends Component {

    constructor(props) {
        super(props)
        console.log('In constructor')
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        console.log("In component did Mount")
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000);
    }

    render() {
        console.log("In render")
        return (
            <div>
                <h1>{this.state.time.getSeconds()}</h1>
            </div>
        )
    }
}
