import React, { Component } from 'react'

export default class UpdateState extends Component {

    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }

        this.singleKill = this.singleKill.bind(this)
        this.tripleKill = this.tripleKill.bind(this)
    }

    singleKill() {
        // this.setState({ score: this.state.score + 1 })  bad way
        this.setState((st) => ({score: st.score + 1}))

    }

    incrementCounter(oldState){
        return {score: oldState.score + 3}
    }


    tripleKill() {
        this.setState(this.incrementCounter) //use callback to update it
    }


    render() {
        return (
            <div>
                <h1>The Score is {this.state.score} </h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Tripple kill</button>
            </div>
        )
    }
}
