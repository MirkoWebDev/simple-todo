import React from 'react';
import TodoElement from '../todo-element/todo-element';
import {useStore} from '../../hooks/hook-store';

const TodoList = props => {

const state = useStore()[0];
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
        </div>
    )
}

export default TodoList;