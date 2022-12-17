import React from 'react'
import './Pokedex.css'
import Pokecard from './Pokecard'

function Pokedex(props) {
    return (
        <div className="Pokedex">
            <h1>Total Experience {props.exp} (<span className={props.isWinner ? 'winner' : 'loser'}>{props.isWinner ? 'Winner' : 'loser'}</span>)</h1>
            <div className="Pokedex-cards">
                {props.pokemon.map((p) => (
                    <Pokecard result={props.isWinner ? 'Pokecard-winner' : 'Pokecard-loser'} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
                ))}
            </div>
        </div>
    )
}


export default Pokedex
