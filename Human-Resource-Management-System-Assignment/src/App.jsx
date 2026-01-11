import { useState } from "react";
// import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Attendance from "./components/Attendance";
import Leave from "./components/Leave";
import Payroll from "./components/Payroll";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("login");

  if (!loggedIn) {
    return page === "login" ? (
      <Login setLoggedIn={setLoggedIn} setPage={setPage} />
    ) : (
      <Register setPage={setPage} />
    );
  }

  return (
    <>
      <header className="header">
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={() => setPage("attendance")}>Attendance</button>
        <button onClick={() => setPage("leave")}>Leave</button>
        <button onClick={() => setPage("payroll")}>Payroll</button>
        <button className="logout" onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </header>

      <main className="container">
        {page === "dashboard" && <Dashboard />}
        {page === "profile" && <Profile />}
        {page === "attendance" && <Attendance />}
        {page === "leave" && <Leave />}
        {page === "payroll" && <Payroll />}
      </main>
    </>
  );
}

export default App;
