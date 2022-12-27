import React, { useState } from 'react';
import { useContext } from 'react';

const Product = ({ name, description, imageUrl }) => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const inCart = state.cart.includes(product);
  const addToCart = () => {
dispatch({ type: 'ADD_TO_CART', product: { name, description, imageUrl } });
};

const removeFromCart = () => {
dispatch({ type: 'REMOVE_FROM_CART', product: { name, description, imageUrl } });
};

return (
<div>
<img src={imageUrl} alt={name} />
<h3>{name}</h3>
<p>{description}</p>
{inCart ? (
<button onClick={removeFromCart}>Remove from cart</button>
) : (
<button onClick={addToCart}>Add to cart</button>
)}
</div>
);
};