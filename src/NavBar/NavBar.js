import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="secondLogo">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/shop">Shop</Link>
      </div>
      <div>
        <Link to="/basket">Basket</Link>
      </div>
    </div>
  );
}

export default NavBar;
