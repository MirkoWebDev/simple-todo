import React, {useState} from 'react';
import useGlobal from  '../../store/store';

import './add-todo.css';


const AddTodo = props => {


const [state, setstate] = useGlobal();
const [activtyName, setactivtyName] = useState('');

    return(
        <div className="addTodoWrapper" >
            <div className="addtoWrapperCloser" onClick={props.adderToggle}></div>
            <div className="addTodo">
                <span onClick={props.adderToggle}>Close</span>
                <label>New Activity Name</label>
                <input type="text" placeholder="Insert name" value={activtyName} onChange={element => setactivtyName(element.target.value)}/>
                <label>Expire date</label>
                <input type="select"></input>
                <button onClick={() => {setstate.addToCounter(1)}}>Add new Activity {state.counter}</button>
            </div>
        </div>
    )
}

export default AddTodo