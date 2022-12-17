import React, { Component } from 'react'

export default class Button extends Component {

    // --------------------------- Method 1 -----------------------------------
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         clicked: false,
    //     }
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick(evt){
    //     this.setState({clicked: true})
    // }


    // -------------------------------------- Method 2 ------------------------
    state = {
        clicked: false
    }

    // Here we do not require to bind it does it automatically
    handleClick = (evt) => {
        this.setState({clicked: true})
    }

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked' : 'Not clicked'}</h1>
                <button onClick={this.handleClick}>Yoo</button>
            </div>
        )
    }
}
