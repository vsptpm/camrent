import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { db } from '../Firebase';
import { useAuth } from '../context/AuthContext'
import Post from './Post'
import "./Dashboard.css"
import Header from './Header'
import Footer from './Footer'


function Dashboard() {
    const [posts, setPosts] = useState([]);
    const { currentUser } = useAuth()
    useEffect(() => {
        
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({
            id : doc.id,
            post :doc.data()      //this piece of code will run whenever a new post is added
          })))
        })
      }, []);
    return (
        <div>
            <div className="dashboard"> 
                <Header/>
                
                <div className="post-items">
                    {
                        posts.map(({id, post}) => (
                            <Post key={id} productId={id} user={currentUser} displayName={post.displayName} title={post.title} imageUrl={post.imageUrl} rental={post.price} />

                        ))   //loops through every data in variable and return values
                    }

                    <Post  
                        imageUrl="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" 
                        title="Canon EOS 1500D"
                        category="Camera"
                        rental="500"
                        location="Kollam,Kerala"
                        productId="123456"
                    />
                    <Post  
                        imageUrl="https://i.gadgets360cdn.com/products/cameras/large/1548234749_832_canon_eos-80d-24mp-dslr-camera.jpg" 
                        title="Canon EOS 80D"
                        category="Camera"
                        rental="800"
                        location="Kottayam,Kerala"
                        productId="123457"
                    />
                    <Post  
                        imageUrl="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg" 
                        title="FUJIFILM X100"
                        category="Camera"
                        rental="1500"
                        location="Kollam,Kerala"
                        productId="123458"
                    />
                    <Post  
                        imageUrl="https://www.rentsmartasia.com/wp-content/uploads/2021/04/shopping-600x600.png" 
                        title="Sony Alpha 7M IV "
                        category="Camera"
                        rental="2500"
                        location="Kollam,Kerala"
                        productId="123459"
                    />
                    <Post  
                        imageUrl="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" 
                        title="Canon EOS 1500D"
                        category="Camera"
                        rental="500"
                        location="Kollam,Kerala"
                        productId="123456"
                    />
                    <Post  
                        imageUrl="https://i.gadgets360cdn.com/products/cameras/large/1548234749_832_canon_eos-80d-24mp-dslr-camera.jpg" 
                        title="Canon EOS 80D"
                        category="Camera"
                        rental="800"
                        location="Kottayam,Kerala"
                        productId="123456"
                    />
                    <Post  
                        imageUrl="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg" 
                        title="FUJIFILM X100"
                        category="Camera"
                        rental="1500"
                        location="Kollam,Kerala"
                        productId="123456"
                    />
                    <Post  
                        imageUrl="https://www.rentsmartasia.com/wp-content/uploads/2021/04/shopping-600x600.png" 
                        title="Sony Alpha 7M IV "
                        category="Camera"
                        rental="2500"
                        location="Kollam,Kerala"
                        productId="123456"
                    />
                    <Post  
                        imageUrl="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" 
                        title="Canon EOS 1500D"
                        category="Camera"
                        rental="500"
                        location="Kollam,Kerala"
                        productId="123456"
                    />
                    <Post  
                        imageUrl="https://i.gadgets360cdn.com/products/cameras/large/1548234749_832_canon_eos-80d-24mp-dslr-camera.jpg" 
                        title="Canon EOS 80D"
                        category="Camera"
                        rental="800"
                        location="Kottayam,Kerala"
                        productId="123456"
                    />
                    <Post  
                        imageUrl="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg" 
                        title="FUJIFILM X100"
                        category="Camera"
                        rental="1500"
                        location="Kollam,Kerala"
                        productId="123456"
                    />
                    <Post  
                        imageUrl="https://www.rentsmartasia.com/wp-content/uploads/2021/04/shopping-600x600.png" 
                        title="Sony Alpha 7M IV "
                        category="Camera"
                        rental="2500"
                        location="Kollam,Kerala"
                        productId="123456"
                    />
                </div>
                <div className="footer-component">

                <Footer />
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard
