import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemList } from "../ItemList";

function NavBar() {
  const [items, setItems] = useContext(ItemList);

  return (
    <div className="secondLogo">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/shop">Shop</Link>
      </div>
      <div>
        <Link to="/basket">Basket ( {items} )</Link>
      </div>
    </div>
  );
}

export default NavBar;
