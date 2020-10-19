import React, {useState} from 'react';
import TodoElement from '../todo-element/todo-element';
import {useStore} from '../../hooks/hook-store';

import classes from './todo-list.module.css';

const TodoList = props => {

const [state, dispatch] = useStore();
const [showCompleted, setShowCompleted] = useState(true);

const actvitiDetailHandler = id =>{
    if (state.activityID) {
        if (state.activityID === id) {
            dispatch('TOGGLE_DETAILS');
        } else {
            dispatch('ACTIVITY_DETAIL',id);
        }
    } else {
        dispatch('ACTIVITY_DETAIL',id);
        dispatch('TOGGLE_DETAILS');
    }
}

let completed = state.list.filter(el => el.completed).map(el => 
                <TodoElement
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    duration={el.duration}
                    completed={el.completed}
                    detailCall={() => {actvitiDetailHandler(el.id)}}
                />
    );

    return(
        <div className={classes.TodoWrapper}>
            <ul>
                {state.list.filter(el => !el.completed).map(el =>

                            <TodoElement
                                key={el.id}
                                id={el.id}
                                title={el.title}
                                duration={el.duration}
                                completed={el.completed}
                                detailCall={() => { actvitiDetailHandler(el.id)}}
                            />
 
                )}
            </ul>

                {completed.length > 0? 
                
                <div>
                    <button className={classes.CompletedButton} onClick={()=>{setShowCompleted(!showCompleted)}}>
                        <span className={`material-icons ${classes.Arrow} ${showCompleted? classes.ArrowTurn:null}`}>
                            keyboard_arrow_right
                        </span> 
                        Completed</button>

                    <ul className={`${classes.CompletedList} ${showCompleted? classes.ListActive:null}`}>
                        {completed}
                    </ul>
                </div>
                
                : null}

            
        </div>
    )
}

export default TodoList;