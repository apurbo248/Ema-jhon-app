import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./product.css"
const Product = (props) => {
 //console.log(props);
    const {img,name,seller,price,stock} = props.productInfo;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <h6>by: {seller}</h6>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock</small></p>
               
                <p><button onClick ={()=>props.addButton(props.productInfo)} > <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button></p>
            </div>
        </div>
    );
};

export default Product;