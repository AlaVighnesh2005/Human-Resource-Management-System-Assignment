import { useState } from "react";

function Attendance() {
  const [records, setRecords] = useState([]);

  const markAttendance = (status) => {
    setRecords([
      ...records,
      { date: new Date().toLocaleDateString(), status }
    ]);
  };

  return (
    <div className="box">
      <h2>Attendance</h2>
      <button onClick={() => markAttendance("Present")}>Present</button>
      <button onClick={() => markAttendance("Absent")}>Absent</button>

      <ul>
        {records.map((r, i) => (
          <li key={i}>{r.date} - {r.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
