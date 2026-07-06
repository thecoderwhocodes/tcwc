import { createServerClient } from "@tcwc/supabase/server";
import TodoInput from "../../../components/Todos/TodoInput";
import { toggleTodo, deleteTodo } from "./actions";
import AppPageHeader from "../../../components/AppPageHeader";
import styles from "../../../styles/accountPage.module.css"
import AppPageContent from "../../../components/AppPageContent";
import Link from "next/link";
import TodoList from "../../../components/Todos/TodoList";

export default async function HomePage() {
  const supabase = createServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return <p>Nicht eingeloggt</p>;

  const { data: todos } = await supabase
    .from("minimal_flow_todos")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="appPageContainer">
      <AppPageHeader title="Guten Morgen, Baran"></AppPageHeader>

      <AppPageContent>
        <div className="devidedContent">
          <section className="section">
            <h1>sss</h1>Hellosssss
          </section>

          <section className="section">
            <h2>Weitere Aufgaben</h2>
            <TodoList todos={todos ?? []} />
          </section>
        </div>
        <TodoInput />
      </AppPageContent>
    </div>
  );
}