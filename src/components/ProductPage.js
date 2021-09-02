import React from 'react'
import { useParams, } from "react-router";
import Footer from './Footer';
import Header from './Header'
import "./ProductPage.css"

function ProductPage() {
    let { title } = useParams();
    
    return (
        <div>
            <Header/>
            <div className="product-page">
                <div>
                <h2>{title}</h2>

                </div>
           
            <Footer/>
            </div>
        </div>
    )
}

export default ProductPage
