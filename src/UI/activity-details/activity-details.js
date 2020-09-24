import React, {useState} from 'react';
import {useStore} from '../../hooks/hook-store';


import menuClasses from './activity-menu.module.css';
import './activity-details.css';
const ActivityDetails = props => {

    const [state,dispatch] = useStore();
    const [deleteConfirmation, setdeleteConfirmation] = useState(false)
    const activitySelected = state.list[state.list.findIndex(el => el.id === state.activityID)];



    const deleteActivityHandler = () =>{
        setdeleteConfirmation(false);
        dispatch('TOGGLE_DETAILS');
        dispatch('DELETE_ACTIVITY', activitySelected.id);
    }

    const deleteConfirm = (
        <div className='deleteConfirmation'>
            <p>Delete Activity?</p>
            <button className='btn btnDanger' onClick={deleteActivityHandler}>Confirm</button>
            <button className='btn' onClick={() => {setdeleteConfirmation(false)}}>Cancel</button>
        </div>
    );

    return(
        <div className={`detailsWrapper ${state.detailsVisible? "visible" : null}`}>
            <div className="details">
                {activitySelected ? <React.Fragment>

                    <h3>
                        <span
                            className={`check ${activitySelected.completed ? "completed" : ""}`}
                            onClick={() => { dispatch('TOGGLE_COMPLETED', activitySelected.id); }}>

                                <svg xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid" width="30" height="30" viewBox="0 0 61 52" className="check-icon">
                                    <path d="M56.560,-0.010 C37.498,10.892 26.831,26.198 20.617,33.101 C20.617,33.101 5.398,23.373 5.398,23.373 C5.398,23.373 0.010,29.051 0.010,29.051 C0.010,29.051 24.973,51.981 24.973,51.981 C29.501,41.166 42.502,21.583 60.003,6.565 C60.003,6.565 56.560,-0.010 56.560,-0.010 Z" id="path-1" className="cls-2" fillRule="evenodd" />
                                </svg>
                        </span>
                {activitySelected.title}</h3>
                    <div className={menuClasses.MenuList}>
                        <ul>
                            <span className={menuClasses.MenuListGroup}>
                                <li>Temp</li>
                                <li>Temp</li>
                            </span>
                            <span className={menuClasses.MenuListGroup}>
                                <li>Temp</li>
                                <li>Temp</li>
                                <li>Temp</li>
                                <li>Temp</li>
                            </span>
                        </ul>
                    </div>
                        
                <p>Expiration {activitySelected.duration}</p>
                </React.Fragment> : null }

                <span className="activityDeleter material-icons" onClick={() => { setdeleteConfirmation(true); }}>delete_outline</span>
                <span className="activityCloser material-icons" onClick={() => { dispatch('TOGGLE_DETAILS'); }}>keyboard_arrow_left</span>
            </div>
            {deleteConfirmation ? deleteConfirm : null}
        </div>
       
    )
}

export default ActivityDetails;