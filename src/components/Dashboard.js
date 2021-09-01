import React from 'react'
import { useAuth } from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import Post from './Post'
import "./Dashboard.css"
import Header from './Header'


function Dashboard() {
    return (
        <div>
                <Header/>
            <div className="dashboard"> 
                <div className="post-items">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
