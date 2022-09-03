import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage/HomePage";
import ShopPage from "./ShopPage/ShopPage";
import NavBar from "./NavBar/NavBar";
import Basket from "./Basket/Basket";
import { ItemProvider } from "./ItemList";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <ItemProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </ItemProvider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
