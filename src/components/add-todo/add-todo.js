import React, {useState} from 'react';
import {useStore} from  '../../hooks/hook-store';
import uuid from 'react-uuid';

import ContextMenu from '../../UI/contextual-menu/contextual-menu';
import './add-todo.css';



const AddTodo = props => {
const  dispatch = useStore(false)[1];
const [activtyName, setActivtyName] = useState('');
const [repeat, setRepeat] = useState(0);
const [repeatMenuVisible, setRepeatMenuVisible] = useState(false);

const onKeyPress = event => {
    if(event.key === 'Enter'){
        addActivityHander();
    }
}
const addActivityHander = () => {
    if(!activtyName){
        document.getElementById('activityInput').focus();
    }else{
        setActivtyName('');
        dispatch('ADD_ACTIVITY',{
            id:uuid(),
            title:activtyName,
            completed: false,
            completedDate: null,
            repeat: repeat
        });
        setRepeat(0);
    }
}

const repeatSettingHandler = repNr => {
    setRepeat(repNr);
    setRepeatMenuVisible(false);
}


const contextRepeatSettingHandler = (event) => {
    if(repeatMenuVisible){
        setRepeatMenuVisible(false);
    }else{
        const xPos = (event.pageX - 400) + "px";
        const yPos = (event.pageY-234) + "px";
        dispatch('SET_CONTEXT_COORDINATES', { x: xPos, y: yPos });
        setRepeatMenuVisible(true);
    }
}


    return(
        <React.Fragment>
            <div className="addTodoWrapper" >
                <span onClick={addActivityHander} className="material-icons adderIcon">
                    done
            </span>
                <input id="activityInput"
                    type="text"
                    placeholder="Add Activity"
                    value={activtyName}
                    onChange={event => { setActivtyName(event.target.value) }}
                    onKeyPress={onKeyPress} />
                <span className="material-icons" title="Repeat" onClick={contextRepeatSettingHandler}>
                    history
            </span>
            </div>
            { repeatMenuVisible? 
                <ContextMenu closing={() => setRepeatMenuVisible(false)}>
                    <li onClick={() => repeatSettingHandler(0)}>Every Day (Default)</li>
                    <li onClick={() => repeatSettingHandler(1)}>Every Other Day</li>
                    <li onClick={() => repeatSettingHandler(6)}>Once A Week</li>
                    <li onClick={() => repeatSettingHandler(13)}>Once Every Two Weeks</li>
                    <li onClick={() => repeatSettingHandler(29)}>Once Every 30 days</li>
                </ContextMenu>
            :null}
            
            
        </React.Fragment>
            
       
    )
}

export default AddTodo