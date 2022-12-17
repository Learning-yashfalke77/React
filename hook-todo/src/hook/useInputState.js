import {useState} from 'react'

export default initialValue => {
    const [value, setValue] = useState(initialValue)
    const handleChange = (evt) => {
        setValue(evt.target.value)
    }
    const reset = (evt) => {
        setValue("")
    }
    return [value, handleChange, reset]
}
