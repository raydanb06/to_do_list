import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  const completedTodos = todos.filter(todo => todo.completed);
  const incompleteTodos = todos.filter(todo => !todo.completed);

  return <>

    <NewTodoForm setTodos={setTodos} />

    <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo}/>

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

  </>

}

export default App