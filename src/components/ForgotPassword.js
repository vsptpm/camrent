import React, {  useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from "react-router-dom"
import TextField from '@material-ui/core/TextField'; 
import "./ForgotPaassword.css"


function ForgotPassword() {

    const { resetPassword } = useAuth()
    const [email, setEmail] = useState('');
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try {
          setError("")
          setMessage('')
          setLoading(true)
          await resetPassword(email)
          setMessage("Check your inbox for further instructions")
        } catch {
          setError("No account associated with this email")
        }
    
        setLoading(false)
      }
    
    return (
        <div>
            <div >
            <div className="container">
                <h1>Reset password</h1>
                {error && <p>{error}</p>}
                {message && <p>{message}</p>}
                <form onSubmit = {handleSubmit}>

                  <TextField 
                      className="input-field"  
                      label="Email"  
                      onChange={(e) => setEmail(e.target.value)}
                      variant="outlined" 
                    />
                  <br/>

                  <button disabled = {loading} type="submit" className="reset-button" >Reset Password</button>
                </form>
                <Link to="/login" className="link">Log In</Link><br></br>
                Need an account? <Link to="/register" className="link">Register Here</Link>
                
            </div>
        </div>
        </div>
    )
}

export default ForgotPassword;
