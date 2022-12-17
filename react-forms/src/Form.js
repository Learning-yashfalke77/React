import React, { Component } from 'react'

// -------------------------------------------------- for input we use controlled componenets -----------

//------------------------------------------- New updates in es 2015 ---------------------------
let microchip = 12322
let info = {
    [microchip]: 'blue steele'    //It will compute the value of microchip inside info object
}
console.log(info)

// ------------------------------------ we are going to use above for handling multiple input on same handle click---------------

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        alert(`You entered ${this.state.username}`)
        this.setState({ username: '' })
    }

    // Inputs attribute name and states name should be same

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
