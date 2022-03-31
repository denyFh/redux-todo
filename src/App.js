import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Todoitem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {

  const todoList = useSelector(selectTodoList);

  return (
    <div className="App">
      <h1 style={{color: 'white'}}>TodoApps v2</h1>
      <div className="app-container">
        <div className="app-todo-container">
          {
            todoList.map(item=>(
              <Todoitem 
                name={item.item} 
                done={item.done}
                id={item.id}
                key={item.id}
              />
            ))
          }
        </div>

        <Inputs />
      </div>
    </div>
  );
}

export default App;
