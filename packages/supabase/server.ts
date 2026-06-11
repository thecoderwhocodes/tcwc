import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
  const cookieStore = cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      async getAll() {
        return (await cookieStore).getAll();
      },
      setAll() {
        // Server Components dürfen keine Cookies setzen
      },
    },
  });
}