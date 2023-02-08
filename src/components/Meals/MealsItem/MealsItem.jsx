import React from "react";
import MealsItemForm from "../MealsItemForm/MealsItemForm";
import MealItemImage from "../MealItemImage/MealItemImage";
//CSS imports
import "./MealsItem.css";

const MealsItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div>
          <MealItemImage src={props.image} alt={props.name} />
        </div>
      </div>
      <p className="description desc">{props.description}</p>
      <span className="price">
        <p>{price}</p>
      </span>
      <div>
        <MealsItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
