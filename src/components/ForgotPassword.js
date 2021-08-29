import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from "react-router-dom"

function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try {
          setError("")
          setMessage('')
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage("Check your inbox for further instructions")
        } catch {
          setError("Failed to reset password ")
        }
    
        setLoading(false)
      }
    
    return (
        <div>
            <div >
            <h3>Reset password</h3>
            <div className="LoginInput">
                {error && <p>{error}</p>}
                {message && <p>{message}</p>}
                <form onSubmit = {handleSubmit}>
                <span>Email</span><br />
                <input placeholder="Enter email" id="email" ref={emailRef} type="text"></input><br /> 
    
                <button disabled = {loading} type="submit">Reset Password</button>
                </form>
                <Link to="/login">Log In</Link><br></br>
                Need an account? <Link to="/register">Register Here</Link>
                
            </div>
        </div>
        </div>
    )
}

export default ForgotPassword;
