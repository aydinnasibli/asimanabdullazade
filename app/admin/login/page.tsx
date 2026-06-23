"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Invalid password");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: 360,
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div>
          <p
            style={{
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--ink-light)",
              marginBottom: 12,
            }}
          >
            Admin
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "2.4rem",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--ink)",
              letterSpacing: "-0.02em",
            }}
          >
            Sign In
          </h1>
        </div>

        <div>
          <label
            style={{
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ink-light)",
              display: "block",
              marginBottom: 8,
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: 14,
              border: "1px solid var(--rule)",
              background: "transparent",
              color: "var(--ink)",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
        </div>

        {error && (
          <p style={{ fontSize: 12, color: "#c44" }}>{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 24px",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: "var(--ink)",
            color: "var(--bg)",
            border: "none",
            cursor: loading ? "wait" : "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Signing in…" : "Enter"}
        </button>
      </form>
    </div>
  );
}
