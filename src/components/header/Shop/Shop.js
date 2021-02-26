import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    
   const product = fakeData.slice(0,5);
   const [products, setProducts] = useState(product) ;
    const [cart, setCart] = useState([]);


   const button = (product) =>{
       console.log("clicked",product);
        setCart ( [...cart,product]);

   }

   return (
        <div className="row shop-container">
            <div className="product-container col-sm-6">
               
                        {
                            products.map(productinfo => <Product
                                addButton = {button}
                                 productInfo = {productinfo}> 
                                 </Product>)
                        }
                    
            </div>
           <div className="cart-container col-sm-6">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;