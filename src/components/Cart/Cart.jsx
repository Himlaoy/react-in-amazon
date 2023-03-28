import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props

    console.log(cart)

    let total = 0;
    let totalShipping =0
    for(const product of cart){
         total = total + product.price
         totalShipping= totalShipping + product.shipping
    }

    const tax = total * 7 / 100
    const grand = total + totalShipping + tax

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected product : {cart.length}</p>
            <p>Total price :$ {total}</p>
            <p>Total shipping : $ {totalShipping.toFixed(2)} </p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h5>Grand total : $ {grand.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;