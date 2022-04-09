import React, { useState } from 'react';

import "./Forn.css";

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        
        <form onSubmit={handleSubmit} className="form">
            <input value={userInput} className="input"  type="text" onChange={handleChange} placeholder="Введите заметку"  pattern=".{3,}" required />
            <button className='btn'>Добавить</button>
        </form>
        
    );
};

export default ToDoForm;