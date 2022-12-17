import React, { Component } from 'react'
// import Game from './Game'
// import Rando from './Rando'
// import Button from './Button'
// import Randbtn from './Randbtn'
import RandFunc from './RandFunc'
import './App.css'
// State 
// Internal data specific to component
// Data that can changes over

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Game /> */}
        {/* <Rando maxNum={7}  /> */}
        <RandFunc />
      </div>
    )
  }
}