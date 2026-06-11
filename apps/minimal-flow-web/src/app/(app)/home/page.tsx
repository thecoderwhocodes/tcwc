import { createServerClient } from "@tcwc/supabase/server";
import { cookies } from "next/headers";
import TodoInput from "../../../components/TodoInput";
import { toggleTodo, deleteTodo } from "./actions";

export default async function HomePage() {
  const supabase = createServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <p>Nicht eingeloggt</p>;
  }

  const { data: todos, error } = await supabase
    .from("minimal_flow_todos")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Meine Todos</h1>

      <TodoInput />

      <ul>
        {todos?.map((todo) => (
          <li key={todo.id} style={{ display: "flex", gap: 8 }}>
            
            {/* TOGGLE */}
            <form action={toggleTodo.bind(null, todo.id, todo.completed)}>
              <button type="submit">
                {todo.completed ? "✅" : "⬜"}
              </button>
            </form>

            <span>{todo.title}</span>

            {/* DELETE */}
            <form action={deleteTodo.bind(null, todo.id)}>
              <button type="submit">🗑️</button>
            </form>

          </li>
        ))}
      </ul>
    </div>
  );
}