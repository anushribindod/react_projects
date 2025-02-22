import React from 'react'

export default function TodoItem({todo,onRemove}) {
  return (
    <div>
      <span>{todo.text}</span>
      <span>{todo.id}</span>
      <button onClick={()=>onRemove(todo.id)}>Remove</button>
    </div>
  )
}
