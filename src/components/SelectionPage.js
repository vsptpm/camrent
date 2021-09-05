import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import "./SelectionPage.css"
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function SelectionPage() {
    const [selected, setSelected] = useState(false)
    const cameraBrands = [
        { name: 'Canon' },
        { name: 'Nikon' },
        { name: 'Sony' },
        { name: 'Fujifilm ' },
        { name: 'Pentax' },
        { name: 'Panasonic' },
        { name: 'Leica' }

        ]
        const cameraModels = [
            { name: '1300D' },
            { name: '700D' },
            { name: '5D' },
            { name: '6D' },
            { name: '80D' },
            { name: '70D' },
            { name: 'M50' }
    
            ]
    return (
        <div className="selection-page">
            <Header/>
            <div className="selection-page-items">
                <h3>Hey, Are you here for ?</h3>
                <div className="selection-btn">
                    <Link to="/dashboard">s
                        <div className="rent">
                            <h4>Rent out some gears</h4>
                        </div>
                    </Link>
                        <div className="rent">
                            <h4>Renting your favorite gears</h4>
                        </div>
                </div>
                <div className="select-product">
                    <Autocomplete
                    id="combo-box"
                    options={cameraBrands}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Brand" variant="outlined" />}
                    />
                    <Autocomplete
                    id="combo-box"
                    options={cameraModels}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Model" variant="outlined" />}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}   

export default SelectionPage
