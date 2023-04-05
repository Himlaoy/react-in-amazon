import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    console.log(product)
    const {img,price,ratings,seller,name} =product
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h2></h2>
        </div>
    );
};

export default ReviewItem;