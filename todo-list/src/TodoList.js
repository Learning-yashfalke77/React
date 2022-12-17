import React, { Component } from 'react'
import NewTodo from './NewTodo'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { task: "Walk a fish", id: uuidv4(), isCompleted: false }
            ]
        }
    }

    create = (newTodo) => {
        this.setState({
            todos: [...this.state.todos, newTodo,]
        })
    }

    remove = (id) => {
        this.setState({
            todos: this.state.todos.filter(t => (t.id !== id))
        })
    }

    update = (id, updatedTask) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, task: updatedTask }
                }
                return todo
            })
        })
    }

    toggleCompletion = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                }
                return todo
            })
        })
    }

    render() {
        return (
            <div className="TodoList">
                <h1>TODO LIST ! <span>A Simple React Todo list App</span> </h1>
                <ul>
                    {this.state.todos.map(t => (
                        <Todo key={t.id} task={t.task} id={t.id} remove={this.remove} update={this.update} isCompleted={t.isCompleted} toggleCompletion={this.toggleCompletion} />
                    ))}
                </ul>
                <NewTodo createTodo={this.create} />
            </div>
        )
    }
}
