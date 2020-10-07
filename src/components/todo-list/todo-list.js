import React, {useState} from 'react';
import TodoElement from '../todo-element/todo-element';
import {useStore} from '../../hooks/hook-store';

import completedClasses from './completed.module.css';

const TodoList = props => {

const state = useStore()[0];
const [showCompleted, setShowCompleted] = useState(false);

let completed = state.list.filter(el => el.completed).map((el, index) => 
                <TodoElement
                    key={index}
                    id={el.id}
                    title={el.title}
                    duration={el.duration}
                    completed={el.completed}
                />
    );
    return(
        <div>
            <ul>
                {state.list.filter(el => !el.completed).map((el, index) =>

                            <TodoElement
                                key={index}
                                id={el.id}
                                title={el.title}
                                duration={el.duration}
                                completed={el.completed}
                            />
 
                )}
            </ul>

                {completed.length > 0? 
                
                <div>
                    <button className={completedClasses.CompletedButton} onClick={()=>{setShowCompleted(!showCompleted)}}>
                        <span className={`material-icons ${completedClasses.Arrow} ${showCompleted? completedClasses.ArrowTurn:null}`}>
                            keyboard_arrow_right
                        </span> 
                        Completed</button>

                    <ul className={`${completedClasses.CompletedList} ${showCompleted? completedClasses.ListActive:null}`}>
                        {completed}
                    </ul>
                </div>
                
                : null}
            
        </div>
    )
}

export default TodoList;