import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password:password }),
    });

    if (res.ok) router.push("/notes");
    else setErr("Invalid email or password");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 ">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body p-10">
          <h2 className="card-title justify-center">Login</h2>
          {err && <div className="alert alert-error">{err}</div>}

          <form onSubmit={handleSubmit} className="space-y-3">
            <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
            <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
            <button className="btn btn-primary w-full">Login</button>
          </form>

          <p className="text-xs text-center mt-3">
            Use <b>test@example.com</b> / <b>SuperSecret123</b>
          </p>
        </div>

        
      </div>
    </div>
  );
}
