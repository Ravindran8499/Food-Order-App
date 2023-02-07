import React from "react";

//CSS imports
import "./MealItemImage.css";

const MealItemImage = (props) => {
  return (
    <div className="image-container">
      <img className="meals-item" src={props.src} alt={props.alt} />
    </div>
  );
};

export default MealItemImage;
