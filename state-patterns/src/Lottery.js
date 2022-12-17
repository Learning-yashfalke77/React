import React, { useState } from 'react'
import Ball from './Ball'

function Lottery(props) {

    const [nums, setNums] = useState(Array.from({ length: props.maxBalls }))  //making an empty arry

    const generate = () => {
        setNums((curState) => (
            curState.map((n) => (Math.floor(Math.random() * props.maxNum) + 1))
        ))
    }

    const handleClick = (evt) => {
        generate()
    }

    return (
        <div>
            <section className='Lottery'>
                <h1>{props.title}</h1>
                {nums.map((n) => (<Ball num={n} />))}
                <button onClick={handleClick}>Generate </button>
            </section>
        </div>
    )
}

Lottery.defaultProps = {
    title: 'Loto',
    maxBalls: 6,
    maxNum: 40,
}

export default Lottery
