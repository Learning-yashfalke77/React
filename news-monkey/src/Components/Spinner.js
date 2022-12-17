import React, { Component } from 'react'
import '../css/Spinner.css'

export default class Spinner extends Component {
    render() {
        return (
            <div className="Spinner d-flex justify-content-center align-items-center">
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
            </div>
        )
    }
}
