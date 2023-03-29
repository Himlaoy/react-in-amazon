import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props

    // console.log(cart)

    let total = 0;
    let totalShipping =0
    let quantity = 0;
    for(const product of cart){
        //  one way to solve
        // product.quantity = product.quantity || 1;
         total = total + product.price * product.quantity
         totalShipping= totalShipping + product.shipping
         quantity = quantity + product.quantity
    }

    const tax = total * 7 / 100
    const grand = total + totalShipping + tax

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected product : {quantity}</p>
            <p>Total price :$ {total}</p>
            <p>Total shipping : $ {totalShipping.toFixed(2)} </p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h5>Grand total : $ {grand.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;