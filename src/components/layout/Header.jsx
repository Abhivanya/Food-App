import React, { useContext } from "react";
import "./Header.css";
import { IoCart } from "react-icons/io5";
import CartContext from "../store/cartContext";
const Header = ({ openCart }) => {
  const { count } = useContext(CartContext);
  return (
    <header>
      <div className="left">
        <div className="logo">ReactMeals</div>
      </div>
      <div className="right">
        <div className="cart-container" onClick={openCart}>
          <IoCart />
          <span>Your Cart</span>
          <div className="cart-count">{count}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
