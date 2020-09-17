import React, {useState} from 'react';

import './add-todo.css';


const AddTodo = props => {

const [activtyName, setactivtyName] = useState('');

    return(
        <div className="addTodoWrapper" onClick={props.adderToggle}>
            <div className="addTodo">
                <span onClick={props.adderToggle}>Close</span>
                <label>New Activity Name</label>
                <input type="text" placeholder="Insert name" value={activtyName} onChange={element => setactivtyName(element.target.value)}/>
                <label>Expire date</label>
                <input type="select"></input>
                <button onClick={props.addNew}>Add new Activity</button>
            </div>
        </div>
    )
}

export default AddTodo