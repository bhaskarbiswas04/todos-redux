import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./store";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <div className="app-container">
      <h1>Todo Application</h1>

      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          placeholder="Enter todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li className="todo-item">
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.text))}
              className="remove-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
