import React, {useState} from "react";


const Ingredent = ({ name, measure,showAdd,showDelete }) => {
  const {shoppingList,setShoppingList}=useState(null);
const saveShoppingList=()=>{
  //save the current shopping list to local storage
}
  const updateShoppingList=()=>{
    //1. first check if cheked is true
    if(cheked){
      const newShoppingList=[];
      //validate duplicates
      if(!shoppingList[name]){
        newShoppingList.push({name,measure})
      }
      setShoppingList(shoppingList,...newShoppingList)
    }else{
      const currentShoppingList=[...shoppingList];
      const newShoppingList=currentShoppingList.delete(//specific item);
      setShoppingList(shoppingList,...newShoppingList)
    }
    
  }

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
     {/* { showAdd!==false && <button type="button"  onClick={addtodo}>add todo</button>} */}
     {  showAdd!==false && <input
	   checked={updateShoppingList}
      	// onChange={() => setCheckboxValue(!checkboxValue)}
	    type="checkbox"
      onClick={updateShoppingList}
/>}
     {/* { showDelete && <button type="button"  onClick={deleteTodo}>Delete todo</button>} */}
   {  showDelete && <input
	   checked={updateShoppingList}
      	// onChange={() => setCheckboxValue(!checkboxValue)}
	    type="checkbox"
/>}
<button onClick={saveShoppingList} >save</button>
    </div>
  );
}; 

export default Ingredent;
