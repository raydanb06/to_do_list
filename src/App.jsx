import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return <>

    <NewTodoForm setTodos={setTodos} />
    <h1>Todo List</h1>
    <ul>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={e => toggleTodo(todo.id, e.target.value)}/>
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  </>

}

export default App