import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import "./SelectionPage.css"
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function SelectionPage() {
    
    return (
        <div className="selection-page">
            <Header/>
            <div className="selection-page-items">
                <h3>Hey, Are you here for ?</h3>
                <div className="selection-btn">
                    <Link to="/dashboard">
                        <div className="rent">
                            <h4>Rent out some gears</h4>
                        </div>
                    </Link>
                    <Link to="/postAd">
                        <div className="rent">
                            <h4>Renting your favorite gears</h4>
                        </div>
                    </Link>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}   

export default SelectionPage
