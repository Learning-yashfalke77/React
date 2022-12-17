import React, {useState} from 'react'

function RandFunc() {

    const [num, setNum] = useState(0)   //giving value 0 to num and we can update num form setNum

    const handleRand = (evt) => {
        setNum(Math.floor(Math.random() * 10))
    }

    return (
        <div>
            <h1>The Number is: {num}</h1>
            {num === 7 && <h2>YOU WIN !!!</h2>}
            {!(num === 7) && <button onClick={handleRand}>click me</button>}
        </div>
    )
}

export default RandFunc
