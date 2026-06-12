import { createServerClient as createSSRClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createServerClient() {
  const cookieStore = cookies();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createSSRClient(url, key, {
    cookies: {
      async getAll() {
        return (await cookieStore).getAll();
      },
      setAll() {
        // In Server Components keine Cookies setzen
      }
    },
  });
}