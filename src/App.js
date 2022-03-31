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
            todoList.map(todo=>(
              <Todoitem 
                name={todo.item} 
                done={todo.done}
                id={todo.id}
                key={todo.id}
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
