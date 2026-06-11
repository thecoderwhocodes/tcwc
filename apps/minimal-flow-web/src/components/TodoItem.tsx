"use client";

import { toggleTodo, deleteTodo } from "../app/(app)/home/actions";

export function TodoItem({
  todo,
}: {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
}) {
  return (
    <li>
      <button
        onClick={() => toggleTodo(todo.id, !todo.completed)}
      >
        {todo.completed ? "✅" : "⬜"}
      </button>

      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => deleteTodo(todo.id)}>🗑</button>
    </li>
  );
}