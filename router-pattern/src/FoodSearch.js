import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'


export default class FoodSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(evt) {
        this.setState({
            query: evt.target.value
        })
    }

    handleClick(evt) {
        // Save to db 
        alert("Saved to the databaseeeeeeeee")
        // redirect to somewhere
        // this.props.history.push(`/food/${this.state.query}`)
        return <Redirect to={`/food/${this.state.query}`} />

        // This is a really good question to ask!  The history prop is a bit deceiving.  It seems like we are pushing onto an array and therefore mutating a prop, but that's not actually the case.  The history prop is actually an object that has some methods on it, and those methods help you interact with the browser's history stack.  When you call this.props.history.push('/'), you are not storing any data on the history prop itself.  Instead you are calling a method on the history prop (called push, which is confusing) which in turn pushes data onto the Browser history stack.  It acts as an interface to the Browser history.  You are just calling methods that the history prop provides to make your life easier.  Again, great question.  Let me know if that clarifies it or if I can explain further!
    }

    render() {
        return (
            <div>
                <label htmlFor="query">Search Food</label>
                <input onChange={this.handleChange} name="query" type="text" placeholder="search food" value={this.state.query} />
                <Link to={`/food/${this.state.query}`}>Gooooo</Link>
                <button onClick={this.handleClick}>Save to db</button>
            </div>
        )
    }
}

