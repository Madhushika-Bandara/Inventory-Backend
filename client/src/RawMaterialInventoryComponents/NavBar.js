import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1 className="h">Home Foods</h1>
      <h2 className="h">Raw Material Inventory</h2>
      <div className="links">
        <Link className="l" to="/">
          Home
        </Link>
        <Link className="l" to="/">
          Kitchen
        </Link>
        {/* <Link className="l" to="/dashboard">Dashboard</Link> */}
        <Link className="l" to="/product">
          Products
        </Link>
        <Link className="l" to="/add">
          Add
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
