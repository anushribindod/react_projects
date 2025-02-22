import React, { useState } from 'react';
import Todoitem2 from './Todoitem2';
import './TodoList1.css';

export default function TodoList1() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = { id: Math.random(), text: inputValue };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-header">Todo Application</h1>
      <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task name"
        />
        <button type="button" className="todo-button" onClick={addTodo}>
          Add Task
        </button>
      </form>

      <div className="todo-items">
        {todos.map((todo) => (
          <Todoitem2 key={todo.id} todo={todo} onRemove={removeTodo} />
        ))}
      </div>
    </div>
  );
}
