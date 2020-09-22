import React, {useState} from 'react';
import {useStore} from '../../hooks/hook-store';

import './activity-details.css';
const ActivityDetails = props => {

    const dispatch = useStore(false)[1];
    const [deleteConfirmation, setdeleteConfirmation] = useState(false)


    const deleteActivityHandler = () =>{
        dispatch('TOGGLE_DETAILS');
        dispatch('DELETE_ACTIVITY', props.id);
    }

    const deleteConfirm = (
        <div>
            <p>Delete Activity?</p>
            <button onClick={deleteActivityHandler}>Confirm</button>
            <button onClick={() => {setdeleteConfirmation(false)}}>Cancel</button>
        </div>
    );

    return(
        <div className="detailsWrapper">
            <div className="details">
                <div
                    className={`check ${props.completed ? "completed" : ""}`}
                    onClick={() => { dispatch('TOGGLE_COMPLETED', props.id); }}>

                        <svg xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid" width="61" height="52" viewBox="0 0 61 52" className="check-icon">
                            <path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" className="cls-2" fillRule="evenodd" />
                        </svg>
                    </div>
                <h3>{props.title}</h3>
                <p>Expiration {props.duration}</p>

                <button onClick={()=>{setdeleteConfirmation(true)}}>Delete To Do</button>
            </div>
            {deleteConfirmation ? deleteConfirm : null}
        </div>
       
    )
}

export default ActivityDetails;