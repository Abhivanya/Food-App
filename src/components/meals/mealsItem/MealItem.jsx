import React from "react";
import Style from "./MealItem.module.css";
const MealItem = ({ item }) => {
  return (
    <li key={item.id} className={Style.item}>
      <div>
        <div className={Style.title}>{item.title}</div>
        <div className={Style.description}>{item.description}</div>
        <div className={Style.price}>${item.price}</div>
      </div>

      <form>
        <div className={Style.input}>
          <label htmlFor="amount">Amount</label>
          <input type="number" min={1} max={5} defaultValue={1} />
        </div>
        <button className={Style.btn}>+ Add</button>
      </form>
    </li>
  );
};

export default MealItem;
