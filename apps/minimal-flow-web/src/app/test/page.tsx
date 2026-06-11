import { createServerClient } from "../../../../../packages/supabase/server";

export default async function TestPage() {
  const supabase = createServerClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <div className="pageContainerCenter">
      <h1>Supabase Test</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
}