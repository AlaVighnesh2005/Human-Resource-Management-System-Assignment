import { useState } from "react";
import { loginUser } from "../utils/auth";

function Login({ setLoggedIn, setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setMsg("All fields are required");
      return;
    }

    const user = loginUser(username, password);
    if (!user) {
      setMsg("Invalid credentials");
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <div className="box">
      <h2>Login</h2>
      <p className="error">{msg}</p>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p className="link" onClick={() => setPage("register")}>
        New user? Register
      </p>
    </div>
  );
}

export default Login;
