import React from "react";
import "./Header.css";
import { IoCart } from "react-icons/io5";
const Header = ({ openCart }) => {
  return (
    <header>
      <div className="left">
        <div className="logo">ReactMeals</div>
      </div>
      <div className="right">
        <div className="cart-container" onClick={openCart}>
          <IoCart />
          <span>Your Cart</span>
          <div className="cart-count">0</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
