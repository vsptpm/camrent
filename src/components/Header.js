import React, { useState }  from 'react'
import "./Header.css"
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';


function Header() {
    const { logout } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    async function handleLogout(){
        setError("")
        try{
            await logout()
            history.push('/login')
        }catch{
            setError("Failed to logout")
            console.log(error);
        }
    }
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon/>
                <h2>CamRent</h2>
            </div>
            <div className="header-right">
                <Tooltip title="Cart">    
                    <ShoppingCartIcon className="cart-button"/>
                </Tooltip>
                <Tooltip title="Profile">   
                    <AccountCircleIcon className="profile-button"/> 
                </Tooltip>
                <Tooltip title="Log out">      
                    <ExitToAppIcon className="logout-button" onClick={handleLogout}/>
                </Tooltip>

            </div>

        </div>
    )
}

export default Header
