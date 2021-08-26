import React from 'react'

function Login() {
    return (
        <div >
            <h3>Login</h3>
            <div className="loginInput">
                <span>Email</span><br />
                <input placeholder="Enter email"></input><br /> 
                <span>Password</span><br />
                <input placeholder="Enter password"></input><br />
                <p>Forgot password?</p>
            </div> 
        </div>
    )
}

export default Login
