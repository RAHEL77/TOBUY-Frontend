import React from 'react'
import {Link} from 'react-router-dom'
export default function Category({item}) {
    return (
        <Link to={`/categories/${item.strCategory}`} style={{textDecoration: "none", width: "25vw", height: "25vw", margin: "5px" }}>
        <p>{item.strCategory}</p>
        <img src={item.strCategoryThumb} alt={item.strCategory}
                  style={{ width: "15vw" }}
                  ></img>
      </Link>
    )
}
