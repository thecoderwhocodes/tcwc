"use client";

import { useState, useTransition } from "react";
import { createTodo } from "../../app/(app)/home/actions";

export default function TodoInput() {
  const [title, setTitle] = useState("");
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    startTransition(async () => {
      await createTodo(trimmedTitle);
      setTitle("");
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "16px",
      }}
    >
      <input
        type="text"
        placeholder="Neue Todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isPending}
        style={{
          flex: 1,
          padding: "8px 12px",
        }}
      />

      <button
        type="submit"
        disabled={isPending || !title.trim()}
      >
        {isPending ? "..." : "Hinzufügen"}
      </button>
    </form>
  );
}