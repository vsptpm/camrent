import React from 'react';


function Welcome() {
    return (
        <div>
           <h2 className="welcome-heading">Welcome Dreamers !</h2>
           <p>We're striving to aid creative brains 
           <br />in obtaining the necessary equipment to begin putting their 
           <br />ideas into action. There will be no more excuses
           <br />when it comes to gears.</p>
           <div className="buttons">
            <span>Existing User ?</span><br />
            <button>Login</button><br />
            <span>New Here ?</span><br />
            <button>Register</button>
           </div>

        </div>
    )
}

export default Welcome
