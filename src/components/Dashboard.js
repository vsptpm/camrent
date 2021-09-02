import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Post from './Post'
import "./Dashboard.css"
import Header from './Header'
import Footer from './Footer'


function Dashboard() {
    return (
        <div>
            <Header/>
            <div className="dashboard"> 
                <div className="post-items">
                    <Post  
                        imageUrl="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" 
                        title="Canon EOS 1500D"
                        category="Camera"
                        rental="500"
                        location="Kollam,Kerala"
                    />
                    <Post  
                        imageUrl="https://i.gadgets360cdn.com/products/cameras/large/1548234749_832_canon_eos-80d-24mp-dslr-camera.jpg" 
                        title="Canon EOS 80D"
                        category="Camera"
                        rental="800"
                        location="Kottayam,Kerala"
                    />
                    <Post  
                        imageUrl="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg" 
                        title="FUJIFILM X100"
                        category="Camera"
                        rental="1500"
                        location="Kollam,Kerala"
                    />
                    <Post  
                        imageUrl="https://www.rentsmartasia.com/wp-content/uploads/2021/04/shopping-600x600.png" 
                        title="Sony Alpha 7M IV "
                        category="Camera"
                        rental="2500"
                        location="Kollam,Kerala"
                    />
                    <Post  
                        imageUrl="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" 
                        title="Canon EOS 1500D"
                        category="Camera"
                        rental="500"
                        location="Kollam,Kerala"
                    />
                    <Post  
                        imageUrl="https://i.gadgets360cdn.com/products/cameras/large/1548234749_832_canon_eos-80d-24mp-dslr-camera.jpg" 
                        title="Canon EOS 80D"
                        category="Camera"
                        rental="800"
                        location="Kottayam,Kerala"
                    />
                    <Post  
                        imageUrl="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg" 
                        title="FUJIFILM X100"
                        category="Camera"
                        rental="1500"
                        location="Kollam,Kerala"
                    />
                    <Post  
                        imageUrl="https://www.rentsmartasia.com/wp-content/uploads/2021/04/shopping-600x600.png" 
                        title="Sony Alpha 7M IV "
                        category="Camera"
                        rental="2500"
                        location="Kollam,Kerala"
                    />
                    <Post  
                        imageUrl="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" 
                        title="Canon EOS 1500D"
                        category="Camera"
                        rental="500"
                        location="Kollam,Kerala"
                    />
                    <Post  
                        imageUrl="https://i.gadgets360cdn.com/products/cameras/large/1548234749_832_canon_eos-80d-24mp-dslr-camera.jpg" 
                        title="Canon EOS 80D"
                        category="Camera"
                        rental="800"
                        location="Kottayam,Kerala"
                    />
                    <Post  
                        imageUrl="https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg" 
                        title="FUJIFILM X100"
                        category="Camera"
                        rental="1500"
                        location="Kollam,Kerala"
                    />
                    <Post  
                        imageUrl="https://www.rentsmartasia.com/wp-content/uploads/2021/04/shopping-600x600.png" 
                        title="Sony Alpha 7M IV "
                        category="Camera"
                        rental="2500"
                        location="Kollam,Kerala"
                    />
                </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Dashboard
