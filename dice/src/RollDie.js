import React, { useState } from 'react'
import Die from './Die'
import './RollDie.css'

function RollDie(props) {

    const [die1, setDie1] = useState('one')
    const [die2, setDie2] = useState('one')
    const [isRolling, setIsRolling] = useState(false)

    const roll = (evt) => {
        const newDie1 = props.sides[Math.floor(Math.random() * props.sides.length)]
        const newDie2 = props.sides[Math.floor(Math.random() * props.sides.length)]
        setDie1(newDie1)
        setDie2(newDie2)
        setIsRolling(true)

        // Wait rolling for 1 sec afte that to normal
        setTimeout(() => {
            setIsRolling(false)
        }, 1000);

    }

    return (
        <div className='RollDie'>
            <div>
                <Die face={die1} roll={isRolling} />
                <Die face={die2} roll={isRolling} />
            </div>
            <button onClick={roll} disabled={isRolling}>
                {isRolling ? 'Rolling ...' : 'Roll Die'}
            </button>
        </div>
    )
}

RollDie.defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
}

export default RollDie
