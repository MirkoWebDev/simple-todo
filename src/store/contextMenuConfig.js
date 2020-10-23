import { initStore } from '../hooks/hook-store';

/* In This */

const configureMenu = () => {

    const actions = {
        SET_CONTEXT_ID: (curState,newID) => {
    
            return { contextID: newID }
        },
        SET_CONTEXT_COORDINATES: (curState,coordinates) => {
            if(window.innerWidth>600){
                return { contextCoordinates: { xPos: coordinates.x, yPos: coordinates.y } }
            }else{
                return { contextCoordinates: { xPos: '50%', yPos: '50%' } }

            }
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