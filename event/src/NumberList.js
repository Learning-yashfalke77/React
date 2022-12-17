import React, { Component } from 'react'
import NumberItem from './NumberItem'

// --------------------------- Passing Number function  to child componenet numberitem -------------------

export default class NumberList extends Component {

    constructor(props) {
        super(props)
        this.remove= this.remove.bind(this)
    }

    state = {
        nums: [1, 2, 3, 4, 5]
    }

    remove(num) {
        this.setState((ct) => ({
            nums: ct.nums.filter((n) => (n!== num)),
        }))
    }

    // Whenever we create list of component using map or looping add key so react maps with components

    render() {

        let nums = this.state.nums.map((n, idx) => (<NumberItem key={n} value={n} remove={this.remove} />)) //sending to child component

        return (
            <div>
                <h1>First Number List</h1>
                <ul>
                    {nums}
                </ul>
            </div>
        )
    }
}
