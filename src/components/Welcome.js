import React from 'react';
import { Link } from "react-router-dom";
import "../components/Welcome.css";
import handCameraVector from "../assets/handCameraVector.png";
import Footer from './Footer';


function Welcome() {
    return (
        <div> 
            <div className="container">

            <h1 className="welcome-heading">Welcome Dreamers !</h1>

            <p className="welcome-content"> 
                    We're striving to aid creative brains in obtaining the necessary 
                    equipment to begin putting their ideas into action. 
                    There will be no more excuses when it comes to gears.
                </p>
                <br/>
                <p className="helper-text">Existing User ?</p>
                <Link to='/login' className="login-button">
                    <div className="login-button">
                        Login
                    </div>
                </Link>

                <p className="helper-text">New Here ?</p>
                <Link to='/register' className="login-button">
                    <div className="login-button">
                    Register
                    </div>
                </Link>
            
                <img src={handCameraVector} className="hand-camera" alt="handCameraVector" />
            </div>
            <Footer/>
        </div>
    )
}

export default Welcome
