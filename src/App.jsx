import { useState } from "react"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { CompletedTodos } from "./CompletedTodos";
import { IncompleteTodos } from "./IncompleteTodos";

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

  return <>

    <NewTodoForm 
      setTodos={setTodos}
    />

    <div className="flex justify-evenly">
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

      <IncompleteTodos 
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo} 
      />

    </div>

  </>

}

export default App