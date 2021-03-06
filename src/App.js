import React from 'react';
import './App.css';

import TodoList from './components/todo-list/todo-list';
import AddTodo from './components/add-todo/add-todo';
import ActivityDetails from './UI/activity-details/activity-details';
import DeleteConfirmation from './components/menu/delete-confirmation/delete-confirmation';
import Notification from './UI/notification/notification';

function App() {


  return (
    <React.Fragment>   
      <TodoList />

      <ActivityDetails />
      <AddTodo /> 
   
      <DeleteConfirmation />
      <Notification />

    </React.Fragment>
  );
}

export default App;
