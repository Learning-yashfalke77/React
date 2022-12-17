import React, {useContext} from 'react'
import { Paper, TextField, Button} from '@mui/material';
import useInputState from './hook/useInputState'
import { DispatchContext } from './context/todos.context';

export default function TodoForm() {

    const [value, updateValue, resetValue] = useInputState("")

    const dispatch = useContext(DispatchContext)

    return (
        <Paper style={{margin: "1rem 0rem" ,padding: "0rem 1rem"}} >
            <form onSubmit={(evt) => {
                evt.preventDefault()
                dispatch({type: "add", task: value})
                resetValue()
            }}>
                <TextField value={value} size="small" onChange={updateValue} margin="normal" label="Add new Todo" fullWidth />
                <Button type="submit" style={{marginBottom: "1rem"}} variant="contained" color="secondary" >Add new Todo</Button>
            </form>
        </Paper>
    )
}
