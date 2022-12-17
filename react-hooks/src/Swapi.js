import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Swapi() {

    const [num, setNum] = useState(1)
    const [movie, setMovie] = useState("")

    useEffect(  () => {
        const fetchData = async () => {
            const res = await axios.get(`https://swapi.dev/api/films/${num}`)
            setMovie(res.data.title)
            console.log(res.data)
        }
        fetchData()
    }, [num])

    // Only change setState when there is change in num

    return (
        <div>
            <h1>Pick a Movie</h1>
            <h1>You choose {movie}</h1>
            <select value={num} onChange={(evt) => (setNum(evt.target.value))} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    )
}
