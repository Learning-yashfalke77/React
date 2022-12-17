import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, { id: uuidv4(), task: action.task, completed: false }]

        case "remove":
            return state.filter(todo => (todo.id !== action.id))

        case "toggle":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )

        case "edit":
            return state.map(todo => 
                todo.id === action.id ? {...todo, task: action.newTask} : todo
            )
        default:
            return state;
    }
}

export default reducer