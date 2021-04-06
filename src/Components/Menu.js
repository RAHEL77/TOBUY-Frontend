import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/todo">Todo</Link>
    </div>
  );
};
export default Menu;
