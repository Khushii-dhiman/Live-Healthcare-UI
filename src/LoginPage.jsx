import React, { useState } from "react";
import "./login.css";

export default function LoginPage() {
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!role) {
      alert("Please select a role!");
      return;
    }
    alert(role + " Login Successful (UI Only)");
  };

  return (
    <div className="login-container">
      <h1>Live HealthCare Portal</h1>

      <div className="login-box">
        <label>Select Login Type:</label>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="Patient">Patient Login</option>
          <option value="Doctor">Doctor Login</option>
          <option value="Admin">Administration Login</option>
          <option value="Government">Government Dept Login</option>
        </select>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
