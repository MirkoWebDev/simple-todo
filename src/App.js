import React from 'react';
import './App.css';

import {useStore} from './hooks/hook-store';
import TodoList from './components/todo-list/todo-list';
import TopBar from './UI/top-bar/top-bar';
import AddTodo from './components/add-todo/add-todo';
import ActivityDetails from './UI/activity-details/activity-details';
import DeleteConfirmation from './components/menu/delete-confirmation/delete-confirmation';

function App() {
  const state = useStore()[0];


  return (
    <React.Fragment>   
      <TopBar />
      <TodoList />

      <ActivityDetails />
      <AddTodo /> 
   
      <DeleteConfirmation />

    </React.Fragment>
  );
}

export default App;
