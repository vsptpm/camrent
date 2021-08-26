import React from 'react'

function Register() {
    return (
        <div>
            <div >
            <h3>Register</h3>
            <div className="RegisterInput">
                <span>Full Name</span><br />
                <input placeholder="Enter name"></input><br /> 
                <span>Email</span><br />
                <input placeholder="Enter email"></input><br /> 
                <span>Password</span><br />
                <input placeholder="Enter password"></input><br />
                <span>Confirm Password</span><br />
                <input placeholder="Enter password"></input><br />
                <p>Forgot password?</p>
                
            </div>
        </div>
        </div>
    )
}

export default Register
