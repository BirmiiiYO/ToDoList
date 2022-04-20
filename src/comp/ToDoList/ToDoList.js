import React from 'react';
import ToDo from '../ToDo/ToDo';

const ToDoList = ({toDoList, handleToggle, updateToDo}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} updateToDo={updateToDo}/>
                )
            })}
        </div>
    );
};

export default ToDoList;
