import React, { Component } from 'react'
import Coin from './Coin'
import {choice} from './helpers'

export default class CoinContainer extends Component {

    static defaultProps = {
        coins: [
            {sides: 'heads', imgSrc: 'https://qph.fs.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq'}, 
            {sides: 'tails', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoG4mrDlKzMYBWPita8NuyAE6OvZu2wctCwbwaWSsbLI0IFPUEiWPeRuXzYHs5ADF3ZM&usqp=CAU'}, 
        ]
    }

    constructor(props) {
        super(props)
        this.state = {
            currCoin: null,
            nflips: 0,
            nheads: 0,
            ntails: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin() {
        const newCoin = choice(this.props.coins)
        this.setState(st => {
            // --------------------------- Method 1 ----------------------------
            // const newState = { ...st, currCoin: newCoin, nflips: st.nflips + 1}
            // if (newCoin.sides === 'heads') {
            //     newState.nheads += 1
            // } else {
            //     newState.ntails += 1
            // }
            // return newState

            // ----------------------------- Method 2 -----------------------
            return {
                currCoin: newCoin,
                nflips: st.nflips + 1,
                nheads: st.nheads + (newCoin.sides === 'heads' ? 1 : 0),
                ntails: st.ntails + (newCoin.sides === 'tails' ? 1 : 0)
            }
        })
    }

    handleClick(evt) {
        this.flipCoin()
    }

    render() {
        return (
            <div className='CoinContainer'>
                <h1>Lets flip the coin</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin} />}
                <button onClick={this.handleClick}>Flip me</button>
                <p>Out of {this.state.nflips} flips there had been {this.state.nheads} heads and {this.state.ntails} tails </p>
            </div>
        )
    }
}
