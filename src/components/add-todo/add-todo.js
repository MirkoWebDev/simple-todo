import React, {useState} from 'react';
import {useStore} from  '../../hooks/hook-store';
import uuid from 'react-uuid';

import './add-todo.css';



const AddTodo = props => {
const  dispatch = useStore(false)[1];
const [activtyName, setActivtyName] = useState('');
const [duration, setDuration] = useState('today');
const [repeat, setRepeat] = useState(1);

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
            repeat: repeat,
            plannedFor: null 
        })
    }
}

const repeatHandler = repNr => {

    
}



    return(
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
                <span className="material-icons">
                    alarm
            </span>
                <span className="material-icons" title="Repeat">
                    history
            </span>
            </div>
       
    )
}

export default AddTodo