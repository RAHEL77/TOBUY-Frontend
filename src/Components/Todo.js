import React from 'react'
import Ingredent from './Ingredent';
// import ReactPDF from '@react-pdf/react-pdf';
// import { pdfjs } /////////////////////////////from 'react-pdf';



const Todo = ({ name, measure }) => {
  // const deleteItem=()=>{
  // }
  const downloadList=()=>{
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
      <div style = {{display:"flex", flexDirection:"column",justifyContent:"space-around", color:"gray"}}>
              <h2 >Dont Forget to Buy</h2>

             {getItems().map((item,idx) => {
                return <Ingredent showAdd={false} key={idx} name={item.name} measure={item.measure} />;
              })}
    
        {/* <button type="button" onClick={deleteItem}>delete</button> */}
        {/* <button  style={{textDecoration: "none",textAlign:"center",margin:"auto", width: "10vw", height: "2vw",background:"lightgray" }} */}
      
        {/* type="button"  onClick={downloadList}>download PDF</button> */}
      </div>
    );
  }; 
  export default Todo;
