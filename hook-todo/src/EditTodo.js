import React, {useContext} from 'react'
import {TextField, Button, ListItemSecondaryAction } from '@mui/material';
import useInputState from './hook/useInputState'
import { DispatchContext } from './context/todos.context';

export default function EditTodo({ id, task, toggleIsEditing }) {

    const [value, updateValue, reset] = useInputState(task)

    const dispatch = useContext(DispatchContext)

    return (
        <div>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                dispatch({type: "edit", id, newTask: value});
                reset()
                toggleIsEditing()
            }} style={{width: "120%"}} >
                <TextField autoFocus onChange={updateValue} fullWidth margin="normal" size="small" label="Edit Todo" value={value}></TextField>
                <ListItemSecondaryAction>
                    <Button type="submit" variant="contained">Submit</Button>
                </ListItemSecondaryAction>
            </form>

        </div>
    )
}
