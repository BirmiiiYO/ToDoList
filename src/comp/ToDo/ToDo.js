import React from 'react';



import ToDoForm from '../ToDoForm/ToDoForm';

import "./todo.css";

const ToDo = ({todo, handleToggle}) => {

    
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }


    
    return (
        <div  
            className="todo" 
            id={todo.id} 
            key={todo.id + todo.task} 
            name="todo" 
            value={todo.id} 
            onClick={handleClick} 
            className={todo.complete ? "todo strike" : "todo"}>
                {todo.task}
         </div>
         
    );
};

export default ToDo;