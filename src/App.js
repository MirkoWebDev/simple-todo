import React, {useState} from 'react';
import './App.css';

import {useStore} from './hooks/hook-store';
import TodoList from './components/todo-list/todo-list';
import TopBar from './UI/top-bar/top-bar';
import AddTodo from './components/add-todo/add-todo';
import ActivityDetails from './UI/activity-details/activity-details';
import ContextMenu from './UI/contextual-menu/contextual-menu';
import Modal from './UI/Modal/modal';

function App() {
  const state = useStore()[0];


  return (
    <div>
      {state.contextVisible ? 
      <ContextMenu />
         : null}
      {state.modalVisible? 
        <Modal>

        </Modal> 
      : null}
      
      <TopBar />
      <TodoList />

      <ActivityDetails />
      <AddTodo /> 
   
    </div>
  );
}

export default App;
