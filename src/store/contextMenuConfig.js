import React from 'react';
import { initStore } from '../hooks/hook-store';

/* In This */

const configureMenu = () => {

    const actions = {
        CREATE_CONTEXT: (curState,newElements) => {
    
            return { contextElements: newElements }
        },
        SET_CONTEXT_COORDINATES: (curState,coordinates) => {
    
            return { contextCoordinates: {xPos:coordinates.x,yPos:coordinates.y} }
        },
        TOGGLE_CONTEXT: curState => {
            const newState = !curState.contextVisible;
            return { contextVisible: newState}
        }
    }

    initStore(actions, {contextVisible:false,
        contextElements: [{
            textContent:(
                <span style={{display:'flex'}}>
                    <span className="material-icons">delete_outline</span>
                    <span>Delete</span>
                </span>
            ),
            id:null
        }],
        contextCoordinates:{
            xPos: 0,
            yPos: 0
        }
    });
}

export default configureMenu;