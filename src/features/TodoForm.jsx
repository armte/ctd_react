import { useRef, useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  const todoTitleInput = useRef('');

  const handleAddTodo = function (event) {
    event.preventDefault();
    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle('');
    todoTitleInput.current.focus();
  };
  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel
        elementId="todoTitle"
        label="Todo"
        onChange={(ev) => setWorkingTodoTitle(ev.target.value)}
        ref={todoTitleInput}
        value={workingTodoTitle}
      />
      <button type="submit" disabled={workingTodoTitle === ''}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
