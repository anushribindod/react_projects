import React from 'react';

export default function Todoitem2({ todo, onRemove }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>Remove</button>
    </div>
  );
}
