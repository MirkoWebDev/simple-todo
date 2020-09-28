import React from 'react';
import {useStore} from '../../../hooks/hook-store';

import classes from './delete-confirmation.module.css';

const DeleteConfirmation = () => {


    return(
        <React.Fragment>
            <div className={classes.DeleteConfirmationBackground}>

            </div>
            <div className={classes.DeleteConfirmationModal}>

            </div>
        </React.Fragment>
    )
}

export default DeleteConfirmation;