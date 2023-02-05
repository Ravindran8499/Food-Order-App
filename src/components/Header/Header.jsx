import React, { Fragment } from "react";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

//CSS imports
import "./Header.css";

//image imports
import meals from "../../Assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h2>Your meals</h2>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={meals} alt="Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
