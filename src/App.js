import React, {useState} from 'react';
import './App.css';

import {useStore} from './hooks/hook-store';
import TodoList from './components/todo-list/todo-list';
import TopBar from './UI/top-bar/top-bar';
import AddTodo from './components/add-todo/add-todo';
import ActivityDetails from './UI/activity-details/activity-details';

function App() {
  const [adderVisible, setAdderVisible] = useState(false);
  const state = useStore()[0];


  return (
    <React.Fragment>
      <TopBar />
      <TodoList adderToggle={() => {setAdderVisible(!adderVisible)}}/>

       {state.detailsVisible ? <ActivityDetails 
       id={state.activityDetails.id}
       title={state.activityDetails.title}
       duration={state.activityDetails.duration}
       completed={state.activityDetails.completed}/> : null} 
      {adderVisible? <AddTodo
        adderToggle={() => { setAdderVisible(!adderVisible) }}
        /> : null}
    </React.Fragment>
  );
}

export default App;
