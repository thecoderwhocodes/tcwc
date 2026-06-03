"use client";

import React, { useState } from "react";
import { supabase } from "../../../../../../../../packages/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.session) {
      router.push("/app");
      router.refresh();
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.user) {
      alert("Account erstellt. Du kannst dich jetzt anmelden.");
    }
  };

  return (
    <div className="card">
      <h1>Anmelden</h1>
      <p>Melde dich mit deinem TCWC Account an</p>

      <form className="authForm" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p style={{ color: "var(--error)", textAlign: "center" }}>{error}</p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Anmelden..." : "Anmelden"}
        </button>
      </form>

      <button onClick={handleRegister} disabled={loading}>
        Registrieren
      </button>
    </div>
  );
}