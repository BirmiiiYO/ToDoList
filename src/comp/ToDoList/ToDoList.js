import React from 'react';
import ToDo from '../ToDo/ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} />
                )
            })}
        </div>
    );
};

export default ToDoList;
