import React, {useState, useEffect} from 'react'
// UseEffect runs for every single render

export default function Clicker() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => (setCount(count + 1))} >f**k me</button>
        </div>
    )
}
