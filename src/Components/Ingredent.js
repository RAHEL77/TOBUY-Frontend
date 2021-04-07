import React from "react";
const Ingredent = ({ name, measure,showAdd,showDelete }) => {
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
  const deleteTodo=()=>{

  }
  return (
    <div style = {{display:"flex" ,flexDirection: "row", flexWrap: "wrap",alignItems:"center", justifyContent:"space-around"}}>
      <p>{name}</p>
      <p>{measure}</p>
     {/* { showAdd!==false && <button type="button"  onClick={addtodo}>add todo</button>} */}
     {/* { showDelete && <button type="button"  onClick={deleteTodo}>Delete todo</button>} */}
     {  showAdd!==false && <input
	   onCheck={addtodo}
      	// onChange={() => setCheckboxValue(!checkboxValue)}
	    type="checkbox"
      onClick={addtodo}
/>}
    </div>
  );
}; 

export default Ingredent;
