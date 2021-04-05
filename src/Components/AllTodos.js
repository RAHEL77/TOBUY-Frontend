import React, { useState } from "react";
import Todo from "./Todo.component";
const AllTodos = () => {
  const [allTodos, setAllTodos] = useState([
    { id: 1, name: "CSS", completed: true },
    { id: 2, name: "JavaScript", completed: true },
    { id: 3, name: "React", completed: false },
    { id: 4, name: "Node JS", completed: false },
  ]);

  const handleClick = (id) => {
    const updatedToDo = allTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setAllTodos(updatedToDo);
  };

  return (
    <div>
      {allTodos.map((todo) => {
        return (
          <React.Fragment key={todo.key}>
            <Todo todo={todo} handleClick={handleClick} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default AllTodos;
