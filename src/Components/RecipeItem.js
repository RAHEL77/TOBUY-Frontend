import Ingredent from "./Ingredent";
import {Link, useParams} from 'react-router-dom'

const RecipeItem = (props) => {
  const params=useParams();
  return (

<Link to={`/recipes/${props.recipe.idMeal}`} 
      style={{  textDecoration: "none", width: "25vw", height: "25vw", margin: "5px" }}>
      
        <p>{props.recipe.strMeal}</p>
        <img
          src={props.recipe.strMealThumb}
          alt={props.recipe.title}
          style={{ width: "15vw" }}
        />

        <br />
     
  </Link>
   
  );
};
export default RecipeItem;
