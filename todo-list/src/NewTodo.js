import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewTodo.css'

export default class NewTodo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            task: "",
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSubmit= (evt) => {
        evt.preventDefault()
        this.props.createTodo({...this.state,id: uuidv4(), isCompleted: false })
        this.setState({task: ""})
    }

    render() {
        return (
            <form className="NewTodo" onSubmit={this.handleSubmit}>
                <input type="text" name="task" id="task" value={this.state.task} onChange={this.handleChange} />
                <button type="submit">add todo</button>
            </form>
        )
    }
}
