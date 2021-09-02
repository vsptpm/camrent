import React from 'react'
import { useParams, } from "react-router";
import Footer from './Footer';
import Header from './Header'
import "./ProductPage.css"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function ProductPage() {
    let { title } = useParams();
    
    return (
        <div className="product-page">   
            <Header/>
            <div className="product-page-items">
                    <div className="product-image">
                        <img src="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" alt="product-img"></img>
                        <div className="mini-images-items">
                             <NavigateBeforeIcon/>
                            <div className="mini-images">
                                <img src="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" alt="product-img"></img>
                            </div>  
                            <div className="mini-images">
                                <img src="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" alt="product-img"></img>
                            </div>  
                            <div className="mini-images">
                                <img src="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" alt="product-img"></img>
                            </div>  
                            <NavigateNextIcon />
                        </div>
                    </div>
                    <div className="product-description">

                        <h2>{title}</h2>
                        <p>24.2MP APS-C CMOS Sensor, 
                            DIGIC 6 Image Processor, 
                            3.0″ 1.04m-Dot Vari-Angle Touchscreen, 
                            Full HD 1080p Video Recording at 60 fps
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
