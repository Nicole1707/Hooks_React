import React, { useContext } from 'react'
import { UserContext } from './UserContext'


export const LoginScreen = () => {
    // Obtener la referencia al userContext
    //set User
    //{ }
    const newuser = {
        Id: 1234,
        name: 'Nicole'
    }
    const { user, setUser } = useContext(UserContext)
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button className="btn btn-primary"
                onClick={() => setUser({ ...user, newuser })} >
                    Login
            </button>
        </div >
    )
}
