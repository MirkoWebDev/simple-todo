import React, { useState } from 'react';
import TodoElement from '../todo-element/todo-element';

const TodoList = props => {
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
    const newElement = {
        title:listElements[index].title,
        duration: listElements[index].duration,
        completed: !listElements[index].completed
    }
    const newArray = [...listElements];
    newArray[index] = newElement;
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
            <button onClick={props.adderToggle}>Add ToDo</button>
        </div>
    )
}

export default TodoList