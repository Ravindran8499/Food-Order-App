import React from "react";
import CartIcon from "./Carticon/CartIcon";

//CSS imports
import "./HeaderCartButton.css";
const HeaderCartButton = (props) => {
  return (
    <button className="button">
      <span>Your Cart </span>
      <span className="icon">
        <CartIcon />
      </span>
      <span className="badge">3</span>
    </button>
  );
};

export default HeaderCartButton;
