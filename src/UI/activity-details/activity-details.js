import React, {useState, useEffect} from 'react';
import {useStore} from '../../hooks/hook-store';

import ContextMenu from '../contextual-menu/contextual-menu';

import menuClasses from './activity-menu.module.css';
import './activity-details.css';
const ActivityDetails = props => {

    const [state,dispatch] = useStore();
    const activitySelected = state.list[state.list.findIndex(el => el.id === state.activityID)];
    const [repeatContext, setRepeatContext] = useState(false);
    const [renameContext, setRenameContext] = useState(false);
    const [newActivityName, setNewActivityName] = useState('');
    const [note, setNote] = useState('')
    let menuRepeatText = 'Repeat';


    useEffect(() => {
        if(activitySelected && activitySelected.note){
            setNote(activitySelected.note)
        }else{
            setNote('');
        }
    }, [activitySelected])

    const deleteActivityHandler = () =>{
        dispatch('DELETE_ID', activitySelected.id);
        dispatch('TOGGLE_MODAL');
    }

    const contextMenuCoordinates = (event) => {
        const xPos = "10%";
        const yPos = (event.pageY + 13) + "px";
        dispatch('SET_CONTEXT_COORDINATES', { x: xPos, y: yPos });
    }


    const repeatContextHandler = (event) => {
        contextMenuCoordinates(event);
        setRepeatContext(true);
    }

    const renameActivityContext = (event) => {
        contextMenuCoordinates(event);
        setRenameContext(true);
    }
    const newNameHandler = () => {
        if(newActivityName!==''){
            dispatch('SET_NAME', { id: activitySelected.id, title: newActivityName })
            setRenameContext(false);
            setNewActivityName('');
        } 
    }

    const onNewNameKeyPress = event => {
        if (event.key === 'Enter') {
            newNameHandler();
        }
    }
    const onNewNoteKeyPress = event => {
        if (event.key === 'Enter') {
            noteSaveHandler();
        }
    }

    const repeatSettingHandler = repeatData => {
        dispatch('SET_REPEAT',{id:activitySelected.id, repeat:repeatData});
        setRepeatContext(false);
    }

    const noteChangeHandler = (e) =>{
        setNote(e.target.value);
    }

    const noteSaveHandler = () => {
        dispatch('SET_NOTE', {id:activitySelected.id, note:note});
        dispatch('CALL_NOTIFICATION', 'Note Saved');
    }



    const repeatSettingText = () => {
        switch (activitySelected.repeat) {
            case 0:
                menuRepeatText = 'Repeat every day';
                break;
            case 1:
                menuRepeatText = 'Repeat every other day';
                break;
            case 6:
                menuRepeatText = 'Repeat every week';
                break;
            case 13:
                menuRepeatText = 'Repeat every two weeks';
                break;
            case 29:
                menuRepeatText = 'Repeat every month';
                break;
            default:
                menuRepeatText = 'Repeat';
                break;
        }
    }
    if (activitySelected && activitySelected.repeat) {
        repeatSettingText();
    }


    return(
        <div className={`detailsWrapper ${state.activityID? "visible" : null}`}>
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
                                <li onClick={repeatContextHandler} title="Repeat">
                                    <span className="material-icons">history</span>
                                    {menuRepeatText}
                                </li>
                                <li onClick={renameActivityContext}> <span className="material-icons">create</span>Rename</li>
                                <li onClick={deleteActivityHandler}><span className="activityDeleter material-icons">delete_outline</span>Delete</li>
                            </span>
                            <span className={menuClasses.MenuListGroup}>
                                <textarea 
                                maxLength="250" 
                                rows="10" 
                                placeholder="Add Note..." 
                                value={note}
                                onChange={noteChangeHandler}
                                onKeyPress={onNewNoteKeyPress}/>
                                {note? 
                                    <button className="saveBtn" onClick={noteSaveHandler}>
                                         Save note
                                    </button>
                                :null}
                                
                            </span>
                        </ul>
                    </div>

                {repeatContext? 
                        <ContextMenu closing={() => { setRepeatContext(false) }}>
                            <li onClick={() => repeatSettingHandler(0)}>Every Day</li>
                            <li onClick={() => repeatSettingHandler(1)}>Every Other Day</li>
                            <li onClick={() => repeatSettingHandler(6)}>Weekly</li>
                            <li onClick={() => repeatSettingHandler(13)}>Every Other Week</li>
                            <li onClick={() => repeatSettingHandler(29)}>Montly</li>
                        </ContextMenu>
                :null}


                {renameContext? 
                    <ContextMenu closing={()=>{setRenameContext(false)}}>
                        <input 
                            type="text" 
                            placeholder="New Activity Name" 
                            value={newActivityName} 
                            onChange={(event) => {setNewActivityName(event.target.value)}}
                            onKeyPress={onNewNameKeyPress}
                        />
                        <button onClick={newNameHandler}>Set Name</button>
                    </ContextMenu>
                :null}
                </React.Fragment> : null }
                <span className="activityCloser material-icons" onClick={() => { dispatch('ACTIVITY_DETAIL', null); }}>keyboard_arrow_left</span>
            </div>
        </div>
       
    )
}

export default ActivityDetails;