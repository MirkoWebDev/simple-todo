import React from 'react';
import {useStore} from '../../hooks/hook-store';

import classes from './contextual-menu.module.css';
const ContextualMenu = props => {
    const [state,dispatch] = useStore();


    const contextHandler = () => {
        dispatch('TOGGLE_CONTEXT');
    };
    const deleteHandler = (id) => {
        dispatch('TOGGLE_MODAL');
        dispatch('ACTIVITY_DETAIL', id);
    }
    const contextElements = state.contextElements.map((el,index) => 
        {
            return(
                <li key={index} onClick={() => {deleteHandler(el.id)}}>{el.textContent}</li>
            )
    })
    return (
        <React.Fragment>
            <div className={classes.ContextualMenuWrapper} onClick={contextHandler}>

            </div>

            <div 
            style={{
                    top: state.contextCoordinates.yPos,
                    left: state.contextCoordinates.xPos
                }} 
            className={classes.ContextualMenu}>
                <ul>
                    {contextElements}
                </ul>
            </div>
        </React.Fragment>
        
        
    )
}

export default ContextualMenu;