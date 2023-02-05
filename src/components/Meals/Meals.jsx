import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

//CSS imports

const Meals = () => {
  return (
    <Fragment>
      <h1>Hello meals Components</h1>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
