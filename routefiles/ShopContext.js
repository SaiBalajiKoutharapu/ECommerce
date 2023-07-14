import React, { createContext, useState } from 'react';

import mencards from '../components/MensCards';

export const xt = createContext(null);

const getDefaultCart = () => {
  let cart=[];
  for(let i = 1 ; i < mencards.length + 1 ; i ++){
    cart[i] = 0;
  }
  return cart;
}

export const ShopContext = (props) => {

  const[cartItems, setCartItems] = useState(getDefaultCart());

  const addtocart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1 }));
  }

  const removeFromcart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1 }));
  }

  const contextValue = {cartItems, addtocart, removeFromcart };

  return (
    <ShopContext.Provider value={contextValue} >
      {props.children}
    </ShopContext.Provider>
  )
};
