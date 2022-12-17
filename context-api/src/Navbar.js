import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch, } from '@mui/material';
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles/NavbarStyles'
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext, withLanguageContext } from './contexts/LanguageContext';

const words ={
    english: {
        flag: "🏳️‍🌈",
        search: "Search"
    },
    french: {
        flag: "🏳‍⚧",
        search: "Chercher"
    },
    spanish: {
        flag: "🏳‍🟧‍⬛‍🟧",
        search: "Buscar"
    }
}

class Navbar extends Component {

    static contextType = ThemeContext    //using the state of context api, it will check if it is under Theme Context
    // We can have only one 1 context type 
    // to use second context then using context.consumer

    render() {

        const { classes } = this.props
        const { isDarkMode, toggleTheme } = this.context
        const {language} = this.props.languageContext
        const {flag, search} = words[language]
        

        return (
            // <LanguageContext.Consumer>
            //     {value => (
                    <div>
                        <AppBar position="static" color={isDarkMode ? "primary" : "default"} className={classes.root} >
                            <Toolbar>
                                <IconButton color="inherit" className={classes.menuButton}>
                                    {flag}
                                </IconButton>
                                <Typography className={classes.title} variant="h6" color="inherit" >
                                    App Title 
                                </Typography>
                                <Switch onChange={toggleTheme} color="secondary" />
                                <div className={classes.grow} />
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder={`${search}.. `}
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput
                                        }}
                                    />
                                </div>
                            </Toolbar>
                        </AppBar>
                    </div>
            //     )}
            // </LanguageContext.Consumer>
        )
    }
}

export default withLanguageContext(withStyles(styles)(Navbar))
