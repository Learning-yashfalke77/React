import './App.css';
import React, { memo, useReducer } from 'react'
import PropTypes from 'prop-types'


function reducer(state, action) {
  // if (action.type === "increment") {
  //   return { count: state.count + action.amount }
  // } else if (action.type === "decrement") {
  //   return { count: state.count - action.amount }
  // }

  // Using switchhhhhhh
  switch (action.type) {
    case "increment":
      return { count: state.count + action.amount }

    case "decrement":
      return { count: state.count - action.amount }

    case "rest":
      return { count: 0 }
      

    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", amount: 1 })} >Add 1</button>
      <button onClick={() => dispatch({ type: "increment", amount: 5 })} >Add 5</button>
      <button onClick={() => dispatch({ type: "decrement", amount: 1 })} >Subtract 1</button>
      <button onClick={() => dispatch({ type: "reset"})} >reset</button>
    </div>
  );
}

export default App;
