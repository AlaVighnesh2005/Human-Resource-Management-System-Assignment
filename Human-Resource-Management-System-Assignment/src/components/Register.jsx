import { useState } from "react";
import { registerUser, getUsers } from "../utils/auth";

function Register({ setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = () => {
    if (!username || !password || !email) {
      setMsg("All fields are required");
      return;
    }

    const exists = getUsers().find((u) => u.username === username);
    if (exists) {
      setMsg("User already exists");
      return;
    }

    registerUser({ username, password, email });
    setMsg("Registration successful. Please login.");
  };

  return (
    <div className="box">
      <h2>Register</h2>
      <p>{msg}</p>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p className="link" onClick={() => setPage("login")}>
        Back to Login
      </p>
    </div>
  );
}

export default Register;
