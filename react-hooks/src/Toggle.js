import React, {useState} from 'react'
import useToggle from './Hooks/useToggle'


export default function Toggle() {

    const [isHappy, toggleIsHappy] = useToggle(true)
    const [isBroken, toggleIsBroken] = useToggle(true)

    return (
        <div>
            <h1 onClick={toggleIsHappy} > {isHappy ? "😅" : "🥺" } </h1>
            <h1 onClick={toggleIsBroken} > {isBroken ? "❤️" : "💔" }</h1>
        </div>
    )
}
