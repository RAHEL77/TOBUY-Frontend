import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "./Recipe";
// import Navbar from './Navbar'
const Main = () => {
  const [stateData, setStateData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("Onion");

  const getDataFromAPI = async () => {
    try {
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setStateData(data.data.meals);
      console.log(data.data.meals);
    } catch (e) {
      console.log(e, "api fetch error");
    }
  };
  useEffect(() => {
    getDataFromAPI();
  }, [query]);

  // useEffect(() => {
  //   getDataFromAPI();
  // }, []);

  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const getNewQuery = () => {
    setStateData(null);
    setQuery(searchValue);
    console.log(query);
  };

  return (
    <>
      {/* <Navbar /> */}
      {
        <div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              getSearchValue(e);
            }}
          />
          <input type="button" value="search" onClick={getNewQuery} />
          {stateData == null ? (
            <div>loading</div>
          ) : (
            stateData.map((link) => {
              return (
                <Recipe
                  key={link.idMeal}
                  recipe={link}
                />
              );
            })
          )}
        </div>
      }
    </>
  );
};
export default Main;
