import React, { Component } from 'react'
import axios from 'axios'
import './ZenQuote.css'


export default class ZenQuote extends Component {

    constructor(props) {
        super(props)
        console.log("Constructor")
        this.state = {
            quote: "",
            isLoading: true,
        }
    }

    async componentDidMount() {
        console.log('Did Mount')
        const res = await axios.get("https://api.github.com/zen")
        this.setState({ quote: res.data, isLoading: false, })
    }

    componentDidUpdate() {
        console.log('update')
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Always Remember</h1>
                {this.state.isLoading ? (
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                ) : (
                    <h3>{this.state.quote}</h3>
                )}
            </div>
        )
    }
}
