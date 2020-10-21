import React from 'react';
import {useStore} from '../../../hooks/hook-store';

import classes from './delete-confirmation.module.css';

const DeleteConfirmation = () => {
const [state, dispatch] = useStore();
const activitySelected = state.list[state.list.findIndex(el => el.id === state.deleteID)];


const deleteActivityHandler = () => {
    dispatch('DELETE_ACTIVITY', state.deleteID);
    dispatch('ACTIVITY_DETAIL', null);
    dispatch('DELETE_ID', null);
    dispatch('TOGGLE_MODAL');
    dispatch('CALL_NOTIFICATION', 'Activity Deleted');
}

    return(
        state.modalVisible? 
        <React.Fragment>
            <div className={classes.DeleteConfirmationBackground}>

            </div>
            <div className={classes.DeleteConfirmationModal}>
                <h2>Delete Activity</h2>
                    <p>This will delete "{state.deleteID ? activitySelected.title : null}"</p>
                <button className={classes.DeleteButtonCancel} onClick={() => { dispatch('TOGGLE_MODAL')}}>Cancel</button>
                <button className={classes.DeleteButtonDelete} onClick={deleteActivityHandler}>Delete</button>
            </div>
        </React.Fragment> :
        null
    )
}

export default DeleteConfirmation;