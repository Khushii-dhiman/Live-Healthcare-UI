import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dash-wrapper">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">HealthCare</h2>
        <ul className="menu">
          <li className="active">Dashboard</li>
          <li>Upload Documents</li>
          <li>Patient Records</li>
          <li>Doctor Chat</li>
          <li>AI Chat Support</li>
          <li>Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main">
        <h1 className="page-title">Welcome Back 👋</h1>
        <p className="page-sub">Here's your quick health overview.</p>

        <div className="cards">
          <div className="card">
            <h3>Patients</h3>
            <p className="num">1,245</p>
          </div>

          <div className="card">
            <h3>Doctors</h3>
            <p className="num">214</p>
          </div>

          <div className="card">
            <h3>Reports Uploaded</h3>
            <p className="num">542</p>
          </div>
        </div>

        <div className="big-card">
          <h2 className="bc-title">Activity Overview</h2>
          <p className="bc-text">You can view recent uploads, chat logs, and AI responses here.</p>
        </div>
      </main>
    </div>
  );
}
