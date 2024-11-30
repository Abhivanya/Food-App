import React, { useContext } from "react";
import Style from "./Cart.module.css";
import Modal from "../ui/Modal";
import CartContext from "../store/cartContext";
import CartItems from "./CartItems";
const Cart = ({ closeCart }) => {
  return (
    <Modal>
      <CartItems />
      <div className={Style.amount}>
        <span>Total Amount</span>
        <span>35.23</span>
      </div>
      <div className={Style.btns}>
        <button className={Style.close} onClick={closeCart}>
          Close
        </button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
