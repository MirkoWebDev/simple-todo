import React, {useState} from 'react';
import {useStore} from  '../../hooks/hook-store';

import './add-todo.css';


const AddTodo = props => {
const  dispatch = useStore(false)[1];
const [activtyName, setactivtyName] = useState('');
const [duration, setduration] = useState('');

const addActivityHandler = () =>{
    dispatch('ADD_ACTIVITY', {title:activtyName,duration: duration});
    props.adderToggle();
}

    return(
        <div className="addTodoWrapper" >
            <div className="addtoWrapperCloser" onClick={props.adderToggle}></div>
            <div className="addTodo">
                <span className="addClose" onClick={props.adderToggle}>X</span>
                <label>New Activity Name</label>
                <input type="text" 
                placeholder="Insert name" 
                value={activtyName} 
                onChange={element => setactivtyName(element.target.value)}
                />
                <label>Expire date</label>
                <select
                    value = {duration}
                    onChange={element => setduration(element.target.value)}
                >
                    <option>Select Option</option>
                    <option value="today">Today</option>
                </select>
                <button onClick={addActivityHandler}>Add new Activity</button>
            </div>
        </div>
    )
}

export default AddTodo