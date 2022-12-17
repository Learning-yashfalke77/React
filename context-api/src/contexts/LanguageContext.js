import React, { Component, createContext } from 'react'

export const LanguageContext = createContext()
// Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

export class LanguageProvider extends Component {

    state = {
        language: "french",
    }

    toggleTheme =  () => {
        this.setState({
            isDarkMode: !this.state.isDarkMode
        })
    }

    changeLanguage = (evt) => {
        this.setState({language: evt.target.value})
    }

    render() {
        return (
            <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}} >
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}


export const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
)