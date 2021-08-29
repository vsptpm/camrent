import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom"

function Register() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { register } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await register(emailRef.current.value, passwordRef.current.value)
          history.push("/dashboard")

        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }
    
    return (
        <div>
            <div >
            <h3>Register</h3>
            <div className="RegisterInput">
                {error && <p>{error}</p>}
                <form onSubmit = {handleSubmit}>
                <span>Full Name</span><br />
                <input placeholder="Enter name" id="name" ref={nameRef} type="text"></input><br /> 
                <span>Email</span><br />
                <input placeholder="Enter email" id="email" ref={emailRef} type="text"></input><br /> 
                <span>Password</span><br />
                <input placeholder="Enter password" id="password" ref={passwordRef} type="password"></input><br />
                <span>Confirm Password</span><br />
                <input placeholder="Enter password" id="password-confirm" ref={passwordConfirmRef} type="password"></input><br />
                <button disabled = {loading} type="submit">Register</button>
                </form>
                
                Already have an account? <Link to="/login">Log In </Link>
                
            </div>
        </div>
        </div>
    )
}

export default Register;
