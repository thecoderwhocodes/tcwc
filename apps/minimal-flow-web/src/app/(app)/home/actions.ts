"use server";

import { createServerClient } from "@tcwc/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

// CREATE
export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;

  const supabase = createServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  await supabase.from("minimal_flow_todos").insert({
    title,
    user_id: user.id,
  });

  revalidatePath("/home");
}

// TOGGLE
export async function toggleTodo(id: string, completed: boolean) {
  const supabase = createServerClient();

  await supabase
    .from("minimal_flow_todos")
    .update({ completed })
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