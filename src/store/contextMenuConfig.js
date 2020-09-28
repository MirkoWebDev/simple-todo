import React from 'react';
import { initStore } from '../hooks/hook-store';

/* In This */

const configureMenu = () => {

    const actions = {
        SET_CONTEXT_ID: (curState,newID) => {
    
            return { contextID: newID }
        },
        SET_CONTEXT_COORDINATES: (curState,coordinates) => {
    
            return { contextCoordinates: {xPos:coordinates.x,yPos:coordinates.y} }
        }
    }

    initStore(actions, {contextVisible:false,
        contextID:null,
        contextCoordinates:{
            xPos: 0,
            yPos: 0
        }
    });
}

export default configureMenu;