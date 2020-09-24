import React from 'react';
import {useStore} from '../../hooks/hook-store';


import './todo-element.css';
const TodoElement = props => {
const dispatch = useStore(false)[1];

const toggleCompletedHandler = () => {
    dispatch('TOGGLE_COMPLETED', props.id);
}
const toggleDeleteHandler = () => {
    dispatch('DELETE_ACTIVITY', {
        id: props.id,
        title:props.title,
        completed: props.completed
    });
}
const toggleActivityDetail = () =>{
    dispatch('ACTIVITY_DETAIL',props.id);
    dispatch('TOGGLE_DETAILS');
}
    const contextHandler = (event) => {
        event.preventDefault();

        const xPos = event.pageX+ "px";
        const yPos = event.pageY + "px";


        dispatch('CREATE_CONTEXT', 
            [
                {
                    textContent: (
                        <span style={{ display: 'flex' }}>
                            <span className="material-icons">delete</span>
                            <span>Delete</span>
                        </span>
                    ),
                    id: props.id,
                    elementFunction: (f) => { f() }
                }
        ])
        dispatch('SET_CONTEXT_COORDINATES', { x: xPos, y: yPos });
        dispatch('TOGGLE_CONTEXT');

    };
    
    return(
        <li className={`todoElement ${props.completed? "completed" : ""}`} onContextMenu={contextHandler}>
            <div
                className={`check ${props.completed ? "completed" : ""}`}
                onClick={toggleCompletedHandler}>

                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="43" height="40" viewBox="0 0 61 52" className="check-icon">
                    <path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" className="cls-2" fillRule="evenodd" />
                </svg>
            </div>
            <span className="todoTitle" onClick={toggleActivityDetail}>{props.title}</span>
            
        </li>
    )
};


export default TodoElement;