import React from "react";

function RoleSelection({ setPage, setRole }) {
  return (
    <div style={styles.container}>
      <h1>Live Health Care Portal</h1>
      <p>Select your login type</p>

      <button style={styles.btn} onClick={() => { setRole("patient"); setPage("login"); }}>
        Patient Login
      </button>

      <button style={styles.btn} onClick={() => { setRole("doctor"); setPage("login"); }}>
        Doctor Login
      </button>

      <button style={styles.btn} onClick={() => { setRole("admin"); setPage("login"); }}>
        Admin Login
      </button>

      <button style={styles.btn} onClick={() => { setRole("government"); setPage("login"); }}>
        Government Login
      </button>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  btn: {
    padding: "12px 20px",
    margin: "10px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default RoleSelection;
