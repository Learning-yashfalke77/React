import React, { createContext } from 'react'
import todoReducer from '../reducers/todoReducer'
import useLocalStorageReducer from '../hook/useLocalStorageReducer'

const defaultTodo = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release the lady bugs into garden", completed: true }
]

export const TodosContext = createContext()

export const DispatchContext = createContext()


export function TodosProvider(props) {

    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodo, todoReducer)

    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>

        </TodosContext.Provider>
    )
}

// Error from context 
// As soon as state of context is changed it passes the new data to component and it causes al the components to rerender