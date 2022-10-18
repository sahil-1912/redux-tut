import React from 'react'

import { AiOutlineShoppingCart } from "react-icons/ai";

import './Cart.scss'
const Home = () => {
  return (
    <div><div className='navbar'><div className='add-to-cart'><AiOutlineShoppingCart className='icon-cart'/></div>
      <h1>Home Component</h1></div>
      <div className='cart-wrapper '>
        <div className='img-wrapper item'>
          <img alt="pic of phone" src='https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        </div>
        <div className='desc-wrapper'>
          <div className='text-wrapper'>
            <span>iPhone</span>
            <span>Price:$1000</span>
          </div>
          <div className='button-wrapper'>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home