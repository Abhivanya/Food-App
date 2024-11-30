import React, { useContext } from "react";
import CartContext from "../store/cartContext";
import Style from "./CartItems.module.css";
const CartItems = () => {
  const { items, addItem, removeItem } = useContext(CartContext);

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            addItem={addItem}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, addItem, removeItem }) => {
  console.log(item);
  return (
    <li className={Style.item}>
      <div className={Style.content}>
        <span className={Style.title}>{item.title}</span>
        <span className={Style.price}>
          ${item.price} X {item.amount}
        </span>
      </div>
      <div className={Style.btns}>
        <button onClick={() => removeItem(item.id)}>-</button>
        <button onClick={() => addItem({ ...item, amount: 1 })}>+</button>
      </div>
    </li>
  );
};

export default CartItems;
