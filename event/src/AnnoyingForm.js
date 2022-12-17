import React, { Component } from 'react'

// Keydown when you click on the character (In keyboard)
//  Key Up when you realse after clicking it

export default class AnnoyingForm extends Component {

    handleKeyUp(evt) {
        console.log(evt)
        if (evt.key === '*') {
            alert('I loveeeeeee thisss')
        } else {
            alert('boooo')
        }
    }
    
    render() {
        return (
            <div>
                <h3>Try typing in here</h3>
                <textarea onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}
