import React from 'react';

import "./ToDoDel.css";

const ToDoDel = ({handleFilter}) => {
    return (
       
          <div className="del">
                <button onClick={handleFilter} className="btn">Убрать выполненные</button>
                </div>
    );
};

export default ToDoDel;