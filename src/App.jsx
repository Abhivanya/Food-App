import React from "react";
import Header from "./components/layout/Header";
import Banner from "./components/layout/Banner";
import MealsSummary from "./components/meals/MealsSummary";
const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MealsSummary />
    </div>
  );
};

export default App;
