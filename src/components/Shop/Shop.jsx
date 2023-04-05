import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

   useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res => res.json())
    .then(data=>setProducts(data))
   },[])

   useEffect(()=>{
    const getCartData = getShoppingCart()
        let saveCart = []
        for(const id in getCartData){
            const addProduct = products.find(product=> product.id === id)
           if(addProduct){
            const quantity = getCartData[id]
            addProduct.quantity = quantity
            saveCart.push(addProduct)
           }
        }
        setCart(saveCart)
   },[products])

   const evenHandler=(product)=>{
    // const newCart = [...cart, product]
    let newCart= []
    const exists = cart.find(pd=> pd.id == product.id)
    if(!exists){
        product.quantity = 1;
        newCart = [...cart, product]
    }
    else{
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd=>pd.id !==product.id)
        newCart = [...remaining, exists]
    }
    setCart(newCart)
    addToDb(product.id)
   
}
    const allDelete=()=>{
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=> <Product product={product} key= {product.id} handleAddToCart={evenHandler}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart= {cart} allDelete={allDelete}>
                    <Link to={'/CheckOut'}>
                        <button className='btn-dlt-card'>Checkout order</button>
                    </Link>
                </Cart>
            </div>
        </div>

    );
};

export default Shop;