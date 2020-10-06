import React from 'react';
import {useStore} from '../../../hooks/hook-store';

import classes from './delete-confirmation.module.css';

const DeleteConfirmation = () => {
const [state, dispatch] = useStore();
const activitySelected = state.list[state.list.findIndex(el => el.id === state.activityID)];


const deleteActivityHandler = () => {
    dispatch('DELETE_ACTIVITY', state.activityID);
    dispatch('TOGGLE_MODAL');
}

    return(
        state.modalVisible? 
        <React.Fragment>
            <div className={classes.DeleteConfirmationBackground}>

            </div>
            <div className={classes.DeleteConfirmationModal}>
                <h2>Delete {state.activityID? activitySelected.title: null}?</h2>
                <button className={classes.DeleteButtonCancel} onClick={() => { dispatch('TOGGLE_MODAL')}}>Cancel</button>
                <button className={classes.DeleteButtonDelete} onClick={deleteActivityHandler}>Delete</button>
            </div>
        </React.Fragment> :
        null
    )
}

export default DeleteConfirmation;