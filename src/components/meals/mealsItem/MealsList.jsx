import React from "react";
import MealItem from "./MealItem";
import Style from "./MealsList.module.css";
const MealsList = ({ items }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {items.map((item) => (
        <MealItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default MealsList;
