import React, { Component } from 'react'
import StoreContext from '../contexts/storeContexts'
import { loadBug } from "../store/bugs";

export default class Bugs extends Component {
    static contextType = StoreContext
    state = {
        bugs: []
    }

    componentDidMount() {
        const store = this.context
        this.unsubscribe = store.subscribe(() => {
            const bugsInStore = store.getState().entities.bugs.list
            console.log(store.getState());
            if (this.state.bugs !== bugsInStore) {
                this.setState({ bugs: bugsInStore })
            }
        })
        store.dispatch(loadBug())
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.bugs.map(bug => (<li key={bug.id}>{bug.description}</li>))}
                </ul>
            </div>
        )
    }
}

