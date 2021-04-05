import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeItem from "./RecipeItem";
import {Link} from 'react-router-dom';

// import Navbar from './Navbar'
const Main = () => {
  const [stateData, setStateData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");

  const getDataFromAPI = async () => {
    try {
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        console.log(data);

        if(data.data.meals){
          setStateData(data.data.meals);
        }
        else
        {
          setStateData([]);
        }
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
    console.log(e.target.value);
  };

  const getNewQuery = () => {
    setQuery(searchValue);
    console.log(query);
  };

  const resetQuery = () => {
    /** */
    setSearchValue('');
    setQuery('');
  };
  return (
    <>
      {
        <div>
          <input style={{ color: "blue" }}
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <input type="button" value="search" onClick={getNewQuery} />
          <input type="button" value="reset" onClick={resetQuery} />
          <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
          {stateData.length == 0 ? (
            <div>loading</div>
          ) : (
            stateData.map((item) => {
              return (
                <RecipeItem
                  key={item.idMeal}
                  recipe={item}
                />
              );
            })
          )}
          </div>
        </div>
      }
    </>
  );
};
export default Main;
