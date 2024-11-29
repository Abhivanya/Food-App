import React from "react";
import Header from "./components/layout/Header";
import Banner from "./components/layout/Banner";
import MealsSummary from "./components/meals/MealsSummary";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
const App = () => {
  return (
    <div>
      <Cart />
      <Header />
      <Banner />
      <MealsSummary />
      <Meals />
    </div>
  );
};

export default App;
