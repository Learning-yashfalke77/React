// Call usestate
// return piece of state and a function to toggle it

// Defining customm hoooks

import {useState} from 'react'

export default function useToggle(initialVal) {
    // Call usestate, "reserve peice of state"
    const [state, setState] = useState(initialVal)
    const toggle = () => {
        setState(!state)
    }
    return [state, toggle]
}


