import React from 'react'
import {Link} from 'react-router-dom'
export default function Category({item}) {
    return (
        <Link to={`/categories/${item.strCategory}`}>
        <p>{item.strCategory}</p>
        <img src={item.strCategoryThumb} alt={item.strCategory}></img>
      </Link>
    )
}
