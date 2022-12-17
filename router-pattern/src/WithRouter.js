import React, { Component } from 'react'
import { withRouter } from 'react-router'
// Here navbar do not have connection with router , but we have to redirect somewhere in navbar use withRouter

class WithRouter extends Component {

    handleClick = (evt) => {
        alert('Logged in')
        this.props.history.push('/food/salmon')
    }
    handleClicks = (evt) => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Login</button>
                <button onClick={this.handleClicks}>Go back</button>
            </div>
        )
    }
}

export default withRouter(WithRouter)
