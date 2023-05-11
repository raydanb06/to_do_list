export function TodoList({ todos, toggleTodo, deleteTodo }) {

  return <div>
    <h1 className="text-xl">Todo List</h1>
    <ul>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
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
    </ul>
  </div>
}