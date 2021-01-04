import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
       <div className="checkout">
         <div className="checkout__left">
            <img className="checkout__ad" src="https://salesfunnelhq.com/wp-content/uploads/2018/07/AdBadger_Banner_Ads_07-1024x225.png" alt=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* Lists out all of the Checkout Products */}
                    {basket.map(item => (
                      <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                      />
                    ))}
                </div>
                )}
         </div>
           {basket.length > 0 && (
             <div className="checkout__right">
               <Subtotal />
             </div>

             )


           }
       </div>
    );
};

export default Checkout;