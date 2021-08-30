import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import TextField from '@material-ui/core/TextField'; 
import handCameraVector from "../assets/handCameraVector.png"
import "./Register.css"  

function Register() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


    const { register } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()
    
        if (password !== confirmPassword) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await register(email, password)
          history.push("/dashboard")

        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }
    
    return (
        <div>
            <div >
            <div className="container">
                <h1>Register</h1>
                {error && <p>{error}</p>}
                <form onSubmit = {handleSubmit}>
                  <div className="input-fields">

                    <TextField 
                        className="input-field" 
                        id="outlined-basic" 
                        label="Full Name"  
                        onChange={(e) => setUsername(e.target.value)}
                        variant="outlined" 
                      />
                    <br/>
                    <TextField 
                      className="input-field" 
                      id="outlined-basic" 
                      label="Email" 
                      onChange={(e) => setEmail(e.target.value)}
                      variant="outlined"
                      />
                    <br/>
                    <TextField 
                      className="input-field" 
                      id="outlined-basic" 
                      label="Password" 
                      onChange={(e) => setPassword(e.target.value)}  
                      type="password" 
                      variant="outlined" 
                    />
                    <br/>
                    <TextField 
                      className="input-field" 
                      id="outlined-basic" 
                      label="Confirm Password" 
                      onChange={(e) => setConfirmPassword(e.target.value)} 
                      type="password"  
                      variant="outlined" 
                    />
                    <br/>
                  </div>
                <button disabled = {loading} type="submit"className="register-button">Register</button>
                </form>
                
                Already have an account? <Link to="/login" className="link">Log In </Link>
                
            <img src={handCameraVector} className="hand-camera" alt="handCameraVector" />
            </div>

        </div>
        </div>
    )
}

export default Register;
