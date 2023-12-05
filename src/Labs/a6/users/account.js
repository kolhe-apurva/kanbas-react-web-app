import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    try {
      await client.updateUser(account);
      alert("Account updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update account.");
    }
  };

  const signout = async () => {
    try {
      await client.signout();
      navigate("/Labs/a6/signin");
    } catch (err) {
      console.error(err);
      alert("Failed to sign out.");
    }
  };
  const { id } = useParams();

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      {account && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1 style={{ textAlign: "center" }}>Account</h1>
          <label>Password</label>
          <input
            type="password"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
            style={{ padding: "8px" }}
          />
          <label>First Name</label>
          <input
            type="text"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
            style={{ padding: "8px" }}
          />
          <label>Last Name</label>
          <input
            type="text"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
            style={{ padding: "8px" }}
          />
          <label>DOB (YYYY-MM-DD)</label>
          <input
            type="text"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            style={{ padding: "8px" }}
          />
          <label>Email</label>
          <input
            type="email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            style={{ padding: "8px" }}
          />
          <label>Role</label>
          <select
            value={account.role}
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
            style={{ padding: "8px" }}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} style={{ padding: "10px", margin: "10px 0" }}>
            Save
          </button>
          <button
            onClick={signout}
            style={{ padding: "10px", margin: "10px 0" }}
          >
            Signout
          </button>
          <Link
            to="/Labs/a6/admin/users"
            className="btn btn-warning w-100"
            style={{ padding: "10px", textAlign: "center" }}
          >
            Users
          </Link>
        </div>
      )}
      {!account && (
        <h1 className="text-danger" style={{ textAlign: "center" }}>
          Not logged in
        </h1>
      )}
    </div>
  );
}
export default Account;
