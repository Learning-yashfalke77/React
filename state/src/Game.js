import React, { Component } from 'react'

// State should be initialised , props need not to be initialised

export default class Game extends Component {

    // ------------------------------------- 1st method ------------------------------
    // constructor(props) {
    //     super(props)    //If we want to acess props in constructor then pass it to the Componenet constructor
    //     this.state  = {
    //         score: 0,
    //         gameOver: false,
    //     }
    // }

    // -------------------------------------- 2nd Method --------------------------------
    // This is a newer syntax (Not valid in javascript) babel helps us to use that
    // Babel automatically converts this syntax to method 1 (But we need to make plugin active which alreday on in create-react-app)
    state = {
        score:99,
        gameOver: false,
    }

    // Can change the value by using inbuild setState method , should not change state in constructor
    // Can cannot change state directly because it changes asynchronously, react changes the state on its own
    // Consider setState is a request not a direct immediate for performance react may delay it


    render() {
        return (
            <div className='Game'>
                <h1>You score is {this.state.score}</h1>
            </div>
        )
    }
}
