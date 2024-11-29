import React from "react";
import Style from "./Cart.module.css";
import Modal from "../ui/Modal";
const Cart = () => {
  return (
    <Modal>
      <div className={Style.amount}>
        <span>Total Amount</span>
        <span>35.23</span>
      </div>
      <div className={Style.btns}>
        <button className={Style.close}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
