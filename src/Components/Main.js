import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";

// import Navbar from './Navbar'
const Main = () => {
  const [stateData, setStateData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getDataFromAPI = async () => {
    try {
      setIsLoading(true);
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
      );
      console.log(data);

      if (data.data.meals) {
        setStateData(data.data.meals);
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

  const submitHandler= (event) => {
    event.preventDefault();
    getDataFromAPI();
  };

  const resetQuery = () => {
    setSearchValue("");
   // setQuery("");
  };
  if(isLoading){
    return <div><h1>Loading ... please wait</h1></div>
  }
  return (
    <>
      {
        <div>
          <form onSubmit={submitHandler}>
            <input
              style={{ color: "blue" ,fontSize:"2em"}}
              type="text"
              placeholder="type a name food"
              size="25"
              
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />

            <input type="submit"    style={{ color: "blue" ,fontSize:"2em"}} value="search"  />
          <input type="button"    style={{ color: "blue" ,fontSize:"2em"}} value="reset" onClick={resetQuery} />
          </form>

          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {stateData.length == 0 ? (
              <div>No recipes found</div>
            ) : (
              stateData.map((item) => {
                return <RecipeItem key={item.idMeal} recipe={item} />;
              })
            )}
          </div>
        </div>
      }
    </>
  );
};
export default Main;
