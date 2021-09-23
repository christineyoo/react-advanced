import React, {useContext} from 'react'
import UserContext from './userContext'

export default function Login() {
    const userContext = useContext(UserContext)
    return (
        <div><button onClick={() => userContext.onLoggedIn()}>Login</button></div>
    )
}
