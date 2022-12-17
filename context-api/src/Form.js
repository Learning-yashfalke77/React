import { Avatar, Button, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import styles from './styles/FormStyles'
import { withStyles } from '@mui/styles';


import React, { Component } from 'react'
import { LanguageContext } from './contexts/LanguageContext';

const words ={
    english: {
        email: "Email",
        signIn: "sign in",
        password: "Password",
        rememberMe: "Remember Me"
    },
    french: {
        email: "Adresse Electronique",
        signIn: "Se Connector",
        password: "Mot de Passe",
        rememberMe: "Souviens-toi De"
    },
    spanish: {
        email: "Correo Electronico",
        signIn: "Registrarse",
        password: "Contrasena",
        rememberMe: "Recuerdame"
    }
}


class Form extends Component {

    static contextType = LanguageContext

    render() {
        const { classes } = this.props;
        const {language, changeLanguage} = this.context
        const {email, signIn, password, rememberMe} = words[language]

        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography variant='h5'>{signIn}</Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value='english'>English</MenuItem>
                        <MenuItem value='french'>French</MenuItem>
                        <MenuItem value='spanish'>Spanish</MenuItem>
                    </Select>
                    <form className={classes.form} >
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel color="secondary" htmlFor='email'>{email}</InputLabel>
                            <Input color="secondary" id='email' name='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel color="secondary" htmlFor='password'>{password}</InputLabel>
                            <Input color="secondary" id='password' name='password' autoFocus />
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox color='primary' />}
                            label={rememberMe}
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            fullWidth
                            color='primary'
                            className={classes.submit}
                        >
                            {signIn}
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Form)
