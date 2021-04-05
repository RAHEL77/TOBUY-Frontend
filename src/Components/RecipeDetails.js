import Ingredent from "./Ingredent";
import RecipeItem from "./RecipeItem";
const RecipeDetails = (props) => {
  return (
    <div style={{ margin: "5px" }}>
      <>
        {/* <p>{props.recipe.strMeal}</p>
                <img src={props.recipe.strMealThumb} alt={props.recipe.title} style={{width:'15vw'}}/>

                <br/> */}
        <RecipeItem recipe={props.recipe} />
        <Ingredent
          name={props.recipe.strIngredient1}
          measure={props.recipe.strMeasure1}
        />
        <Ingredent
          name={props.recipe.strIngredient2}
          measure={props.recipe.strMeasure2}
        />
        <Ingredent
          name={props.recipe.strIngredient3}
          measure={props.recipe.strMeasure3}
        />
        <Ingredent
          name={props.recipe.strIngredient4}
          measure={props.recipe.strMeasure4}
        />
        <Ingredent
          name={props.recipe.strIngredient5}
          measure={props.recipe.strMeasure5}
        />
      </>
    </div>
  );
};
export default RecipeDetails;
