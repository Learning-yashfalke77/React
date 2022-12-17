// ------------------------- Method bind with argumentss ----------------------------------
import React, { Component } from 'react'

export default class ButtonList extends Component {

    static defaultProps = {
        colors : [
            '#e056fd', '#eb4d4b', '#badc58', '#f0932b'
        ]
    }

    state = {
        color: 'cyan'
    }

    changeColor (newColor){
        this.setState({color: newColor})
    }

    render() {
        return (
            <div style={{backgroundColor:this.state.color}} >
                {this.props.colors.map( c => {
                    const colorObj = {backgroundColor: c}
                    return <button style={colorObj} onClick={() => this.changeColor(c)}>f me!!!!!!</button>
                })}
            </div>
        )
    }
}
