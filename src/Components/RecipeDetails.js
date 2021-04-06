import Ingredent from "./Ingredent";
import RecipeItem from "./RecipeItem";
import {useParams} from 'react-router-dom'
import {useState, useEffect } from "react";
import axios from "axios";

const RecipeDetails = (props) => {
  const params=useParams();
  const [stateData, setStateData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getDataFromAPI = async () => {
    try {
      // setIsLoading(true);
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      console.log(data);

      if (data.data.meals && data.data.meals.length>0) {
        setStateData(data.data.meals[0]);
      } else {
        setStateData([]);
      }
      setIsLoading(false);
      console.log(data.data.meals);
    } catch (e) {
      console.log(e, "api fetch error");
    }
  };
  useEffect(() => {
    console.log('I am here');
     getDataFromAPI();
   }, []);

  if(isLoading){
    return <div><h1>Loading ... please wait</h1></div>
  }
  return (
    <div style={{ margin: "5px" }}>
      <>
        {/* <p>{props.recipe.strMeal}</p>
                <img src={props.recipe.strMealThumb} alt={props.recipe.title} style={{width:'15vw'}}/>

                <br/> */}
        <RecipeItem recipe={stateData} />
        <Ingredent
          name={stateData.strIngredient1}
          measure={stateData.strMeasure1}
        />
        <Ingredent
          name={stateData.strIngredient2}
          measure={stateData.strMeasure2}
        />
        <Ingredent
          name={stateData.strIngredient3}
          measure={stateData.strMeasure3}
        />
        <Ingredent
          name={stateData.strIngredient4}
          measure={stateData.strMeasure4}
        />
        <Ingredent
          name={stateData.strIngredient5}
          measure={stateData.strMeasure5}
        />
      </>
    </div>
  );
};
export default RecipeDetails;
