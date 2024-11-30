import React, { useReducer } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = React.createContext();

const defaultState = {
  items: [],
  totalAmount: 0,
  count: 0,
};
export const CartProvider = ({ children }) => {
  const [cartState, dispatcher] = useReducer(cartReducer, defaultState);

  const addItem = (item) => {
    dispatcher({ type: "ADD", item: item });
  };
  const removeItem = (id) => {
    dispatcher({ type: "REMOVE", id: id });
  };

  const contextItem = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    count: cartState.count,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={contextItem}>{children}</CartContext.Provider>
  );
};

export default CartContext;
