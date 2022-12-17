import React, {useContext} from 'react'
import { Paper, List,  Divider } from '@mui/material';
import TodoItem from './TodoItem';
import { TodosContext } from './context/todos.context';


export default function TodoList(props) {

    const todos = useContext(TodosContext)

    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                        <TodoItem key={todo.id} task={todo.task}  completed={todo.completed} id={todo.id} />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )
}