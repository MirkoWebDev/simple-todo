import React, {useState} from 'react';
import {useStore} from '../../hooks/hook-store';
import ContextualMenu from '../../UI/contextual-menu/contextual-menu'

import './todo-element.css';
const TodoElement = React.memo(props => {


const [showContext, setShowContext] = useState(false);
const dispatch = useStore(false)[1];

let repeatText = null;

if(props.repeat !== null){
    switch (props.repeat) {
        case 0:
            repeatText = 'Every day';
            break;
        case 1:
            repeatText = 'Every other day';
            break;
        case 6:
            repeatText = 'Every week';
            break;
        case 13:
            repeatText = 'Every two weeks';
            break;
        case 29:
            repeatText = 'Every month';
            break;
        default:
            break;
    }
}

const toggleCompletedHandler = () => {
    dispatch('TOGGLE_COMPLETED', props.id);
}
const toggleDeleteHandler = () => {
    setShowContext(false);
    dispatch('DELETE_ID', props.id);
    dispatch('TOGGLE_MODAL');
}
const contextHandler = (event) => {
    
        event.preventDefault();
        if(showContext){
            setShowContext(false);
        }else{
            const xPos = event.pageX + "px";
            const yPos = event.pageY + "px";
            dispatch('SET_CONTEXT_COORDINATES', { x: xPos, y: yPos });
            setShowContext(true);
        }
    };

    
    return(
        <React.Fragment>
        <li className={`todoElement ${props.completed? "completed" : ""}`} onContextMenu={contextHandler}>
            <div
                className={`check ${props.completed ? "completed" : ""}`}
                onClick={toggleCompletedHandler}>

                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="43" height="40" viewBox="0 0 61 52" className="check-icon">
                    <path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" className="cls-2" fillRule="evenodd" />
                </svg>
            </div>
                <span className="todoTitle" onClick={props.detailCall}>{props.title}
                    {repeatText?
                        <span className="repeatText">
                            <span className="material-icons">history</span>
                            {repeatText}
                        </span>
                    :null}
                </span>

            
        </li>
        {showContext ? 
            <ContextualMenu closing={contextHandler}>
                <li onClick={toggleDeleteHandler}>Delete</li>
            </ContextualMenu>
        :null}
        
        </React.Fragment>
    )
});


export default TodoElement;