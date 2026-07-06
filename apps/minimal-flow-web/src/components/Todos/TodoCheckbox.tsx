"use client";

import { useTransition } from "react";
import { toggleTodo } from "../../app/(app)/home/actions";

export default function TodoCheckbox({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <input
      className="todoCheckbox"
      type="checkbox"
      checked={completed}
      disabled={isPending}
      onChange={() => {
        startTransition(async () => {
          await toggleTodo(id);
        });
      }}
    />
  );
}