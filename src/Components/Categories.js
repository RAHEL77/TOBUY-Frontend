import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from './Category'

const Categories = () => {


  const [stateData, setStateData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDataFromAPI = async () => {
    try {
      setIsLoading(true);
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      console.log(data);

      if (data.data.categories) {
        setStateData(data.data.categories);
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
            <Category  key={item.idCategory} item={item}/>
        );
        })
      )}
    </div>
  );
};
export default Categories;
