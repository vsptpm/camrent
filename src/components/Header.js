import React, { useState }  from 'react'
import "./Header.css"
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
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
        <div className="header">
            <div className="header-left">
                <MenuIcon/>
                <h2>CamRent</h2>
            </div>
            <div className="header-right">
                <AccountCircleIcon/>
                {currentUser.email}
                <ExitToAppIcon onClick={handleLogout}/>

            </div>

        </div>
    )
}

export default Header
