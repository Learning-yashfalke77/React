import useToggle from '../hooks/useToggleState'
import React, {createContext} from 'react'

export const ThemeContext = createContext()

export  function ThemeProvider(props) {

    const [isDarkMode, toggleTheme] = useToggle(false)

    return (
        <div>
            <ThemeContext.Provider value={{isDarkMode, toggleTheme}} >
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}
