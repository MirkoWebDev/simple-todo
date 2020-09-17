import React from 'react';


import './todo-element.css';
const todoElement = props => {

    return(
        <li className={`todoElement ${props.completed? "completed" : ""}`}>
            <input type="checkbox" checked={props.completed} onClick={props.clicked}></input>
            <span className="todoTitle">{props.title}</span>
            <span className="todoDuration">{props.duration}</span>
        </li>
    )
}


export default todoElement;