import React, { useContext } from "react";
import Style from "./MealItem.module.css";
import CartContext from "../../store/cartContext";
const MealItem = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const handleAddItem = (e) => {
    e.preventDefault();
    const amount = e.target.quantity.value;

    addItem({ ...item, amount: amount });
  };
  return (
    <li key={item.id} className={Style.item}>
      <div>
        <div className={Style.title}>{item.title}</div>
        <div className={Style.description}>{item.description}</div>
        <div className={Style.price}>${item.price}</div>
      </div>

      <form onSubmit={handleAddItem}>
        <div className={Style.input}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min={1}
            max={5}
            defaultValue={1}
            name="quantity"
          />
        </div>
        <button className={Style.btn}>+ Add</button>
      </form>
    </li>
  );
};

export default MealItem;
