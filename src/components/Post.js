import React from 'react'
import "./Post.css"
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Post() {

    return (
        <div className="post-container">
            <div className="post-image">
                <img src="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" alt="Equipment img"/>
                {/* <p className="post-avaialability"> Available</p> */}
            </div>
            <div className="post-contents">
                <div className="post-title">

                    Canon EOS 1500D
                </div>
                <p className="post-category">Camera</p>
                <h4 className="post-rental ">Rs.500/Day</h4>
                <div className="post-location">
                    <LocationOnIcon fontSize="small"/>
                    <p className="post-location-text">Kollam, Kerala</p>
                </div>
                <button className="login-button post">Add to Cart</button>
            </div>
        </div>
    )
}

export default Post
