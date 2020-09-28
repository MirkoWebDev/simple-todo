import React from 'react';
import {useStore} from '../../hooks/hook-store';

import classes from './contextual-menu.module.css';
const ContextualMenu = props => {
    const state = useStore()[0];


    return (
            <React.Fragment>
                <div className={classes.ContextualMenuWrapper} onClick={props.closing}>

                </div>

                <div
                    style={{
                        top: state.contextCoordinates.yPos,
                        left: state.contextCoordinates.xPos
                    }}
                    className={classes.ContextualMenu}>
                    <ul>
                        {props.children}
                    </ul>
                </div>
            </React.Fragment>    
    )
}

export default ContextualMenu;