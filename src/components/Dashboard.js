import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function Dashboard() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout(){
        setError("")
        try{
            await logout()
            history.push('/login')
        }catch{
            setError("Failed to logout")
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <h2>Hello</h2> {currentUser.email}

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
