import React from 'react';
import {useStore} from '../../../hooks/hook-store';

import classes from './delete-confirmation.module.css';

const DeleteConfirmation = () => {
const [state, dispatch] = useStore();
const activitySelected = state.list[state.list.findIndex(el => el.id === state.activityID)];


const deleteActivityHandler = () => {
    dispatch('DELETE_ACTIVITY', state.activityID);
    dispatch('ACTIVITY_DETAIL', null);
    dispatch('TOGGLE_MODAL');
}

    return(
        state.modalVisible? 
        <React.Fragment>
            <div className={classes.DeleteConfirmationBackground}>

            </div>
            <div className={classes.DeleteConfirmationModal}>
                <h2>Delete Activity</h2>
                    <p>This will delete "{state.activityID ? activitySelected.title : null}"</p>
                <button className={classes.DeleteButtonCancel} onClick={() => { dispatch('TOGGLE_MODAL')}}>Cancel</button>
                <button className={classes.DeleteButtonDelete} onClick={deleteActivityHandler}>Delete</button>
            </div>
        </React.Fragment> :
        null
    )
}

export default DeleteConfirmation;