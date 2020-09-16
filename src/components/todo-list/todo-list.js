import React, { useState } from 'react';
import TodoElement from '../todo-element/todo-element';

const todoList = props => {
const [listElements, setListElements] = useState([
    {title:'Get Groceries',
    duration:'today'},
    {title:'Code 1Hr',
    duration:'today'},
    {title:'Work Out',
    duration:'today'},
    {title:'Buy more coffee',
    duration:'today'}
])
    

    return(
        <div>
            <ul>
                {listElements.map(el =>
                   (
                       <TodoElement
                       title = {el.title}
                       duration = {el.duration} />
                   ) )}
            </ul>
        </div>
    )
}

export default todoList