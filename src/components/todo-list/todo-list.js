import React, { useState } from 'react';
import TodoElement from '../todo-element/todo-element';
import useGlobal from '../../store/store';

const TodoList = props => {
    const [state, setstate] = useGlobal();
const [listElements, setListElements] = useState([
    {title:'Get Groceries',
    duration:'today',
    completed:false},
    {title:'Code 1Hr',
    duration:'today',
    completed:false},
    {title:'Work Out',
    duration:'today',
    completed:false},
    {title:'Buy more coffee',
    duration:'today',
    completed:false}
])

const elementClickedHandler = index =>{
    const newArray = [...listElements];
    newArray[index].completed = !newArray[index].completed;
    setListElements(newArray);
}
    

    return(
        <div>
            <ul>
                {listElements.map((el,index) =>
                   (
                       <TodoElement
                       key={index}
                       clicked={() => elementClickedHandler(index)}
                       title = {el.title}
                       duration = {el.duration}
                       completed = {el.completed}/>
                   ) )}
            </ul>
            {state.counter}
            <button onClick={props.adderToggle}>Add ToDo</button>
        </div>
    )
}

export default TodoList