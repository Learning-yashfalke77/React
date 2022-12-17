import React, { Component } from 'react'
import { Redirect } from 'react-router'

// There are two ways to use redirect component 
// 1) using as a tag inside render method
// 2) using inside handle event function


export default class Food extends Component {
    render() {
        const url = `https://source.unsplash.com/1600x900/?${this.props.name}`
        return (
            <div className="Food">
                {/\d/.test(this.props.match.params.name)? 
                <Redirect to="/" /> : 
                <div><h1>I love to eat {this.props.match.params.name}</h1>
                <img src={url} alt={this.props.match.params.name} /></div>
                }
                
            </div>
        )
    }
}
