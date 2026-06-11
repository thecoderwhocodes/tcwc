"use client"

import { useState } from 'react'

export default function ProfileClient({ user }: any) {
    const [email, setEmail] = useState(user?.email ?? "");
  const [name, setName] = useState(user?.user_metadata?.name ?? "");
  return (
    <div>
      <h1>Profil</h1>

      <label>Email</label>
      <input value={email} disabled />

      <label>Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => console.log(name)}>
        Speichern
      </button>
    </div>
  )
}
