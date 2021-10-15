import React from 'react'
import { useStateValue } from '../context/StateContext';
import Header from './Header'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../context/reducer";
import CheckOutList from './CheckOutList';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    console.log(basket);
    return (
        <div>
            {/* <Header/> */}
            <div className="checkout">
               <CurrencyFormat
                    renderText={(value) => (
                    <>
                        <p>
                        {/* Part of the homework */}
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                    </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)} 
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                {basket.map(item => (
                    <CheckOutList
                        id={item.id}
                        title={item.title}
                        image={item.imageUrl}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Checkout
