import React, {useState} from 'react'

// Usestate is used to create state in functional based components
// usestate returns array of 2 things
// 1) peice of state 
// 2) function to update piece of state

export default function CountState() {

    const [count, setCount] = useState(0)

    const handleCount = (evt) => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>The counter is {count} </h1>
            <button onClick={handleCount}>Click me</button>
        </div>
    )
}
