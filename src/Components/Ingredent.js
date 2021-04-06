import React from "react";
const Ingredent = ({ name, measure }) => {
  const addtodo=()=>{
    let todo=[];
    const jsonTodo=localStorage.getItem("todo")
    if (jsonTodo)
    {
      todo=JSON.parse(jsonTodo)
    }
    todo.push({name,measure})
    localStorage.setItem("todo",JSON.stringify(todo))
  }
  return (
    <div style = {{display:"flex"}}>
      <p>{name}</p>
      <p>{measure}</p>
      <button type="button" onClick={addtodo}>add todo</button>
    </div>
  );
}; 

export default Ingredent;
