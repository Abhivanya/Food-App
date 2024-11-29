import React from "react";
import Style from "./Meals.module.css";
import MealsList from "./mealsItem/MealsList";
const menu = [
  {
    id: 1,
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: 2,
    title: "Schnitzel",
    description: "Finest fish and veggies",
    price: 16.5,
  },
  {
    id: 3,
    title: "Barbecue Burger",
    description: "Finest fish and veggies",
    price: 12.99,
  },
  {
    id: 4,
    title: "Green Bowl",
    description: "Finest fish and veggies",
    price: 12.93,
  },
];
const Meals = () => {
  return (
    <div className={Style.mealContainer}>
      <MealsList items={menu} />
    </div>
  );
};

export default Meals;
