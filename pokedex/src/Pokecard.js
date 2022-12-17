import React from 'react'
import PropTypes from 'prop-types'
import './Pokecard.css'

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const FANCY_POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

function Pokecard(props) {
    let imgSrc = `${FANCY_POKE_API}${padToThree(props.id)}.png`
    return (
        <div className={props.result}>
            <h1 className="Pokecard-title">{props.name}</h1>
            <div className="Pokecard-image">
            <img src={imgSrc} alt={props.name} />
            </div>
            <span className='Pokecard-id'>#{padToThree(props.id)}</span>
            <div className="Pokecard-data">Type: {props.type}</div>
            <div className="Pokecard-data">Exp: {props.base_experience}</div>
        </div>
    )
}

Pokecard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    base_experience: PropTypes.number.isRequired,
}

Pokecard.defaultProps = {
    id: 0,
    name: 'Pokemon',
    type: 'none',
    base_experience: 0,
}
export default Pokecard
