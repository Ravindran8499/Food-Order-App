import React, { Fragment } from "react";

//Components imports
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
//CSS imports
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
};

export default App;
