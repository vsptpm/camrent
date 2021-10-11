import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField' 

import handCameraVector from "../assets/handCameraVector.png"
import "./Login.css"   
import Footer from './Footer';



function Register() {

    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    
    const useStyles = makeStyles((theme) => ({
      root: {
        width: '303px',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
    }));
    const classes = useStyles();
    const [open, setOpen] = useState(true);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    async function handleSubmit(e) {
        e.preventDefault()

        try {
          setError("")
          setLoading(true)
          await login(email, password)
          history.push("/select")
        } catch {
          setError("Incorrect Email or Password")
          setOpen(true)
        }
    
        setLoading(false)
      }
    
    return (
        <div>
            <div className="container">
                <h1>Login</h1>
                {error && 
                  <div className={classes.root}>
                    <Collapse in={open}>
                    <Alert severity="warning"  
                        action={
                          <IconButton
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                            }} 
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }>
                      <strong>{error}</strong>
                    </Alert>
                    </Collapse>
              
                  </div>
                }
                <form onSubmit = {handleSubmit} className="login-input">
            
                  <TextField 
                    className="input-field"  
                    label="Email"  
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined" 
                  />
                  <br/>
                  <TextField 
                    className="input-field"  
                    label="Password"  
                    onChange={(e) => setPassword(e.target.value)}  
                    type="password" 
                    variant="outlined" 
                  />
                  <br/>
                  <button type="submit" className="login-button">Log In</button>
                </form>
                <Link to="/forgot-password" className="link">Forgot Password?</Link><br></br>
                Need an account? <Link to="/register" className="link">Register Here</Link>
                <img src={handCameraVector} className="hand-camera" alt="handCameraVector" />

 
             </div>
             <Footer/>
        </div>
    )
}

export default Register;
