import React, { Fragment } from "react";
import Card from "../../Card/Card";
import MealsItem from "../MealsItem/MealsItem";

//CSS imports
import "./AvailableMeals.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    image:
      "https://c.ndtvimg.com/2022-06/tutlv10o_sushi-generic_625x300_17_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    image:
      "https://www.jocooks.com/wp-content/uploads/2019/04/pork-schnitzel-1.jpg",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    image:
      "https://img.freepik.com/premium-photo/hot-bbq-burger-cooked-grilled-fire-with-fragrant-smoke_124507-25371.jpg?w=2000",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    image:
      "https://img.bestrecipes.com.au/NMaajcQw/w643-h428-cfill-q90/br/2019/05/1980-gut-loving-green-breakfast-bowl-diabetic-friendly-952243-1.jpg",
  },
];
const AvailableMeals = () => {
  const mealsItems = DUMMY_MEALS.map((meal) => {
    return (
      <MealsItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        image={meal.image}
      />
    );
  });
  return (
    <div className="meals">
      <Card>
        <ul>{mealsItems}</ul>
      </Card>
      ;
    </div>
  );
};

export default AvailableMeals;
