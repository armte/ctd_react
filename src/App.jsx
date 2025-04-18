import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = function (title) {
    const newTodo = {
      title: title,
      id: Date.now(),
    };
    setTodoList([...todoList, newTodo]);
  };
  return (
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
