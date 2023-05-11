export function CompletedTodos({ todos, toggleTodo, deleteTodo }) {

  const completedTodos = todos.filter(todo => todo.completed);

  return <>
    <h1 className="text-xl">Completed Todo's</h1>
    <ol>
      {completedTodos.map(todo => {
        return (
          <li key={todo.id}>
          <label>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={e => toggleTodo(todo.id)}/>
            {todo.title}
          </label>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        )
      })}
    </ol>
  </>
}