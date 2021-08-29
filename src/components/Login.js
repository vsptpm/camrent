import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom"

function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/dashboard")
        } catch {
          setError("Failed to Login in")
        }
    
        setLoading(false)
      }
    
    return (
        <div>
            <div >
            <h3>Login</h3>
            <div className="LoginInput">
                {error && <p>{error}</p>}
                <form onSubmit = {handleSubmit}>
                <span>Email</span><br />
                <input placeholder="Enter email" id="email" ref={emailRef} type="text"></input><br /> 
                <span>Password</span><br />
                <input placeholder="Enter password" id="password" ref={passwordRef} type="password"></input><br />
        
                <button disabled = {loading} type="submit">Log In</button>
                </form>
                <Link to="/forgot-password">Forgot Password?</Link><br></br>
                Need an account? <Link to="/register">Register Here</Link>
                
            </div>
        </div>
        </div>
    )
}

export default Register;
