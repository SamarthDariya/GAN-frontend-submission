import React, { useState } from 'react';
import Product from './Product';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Cake',
    description: 'A delicious cake made with the finest ingredients',
    imageUrl: '/images/cake.jpg'
  },
  {
    name: 'Bread',
    description: 'A freshly baked loaf of bread',
    imageUrl: '/images/bread.jpg'
  },
  {
    name: 'Cookies',
    description: 'A variety of delicious cookies',
    imageUrl: '/images/cookies.jpg'
  },
  {
    name: 'Pastries',
    description: 'A selection of tasty pastries',
    imageUrl: '/images/pastries.jpg'
  }
];

const Homepage = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  const removeFromCart = product => {
    setCart(cart.filter(p => p.name !== product.name));
  };

  return (
    <div>
      {products.map(product => (
        <Product
          key={product.name}
          {...product}
          inCart={cart.includes(product)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};

export default Homepage;