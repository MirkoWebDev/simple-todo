import React from 'react';
import {useStore} from '../../hooks/hook-store';


import './todo-element.css';
const TodoElement = props => {
const dispatch = useStore(false)[1];

    console.log('Todo Element RENDERED');

const toggleCompletedHandler = () => {
    dispatch('TOGGLE_COMPLETED', props.id);
}

    
    return(
        <li className={`todoElement ${props.completed? "completed" : ""}`}>
            <button onClick={toggleCompletedHandler}>Completed</button>
            <span className="todoTitle">{props.title}</span>
            <span className="todoDuration">{props.duration}</span>
        </li>
    )
};


export default TodoElement;