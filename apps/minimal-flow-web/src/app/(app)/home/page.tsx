import { createClient } from "@tcwc/supabase/server";
import { TodoForm } from "../../../components/TodoInput";
import { TodoItem } from "../../../components/TodoItem";

export default async function HomePage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <p>Nicht angemeldet</p>;
  }

  const { data: todos } = await supabase
    .from("minimal_flow_todos")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1>Meine Todos</h1>

      <TodoInput />

      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}