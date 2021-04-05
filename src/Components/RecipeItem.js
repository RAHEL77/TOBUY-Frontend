import Ingredent from "./Ingredent";
const RecipeItem = (props) => {
  return (
    <div style={{ width: "25vw", height: "25vw", margin: "5px" }}>
      <>
        <p>{props.recipe.strMeal}</p>
        <img
          src={props.recipe.strMealThumb}
          alt={props.recipe.title}
          style={{ width: "15vw" }}
        />

        <br />
      </>
    </div>
  );
};
export default RecipeItem;
