import React from 'react'
import ImageUpload from './ImageUpload'
import './PostAd.css'
import { useAuth } from '../context/AuthContext'


function PostAd() {
    const { currentUser } = useAuth()
    return (
        <div>
            <ImageUpload email= {currentUser.email}/>
        </div>
    )
}

export default PostAd
