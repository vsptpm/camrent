import React from 'react'
import { useParams, } from "react-router";
import Header from './Header'
import "./ProductPage.css"

function ProductPage() {
    let { id } = useParams();
    
    return (
        <div>
            <Header/>
            <div className="product-page">
            <h2>{id}</h2> 
            </div>
        </div>
    )
}

export default ProductPage
