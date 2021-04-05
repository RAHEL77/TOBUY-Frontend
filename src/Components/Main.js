import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";

// import Navbar from './Navbar'
const Main = () => {
  const [stateData, setStateData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [query, setQuery] = useState("");

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
//  useEffect(() => {
//    getDataFromAPI();
//  }, [query]);

useEffect(() => {
  console.log('I am here');
   getDataFromAPI();
 }, []);

  //const getSearchValue = (e) => {
  //  console.log(e.target.value);
  //};

  const submitHandler= (event) => {
    event.preventDefault();
    getDataFromAPI();
  };

  const resetQuery = () => {
    /** */
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
              style={{ color: "blue" }}
              type="text"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />

            <input type="submit" value="search"  />
          </form>
          <input type="button" value="reset" onClick={resetQuery} />
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
