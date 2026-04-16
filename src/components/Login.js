import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2 className="login-title">Live HealthCare</h2>
        <p className="login-sub">Please sign in to continue</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Login As</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="gov">Government</option>
              <option value="admin">Administration</option>
            </select>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••" required />
          </div>

          <button className="btn-login">Login</button>

        </form>
      </div>
    </div>
  );
}
