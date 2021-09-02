import React from 'react'
import "./Footer.css"
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        
            <div className="footer">
                <div className="footer-contents">      
                    <p>About</p>
                    <p>Help Center</p>
                    <p>Privacy & terms</p>
                </div>
                <div className="copyright">
                   
                    <CopyrightIcon fontSize="small"/><p>2021</p> <p>vsptpm </p>
                </div>

            </div>
        
    )
}

export default Footer
