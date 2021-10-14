import React from 'react'
import { useStateValue } from '../context/StateContext';


function CheckOutList() {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
           
        })
    }
    return (
        <div>
            <div className="post-image">
                <img src="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" alt="Equipment img"/>
           
            </div>
            <div className="post-contents">
                
                    <div className="post-title">
                        <h3> Canon EOS 1500D </h3>    
                    </div>
              
            
                {/* <p className="post-category">{displayName}</p> */}
                <h4 className="post-rental ">Rs.600/Day</h4>
               
                <button className="login-button post" onClick={removeFromBasket}>Remove</button>
            </div>
        </div>
    )
}

export default CheckOutList
