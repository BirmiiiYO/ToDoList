import React, { useState } from "react";

import db from "./db.json";

import Header from "./comp/Header";
import ToDoList from "./comp/ToDoList/ToDoList";
import ToDoForm from "./comp/ToDoForm/ToDoForm";
import ToDoDel from "./comp/ToDoDel";



import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(db);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const updateTodo = (todoId, newValue) => {
    setToDoList(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false }
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      
      <div className="Cont">
      <Header />
    
      <ToDoForm addTask={addTask} />
      <div className="kolvo">Кол-во задач: {toDoList.length}</div>
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        updateTodo={updateTodo}
      />
     
      <ToDoDel handleFilter={handleFilter} />
      </div>
    </div>
  );
}

export default App;
