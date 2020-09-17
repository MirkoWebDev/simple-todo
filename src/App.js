import React, {useState} from 'react';
import './App.css';

import TodoList from './components/todo-list/todo-list';
import TopBar from './UI/top-bar/top-bar';
import AddTodo from './components/add-todo/add-todo';

function App() {
  const [adderVisible, setAdderVisible] = useState(false);


  return (
    <React.Fragment>
      <TopBar />
      <TodoList adderToggle={() => {setAdderVisible(!adderVisible)}}/>

      {adderVisible? <AddTodo
        adderToggle={() => { setAdderVisible(!adderVisible) }}
        /> : null}
    </React.Fragment>
  );
}

export default App;
