import { createContext } from 'react';

const GlobalStateContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.product]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(product => product.name !== action.product.name)
      };
    default:
      return state;
  }
};
