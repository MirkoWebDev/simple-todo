import React from 'react';


import 'todo-element.css';
const todoElement = props => {
    
    return(
        <li>
            <button>Completed</button>
            <span>{props.title}</span>
            <span>{props.duration}</span>
        </li>
    )
}


export default todoElement;