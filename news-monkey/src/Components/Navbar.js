import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{backgroundColor: 'white'}}>
                <div className="container-fluid">
                    <NavLink exact className="navbar-brand" to="/"><i className="far fa-newspaper"></i>  News Monkey</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">General</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/buisness">Buisness</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/entertainment">Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/health">Health</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/science">Science</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/sports">Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active" className="nav-link" to="/technology">Technology</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
