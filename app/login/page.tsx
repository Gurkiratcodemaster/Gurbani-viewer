"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: any) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass })
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/path");
    } else {
      setError(data.error || "Invalid login");
    }
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <form onSubmit={handleLogin} style={{
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        width: 300,
        background: "white"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>

        <input
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 10 }}
        />

        <button style={{ width: "100%", padding: 10 }}>Login</button>

        {error && (
          <div style={{ color: "red", marginTop: 10 }}>{error}</div>
        )}
      </form>
    </div>
  );
}
