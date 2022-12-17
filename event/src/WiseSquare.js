import React, { Component } from 'react'
import './WiseSquare.css'

export default class WiseSquare extends Component {

    static defaultProps = {
         msgs : [
            'A fool thinks himself to be wise, but wise knows himself tobe fool',
            'Educating the mind without educating the heart is no education at all' ,
            'Not everything that is faced that can be changed , but nothing can be changed until it is faced'
        ]
    }

    dispenseWisdom() {
        let msgs = this.props.msgs    //To acces this.props.msgs we have to bind with it 
        let randIdx = Math.floor(Math.random() * msgs.length)
        console.log(msgs[randIdx])
    }

    render() {
        return (
            <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
                😊
            </div>
        )
    }
}


// There are three ways to bind
// 1) Inline : onClick={this.handleClick.bind(this)}
// 2) bind it in the cobnstructor
// 3)  use inline arrow function  : <button onClick={() => this.handleClick()}>
// 4) arrow function for handle click directly
// --------------------------- prefferd are 4 or 2nd