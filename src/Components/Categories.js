import React, { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
    const [stateData, setStateData] = useState([]);

    const getDataFromAPI = async () => {
        try {
          const data = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/categories.php`
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
return(
<div>
    category
</div>

)
}
export default  Categories ;
