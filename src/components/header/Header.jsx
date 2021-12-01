import React from "react";
import "./Header.scss";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const ourCostumActiveStyle = {
    textDecoration: "underline",
    color: "#0d3a37",
  };

  return (
    <nav className="header">
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <ul>
        {/* IT's VALID ON V5 */}
        {/* <NavLink activeClassName="activeRouteClass" to="/">
          <li>Home</li>
        </NavLink> */}

        <NavLink
          style={({ isActive }) =>
            isActive ? ourCostumActiveStyle : undefined
          }
          to="/"
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? ourCostumActiveStyle : undefined
          }
          to="/products"
        >
          <li>Products</li>
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? ourCostumActiveStyle : undefined
          }
          to="/add-product"
        >
          <li>Add products</li>
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? ourCostumActiveStyle : undefined
          }
          to="/cart"
        >
          <li>Cart</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
