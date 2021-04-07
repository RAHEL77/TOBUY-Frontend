import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center",
        // fontSize:"0.8rem",
        background:"lightgrey", height:"10vh",
        borderRadius:"0.25rem"
      }}
    >
      <h2 style={{color:"blue"}}> MY SHOPPING LIST FROM RECIPE</h2>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/todo">My Shopping List</Link>
    </div>
  );
};
export default Menu;
