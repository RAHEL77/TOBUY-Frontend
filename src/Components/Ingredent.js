import React from "react";
const Ingredent = ({ name, measure }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{measure}</p>
    </div>
  );
};

export default Ingredent;
