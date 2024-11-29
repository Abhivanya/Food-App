import React from "react";
import Style from "./MealItem.module.css";
const MealItem = ({ item }) => {
  return (
    <li key={item.id} className={Style.item}>
      <div className={Style.title}>{item.title}</div>
      <div className={Style.description}>{item.description}</div>
      <div className={Style.price}>${item.price}</div>
    </li>
  );
};

export default MealItem;
