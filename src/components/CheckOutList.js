import React from 'react'
import { useStateValue } from '../context/StateContext';


function CheckOutList({id,title,image,price}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,           
        })
    }
    return (
        <div>
            <div className="post-image">
                <img src={image} alt="Equipment img"/>
           
            </div>
            <div className="post-contents">
                
                    <div className="post-title">
                        <h3>{title}</h3>    
                    </div>
              
            
                {/* <p className="post-category">{displayName}</p> */}
                <h4 className="post-rental ">{price}</h4>
               
                <button className="login-button post" onClick={removeFromBasket}>Remove</button>
            </div>
        </div>
    )
}

export default CheckOutList
