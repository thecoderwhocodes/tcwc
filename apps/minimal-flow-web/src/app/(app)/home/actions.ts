"use server";

import { createServerClient } from "@tcwc/supabase/server";
import { revalidatePath } from "next/cache";

function supabase() {
  return createServerClient();
}

// CREATE
export async function createTodo(formData: FormData) {
  const title = formData.get("title");

  if (typeof title !== "string") return;

  const client = supabase();

  const {
    data: { user },
  } = await client.auth.getUser();

  if (!user) return;

  await client.from("minimal_flow_todos").insert({
    title,
    user_id: user.id,
    completed: false,
  });

  revalidatePath("/home");
}

// TOGGLE
export async function toggleTodo(id: string, completed: boolean) {
  const client = supabase();

  await client
    .from("minimal_flow_todos")
    .update({ completed: !completed })
    .eq("id", id);

  revalidatePath("/home");
}

// DELETE
export async function deleteTodo(id: string) {
  const client = supabase();

  await client
    .from("minimal_flow_todos")
    .delete()
    .eq("id", id);

  revalidatePath("/home");
}