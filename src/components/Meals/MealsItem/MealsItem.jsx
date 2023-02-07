import React from "react";
import MealsItemForm from "../MealsItemForm/MealsItemForm";
import MealItemImage from "../MealItemImage/MealItemImage";
//CSS imports
import "./MealsItem.css";

const MealsItem = (props) => {
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div>
          <MealItemImage src={props.image} alt={props.name} />
        </div>
      </div>
      <p className="description">{props.description}</p>
      <span className="price">
        <p>{props.price}</p>
      </span>
      <div>
        <MealsItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
