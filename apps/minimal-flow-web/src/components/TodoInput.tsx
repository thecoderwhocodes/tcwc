"use client";

import { useState } from "react";
import { createTodo } from "../app/(app)/home/actions";

export default function TodoInput() {
  const [title, setTitle] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);

    await createTodo(formData);

    setTitle("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Neues Todo"
      />
      <button>Add</button>
    </form>
  );
}