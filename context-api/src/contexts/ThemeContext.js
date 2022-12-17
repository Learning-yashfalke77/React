import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()
// Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

export class ThemeProviderss extends Component {

    state = {
        isDarkMode: false,
    }

    toggleTheme =  () => {
        this.setState({
            isDarkMode: !this.state.isDarkMode
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}} > {/* this value will be provided to children */}
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

// There are two ways to access the context to children props
// 1) Context type
// 2) context consumer