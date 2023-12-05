import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) {
        alert("Incorrect Username/Password");
      } else {
        navigate("/Labs/a6/account");
      }
    } catch (err) {
      console.error(err);
      alert(
        "Signin failed: " + (err.response?.data?.message || "Unknown error")
      );
    }
  };
  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
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
            setCredentials({ ...credentials, password: e.target.value })
          }
          placeholder="Password"
          style={{ width: "100%", padding: "8px" }}
        />
      </div>
      <button
        onClick={signin}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Signin
      </button>
    </div>
  );
}
export default Signin;
