import React, { Component } from 'react'


export default class Dog extends Component {
    render() {
        return (
            <div>
                <h1>Dog - {this.props.name}</h1>
                <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
        )
    }
}
