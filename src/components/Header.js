import React, { useState }  from 'react'
import "./Header.css"
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Tooltip from '@material-ui/core/Tooltip';
import { useStateValue } from '../context/StateContext';


function Header(props) {
    const { logout } = useAuth()
    const { currentUser } = useAuth()
    
    const [error, setError] = useState('')
    const history = useHistory()
    const [{ basket }, dispatch] = useStateValue();

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
                {/* <MenuIcon/> */}
                <Link to="/select">
                    <h2 className="link-home"> Cam For Me</h2>
                </Link>
            </div>

            {/* <div className="header-center">
                <InputBase
                    placeholder="Search"
                    style={{ color: red[50] }}
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ color: red[50] }}/>
                </IconButton>
            </div> */}
            <div className="header-right">
                <Link to="/checkout">
                    <Tooltip title="Cart">    
                        <ShoppingCartIcon className="cart-button"/>
                    </Tooltip>
                </Link>
                <span className="cart-items">{basket?.length}</span>
                <Link to="/profile">
                    <div className="profile">
                        <Tooltip title="Profile">   
                            <AccountCircleIcon className="profile-button"/> 
                        </Tooltip>
                        <span className="profile-name">{currentUser.displayName}</span>
                    </div>
                </Link>
                <Tooltip title="Log out">      
                    <ExitToAppIcon className="logout-button" onClick={handleLogout}/>
                </Tooltip>

            </div>

        </div>
    )
}

export default Header
