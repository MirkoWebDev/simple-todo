import React from 'react';
import TodoElement from '../todo-element/todo-element';
import {useStore} from '../../hooks/hook-store';

const TodoList = props => {

const state = useStore()[0];
console.log(state)
    

    return(
        <div>
            <ul>
                {state.list.map(el =>(
                     <TodoElement
                       key={el.id}
                       id={el.id}
                       title = {el.title}
                       duration = {el.duration}
                       completed = {el.completed}
                    />
                   ) )}
            </ul>
            <button onClick={props.adderToggle}>Add ToDo</button>
        </div>
    )
}

export default TodoList;