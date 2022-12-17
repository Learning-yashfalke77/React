import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm'
import { v4 as uuidv4 } from 'uuid';

export default class ShoppingList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                { name: "milk", qty: "2 packets", uuid: uuidv4() },
                { name: "bread", qty: "1 packet", uuid: uuidv4() }
            ]
        }
    }

    addItem = (item) => {
        let newItem = {...item, uuid: uuidv4()}
        this.setState(st => ({
            items: [...st.items, newItem]
        }))
    }

    render() {
        return (
            <div>
                <h1>Shopping Lists</h1>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.uuid}>{item.name} : {item.qty}</li>
                    ))}
                </ul>
                <ShoppingListForm addItem={this.addItem} />
            </div>
        )
    }
}
