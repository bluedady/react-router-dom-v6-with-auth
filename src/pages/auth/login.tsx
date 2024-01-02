import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    /* 
    CALL API HERE FOR LOGIN,
    AFTER SUCCESSFUL THE LOGIN,
    EXECUTE BELOW CODE 
    */

    const token = "dummy_token_123";
    const user = { id: 1, fullName: "blue daddy", email };

    localStorage.setItem("USER", JSON.stringify(user));
    localStorage.setItem("TOKEN", token);
    navigate("/");

    // Refresh the whole page
    window.location.reload();
  };

  return (
    <main>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}
