import Signin from "./users/signin";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Account from "./users/account";
import Table from "./users/table";
import Signup from "./users/signup";

function Project() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Assignment 6</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Link to="/Labs/a6/signup">
          <button
            style={{
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </Link>
        <Link to="/Labs/a6/signin">
          <button
            style={{
              padding: "10px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </Link>
        <Link to="/Labs/a6/signout">
          <button
            style={{
              padding: "10px",
              backgroundColor: "grey",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>

      <div className="col-10" style={{ margin: "auto" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs/a6/account" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<Table />} />
          <Route path="/account/:id" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;
