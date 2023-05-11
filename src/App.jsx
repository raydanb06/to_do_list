import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { CompletedTodos } from "./CompletedTodos";

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed : !todo.completed }
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

  const incompleteTodos = todos.filter(todo => !todo.completed);

  return <>

    <NewTodoForm setTodos={setTodos} />

    <TodoList 
      todos={todos}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}  
    />

    <CompletedTodos 
      todos={todos}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo} 
    />

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