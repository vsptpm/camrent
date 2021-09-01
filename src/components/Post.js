import React from 'react'
import { Link } from "react-router-dom"

import "./Post.css"
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Post({imageUrl, title, category,rental, location}) {

    return (
        <div className="post-container">
            <div className="post-image">
                <img src={imageUrl} alt="Equipment img"/>
                {/* <p className="post-avaialability"> Available</p> */}
            </div>
            <div className="post-contents">
                <Link to={`/product/${title}`}>
                    <div className="post-title">
                        <h3> {title} </h3>    
                    </div>
                </Link>
            
                <p className="post-category">{category}</p>
                <h4 className="post-rental ">Rs.{rental}/Day</h4>
                <div className="post-location">
                    <LocationOnIcon fontSize="small"/>
                    <p className="post-location-text">{location}</p>
                </div>
                <button className="login-button post">Add to Cart</button>
            </div>
        </div>
    )
}

export default Post
