import React, { useEffect, useState } from 'react'
import { useParams, } from "react-router";
import { db } from '../Firebase';

import Footer from './Footer';
import Header from './Header'
import "./ProductPage.css"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function ProductPage() {
    // const [post, setPost] = useState();
    const { postId } = useParams();
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("Loading..");
    const [description, setDescription] = useState("Loading..");

    
    useEffect(() => {
        db.collection('posts').doc(postId).get().then(snapshot => 
            {   
                // console.log(snapshot.data().title)
                // setPost(snapshot.data())
                // console.log(post);
                if(snapshot.data()){
                    setTitle(snapshot.data().title);
                    setImage(snapshot.data().imageUrl);
                    setDescription(snapshot.data().description);}
                }
            );
    }, []);
    
    return (
        <div className="product-page">   
            <Header/>
            <div className="product-page-items">
                    <div className="product-image">
                        <img src={image} alt="product-img"></img>
                        <div className="mini-images-items">
                             <NavigateBeforeIcon/>
                            <div className="mini-images">
                                <img src={image} alt="product-img"></img>
                            </div>  
                            <div className="mini-images">
                                <img src={image} alt="product-img"></img>
                            </div>  
                            <div className="mini-images">
                                <img src={image} alt="product-img"></img>
                            </div>  
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="product-description">

                        <h2>{title}</h2>
                        <p>{description}
                        </p>
                        
                        <button className="login-button post">Add to Cart</button>
                    </div>
            </div>
            <div className="footer-component">

            <Footer/>
            </div>
           
           
        </div>
    )
}

export default ProductPage
