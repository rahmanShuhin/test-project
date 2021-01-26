import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const NavBar = () => {
  const cart = useSelector((state) => state.products);

  return (
    <div className="bg-primary container">
      <nav className="nav">
        <div>
          <Link to="/">Logo</Link>
          <input type="text" placeholder="search" />
        </div>
        <div>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Shop</Link>
          <Link>Help</Link>
          <Link to="/cart" className="btn btn-warning">
            {cart.length} Your Cart
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
