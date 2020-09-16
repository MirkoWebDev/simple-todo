import React from 'react';
import './App.css';

import TodoList from './components/todo-list/todo-list';
import TopBar from './UI/top-bar/top-bar';

function App() {
  return (
    <React.Fragment>
      <TopBar />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
