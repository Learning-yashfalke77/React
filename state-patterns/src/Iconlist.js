import React, { Component } from 'react'

export default class Iconlist extends Component {

    static defaultProps = {
        options: [
            'angry',
            'anchor',
            'archive',
            'at',
            'archway',
            'baby',
            'bell',
            'bolt',
            'bone',
            'car',
            'city',
            'clou',
            'couch',
        ]
    }

    constructor(props) {
        super(props)
        this.state = {
            icons: []
        }
        this.addIcon = this.addIcon.bind(this)
    }

    // Badway of updating arrray

    // addIcon() {
    //     let idx = Math.floor(Math.random() * this.props.options.length)
    //     let newIcon = this.props.options[idx]
    //     let icons = this.state.icons
    //     icons.push(newIcon)
    //     this.setState({icons: icons})
    // }

    // goodway of updating array 
    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length)
        let newIcon = this.props.options[idx]
        this.setState({icons: [...this.state.icons, newIcon]})
    }

    render() {
        const icons = this.state.icons.map(i => (<i className={`fas fa-${i}`}></i>))

        return (
            <div>
                <h1>Icons {icons}</h1>
                <button onClick={this.addIcon}>Add Icon</button>
            </div>
        )
    }
}
