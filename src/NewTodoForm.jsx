import { useState } from "react";

export function NewTodoForm( {setTodos} ) {
  const [newItem, setNewItem] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false}
    ]})
    setNewItem("");
  }
  
  return <>
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div>
        <label htmlFor="item">New Item:</label>
        <input 
        value={newItem}
        onChange={e => {setNewItem(e.target.value)}}
        type="text"
        id="item"
        className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 focus:outline-none focus:ring focus:ring-red-600/10"
        />
      </div>
      <button className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Add Item</button>
    </form>
  </>
}

// export default NewTodoForm;