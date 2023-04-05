import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Order = () => {
    const cart = useLoaderData()
    return (
        <div className='shop-container'>
            <div className='PPcart'>
                {
                    cart.map(product=><ReviewItem product={product} key={product.id}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;