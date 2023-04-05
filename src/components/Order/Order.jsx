import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCard = useLoaderData()
    const [card, setCard] = useState(saveCard)
    const handleDelete =(id)=>{
       const remaining = card.filter(pd=>pd.id !==id)
       setCard(remaining)
       removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='PPcart'>
                {
                    card.map(product=><ReviewItem product={product} key={product.id} handleDelete={handleDelete}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={card} ></Cart>
            </div>
        </div>
    );
};

export default Order;