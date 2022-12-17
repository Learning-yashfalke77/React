import React from 'react'
import { Typography, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import TodoList from './TodoList'
import TodoForm from './TodoForm'



export default function TodoApp() {

    return (

        <Paper elevation={0} style={{ padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa" }}>
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar >
                    <Typography color="inherit">Todos with hooks</Typography>
                </Toolbar>
            </AppBar>

            <Grid container justifyContent="center" style={{marginTop: "4rem"}} >
                <Grid item xs={11} lg={4} md={8}>
                    <TodoForm />
                    <TodoList />
                </Grid>
            </Grid>

        </Paper>

    )
}
