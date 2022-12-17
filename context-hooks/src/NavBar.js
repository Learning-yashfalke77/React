import React, { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch, } from '@mui/material';
import { withStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles/NavbarStyles'
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';

function NavBar(props) {

    const { classes } = props
    const words = {
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
    const {isDarkMode, toggleTheme} = useContext(ThemeContext)
    const { language} = useContext(LanguageContext)
    const {flag, search} = words[language]


    return (
        <div>
            <AppBar position="static" color={isDarkMode? "primary" : "default"} className={classes.root} >
                <Toolbar>
                    <IconButton color="inherit" className={classes.menuButton}>
                        {flag}
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit" >
                        App Title
                    </Typography>
                    <Switch color="secondary" onChange={toggleTheme} />
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder={search}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(NavBar)