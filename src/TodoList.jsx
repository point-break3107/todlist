import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <li>No todos</li>}
      {todos.map((todo) => (
        <TodoItem 
        {...todo} 
        key={todo.id} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  )
}
