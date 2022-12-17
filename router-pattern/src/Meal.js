import React from 'react'
import {useParams} from 'react-router-dom'

export default function Meal() {

    const {foodName, drinkName} = useParams()
    const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`
    const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`

    return (
        <div>
            <h1>This is a Meal of {foodName} + {drinkName}</h1>
            <img src={foodUrl} alt="" />
            <img src={drinkUrl} alt="" />
        </div>
    )
}
