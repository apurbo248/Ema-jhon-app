import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price,0);
    
    let shipping = 0;

    if(totalPrice>500){
         shipping = 0;
    }
    else if(totalPrice>250){
        shipping = 4.99;
    }
    else if(totalPrice>0){
        shipping = 12;
    }
   
  const tax =Math.round( totalPrice*0.1);
   const total = Math.round(totalPrice + shipping + tax);
   
   const forMate = num =>{
       const precision = num.toFixed(2);
       return Number(precision);
   }
   return (
        <div>
            <h4>--Order aummry--</h4>
            <h5>Item Order- {cart.length}</h5>
            <h5>Total-{forMate(totalPrice)}</h5>
            <h5>Shipping-{shipping}</h5>
            <h5>Tax-{tax}</h5>
            <hr/>
            <h5>All Total- {total}</h5>
        </div>
    );
};

export default Cart;