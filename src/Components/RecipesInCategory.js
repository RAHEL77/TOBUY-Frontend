import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeItem from './RecipeItem'
import {useParams} from 'react-router-dom'

const RecipesInCategory = () => {
  const params=useParams();
  const [stateData, setStateData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDataFromAPI = async () => {
    try {
      console.log(params);
      setIsLoading(true);
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
      );
      console.log(data);

      if (data.data.meals) {
        setStateData(data.data.meals);
      } else {
        setStateData([]);
      }
      setIsLoading(false);
      console.log(data.data.categories);
    } catch (e) {
      console.log(e, "api fetch error");
    }
  };

  useEffect(() => {
    // run once when component mounts
    getDataFromAPI();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading ... please wait</h1>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {stateData.length == 0 ? (
        <div>No recipes found</div>
      ) : (
        stateData.map((item) => {
          return (
            <RecipeItem key={item.idMeal} recipe={item}/>
        );
        })
      )}
    </div>
  );
};
export default RecipesInCategory;
