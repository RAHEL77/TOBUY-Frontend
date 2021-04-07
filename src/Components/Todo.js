import React from 'react'
import Ingredent from './Ingredent';

const Todo = ({ name, measure }) => {
  const deleteItem=()=>{
  }
    const getItems=()=>{
      let todo=[];
      const jsonTodo=localStorage.getItem("todo")
      if (jsonTodo)
      {
        todo=JSON.parse(jsonTodo)
      }
    return todo;  
    }
    return (
      <div style = {{display:"flex", flexDirection:"column"}}>
             {getItems().map((item,idx) => {
                return <Ingredent showAdd={false} key={idx} name={item.name} measure={item.measure} />;
              })}
    
        {/* <button type="button" onClick={deleteItem}>delete</button> */}
      </div>
    );
  }; 
  export default Todo;
