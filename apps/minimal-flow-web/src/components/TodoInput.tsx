"use client";

import { useState } from "react";
import { createTodo } from "../app/(app)/home/actions";

export function TodoInput() {
  const [title, setTitle] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    await createTodo(title);
    setTitle("");
  }

  return (
    <form action={createTodo}>
        <input name="title" />
        <button type="submit">Add</button>
        </form>
  );
}