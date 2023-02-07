import React from "react";
import Input from "../Input/Input";

//CSS imports
import "./MealsItemForm.css";

const MealsItemForm = (props) => {
  return (
    <form className="form">
      <Input type="number" label="Amount" />
      <button>+ Add</button>
    </form>
  );
};

export default MealsItemForm;
