import React, { useContext, useState } from "react";
import Header from "./components/layout/Header";
import Banner from "./components/layout/Banner";
import MealsSummary from "./components/meals/MealsSummary";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import CartContext, { CartProvider } from "./components/store/cartContext";
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const cartCtx = useContext(CartContext);

  return (
    <CartProvider>
      {isCartOpen && <Cart closeCart={closeCart} />}
      <Header openCart={openCart} />
      <Banner />
      <MealsSummary />
      <Meals />
    </CartProvider>
  );
};

export default App;
