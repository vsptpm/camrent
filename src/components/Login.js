import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import TextField from '@material-ui/core/TextField'; 
import handCameraVector from "../assets/handCameraVector.png"
import "./Login.css"   



function Register() {

    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    async function handleSubmit(e) {
        e.preventDefault()

        try {
          setError("")
          setLoading(true)
          await login(email, password)
          history.push("/dashboard")
        } catch {
          setError("Failed to Login in")
        }
    
        setLoading(false)
      }
    
    return (
        <div>
           

            <div className="container">
                <h1>Login</h1>
                {error && <p>{error}</p>}
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
                  <button disabled = {loading} type="submit" className="login-button">Log In</button>
                </form>
                <Link to="/forgot-password" className="link">Forgot Password?</Link><br></br>
                Need an account? <Link to="/register" className="link">Register Here</Link>
                <img src={handCameraVector} className="hand-camera" alt="handCameraVector" />

 
             </div>
        </div>
    )
}

export default Register;
