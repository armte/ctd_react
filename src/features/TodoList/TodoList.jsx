import TodoListItem from './TodoListItem';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo, isLoading }) {
  const filteredTodos = todoList.filter((todo) => !todo.isCompleted);
  return isLoading ? (
    <p>Todo list loading...</p>
  ) : filteredTodos.length === 0 ? (
    <p>Add todo above to get started...</p>
  ) : (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
