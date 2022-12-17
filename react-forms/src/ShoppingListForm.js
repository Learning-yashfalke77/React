import React, { Component } from 'react'

export default class ShoppingListForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "", qty: "",
        }
    }

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addItem(this.state)
        this.setState({name: '', qty: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
                <label htmlFor="qty">qty</label>
                <input type="number" name="qty" id="qty" placeholder="qty" value={this.state.qty} onChange={this.handleChange} />
                <button type="submit">Add Item</button>
            </form>
        )
    }
}
