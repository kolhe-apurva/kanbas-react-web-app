import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const signup = async () => {
    try {
      const user = await client.signup(credentials);
      if (user == 200) {
        alert("Username already taken. Try again.");
      } else {
        alert("Signup successful!");
        navigate("/Labs/a6/account");
      }
    } catch (err) {
      console.error(err);
      setError(err.response.data.message);
      alert("Signup failed: " + err.response.data.message);
    }
  };
  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
      )}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              username: e.target.value,
            })
          }
          placeholder="Username"
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
          placeholder="Password"
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <button
        onClick={signup}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Signup
      </button>
    </div>
  );
}
export default Signup;
