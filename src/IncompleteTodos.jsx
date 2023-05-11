export function IncompleteTodos({ todos, toggleTodo, deleteTodo }) {

  const incompleteTodos = todos.filter(todo => !todo.completed);

  return <div>
    <h1 className="text-xl">Incomplete Todo's</h1>
    <ol>
      {incompleteTodos.map(todo => {
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
  </div>
}