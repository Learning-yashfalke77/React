import React, { useState } from 'react'
import useInputState from './Hooks/useInputState'

export default function SimpleForm() {

    const [email, updateEmail, resetEmail] = useInputState("")
    const [password, updatePassword, resetPassword] = useInputState("")

    return (
        <div>
            <h1>The value is: {email}</h1>
            <input placeholder="email" value={email} onChange={updateEmail} />
            <input type="password" placeholder="Password" value={password} onChange={updatePassword} />
            <button onClick={resetEmail}>Reset Email</button>
            <button onClick={resetPassword}>Reset Password</button>
        </div>
    )
}
