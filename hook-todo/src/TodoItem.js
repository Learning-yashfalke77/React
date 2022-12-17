import React, { useContext, memo } from 'react'
import { Paper, List, ListItemText, ListItem, Checkbox, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleState from './hook/useToggleState'
import EditTodo from './EditTodo';
import { DispatchContext } from './context/todos.context';

function TodoItem({ id, task, completed }) {

    const [isEditing, toggleIsEditing] = useToggleState(false)

    const dispatch = useContext(DispatchContext)

    return (
        <Paper>
            <List>
                <ListItem>
                    {isEditing
                        ? <EditTodo id={id} task={task} toggleIsEditing={toggleIsEditing} />
                        : <>
                            <Checkbox onClick={() => (dispatch({ type: "toggle", id }))} tabIndex={-1} color="secondary" checked={completed} />
                            <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <EditIcon onClick={toggleIsEditing} aria-label="edit" color="primary" />
                                </IconButton>
                                <IconButton onClick={() => (dispatch({ type: "remove", id }))} >
                                    <DeleteIcon aria-label="delete" color="error" />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </>
                    }

                </ListItem>
            </List>
        </Paper>
    )
}

export default memo(TodoItem)
