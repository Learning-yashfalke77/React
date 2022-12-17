import {useState} from 'react'

export default function useToggleState(initialVal) {
    // Call usestate, "reserve peice of state"
    const [state, setState] = useState(initialVal)
    const toggle = () => {
        setState(!state)
    }
    return [state, toggle]
}