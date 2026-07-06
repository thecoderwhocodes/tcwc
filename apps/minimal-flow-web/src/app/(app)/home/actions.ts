"use server";

import { createServerClient } from "@tcwc/supabase/server";
import { revalidatePath } from "next/cache";

// CREATE
export async function createTodo(title: string) {
  const supabase = createServerClient();

  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) return;

  await supabase.from("minimal_flow_todos").insert({
    title,
    user_id: userData.user.id,
    completed: false,
  });

  revalidatePath("/home");
}

// TOGGLE
export async function toggleTodo(id: string) {
  const supabase = createServerClient();

  const { data } = await supabase
    .from("minimal_flow_todos")
    .select("completed")
    .eq("id", id)
    .single();

  if (!data) return;

  await supabase
    .from("minimal_flow_todos")
    .update({ completed: !data.completed })
    .eq("id", id);

  revalidatePath("/home");
}

// DELETE
export async function deleteTodo(id: string) {
  const supabase = createServerClient();

  await supabase
    .from("minimal_flow_todos")
    .delete()
    .eq("id", id);

  revalidatePath("/home");
}