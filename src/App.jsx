import { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [newTodo, setNewTodo] = useState('Todo to Complete');
  return (
    <div>
      <h1>My Todos</h1>
      <p>{newTodo}</p>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
