import { useState } from "react";

function Leave() {
  const [leaves, setLeaves] = useState([]);
  const [type, setType] = useState("");
  const [reason, setReason] = useState("");

  const applyLeave = () => {
    setLeaves([...leaves, { type, reason, status: "Pending" }]);
    setType("");
    setReason("");
  };

  return (
    <div className="box">
      <h2>Leave Management</h2>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">Select Leave Type</option>
        <option>Sick Leave</option>
        <option>Casual Leave</option>
      </select>

      <input placeholder="Reason" onChange={(e) => setReason(e.target.value)} />
      <button onClick={applyLeave}>Apply</button>

      <ul>
        {leaves.map((l, i) => (
          <li key={i}>{l.type} - {l.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leave;
