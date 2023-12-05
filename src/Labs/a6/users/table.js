import React, { useState, useEffect } from "react";
import {
  BsTrashFill,
  BsPlusCircleFill,
  BsCheckCircleFill,
  BsPencilSquare,
} from "react-icons/bs";
import * as client from "./client";
import { Link } from "react-router-dom";

function UserTable() {
  const [users, setUsers] = useState([]);
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      fetchUsers();
      alert("User updated successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to update user.");
    }
  };

  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
  });

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user?._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const createUser = async () => {
    try {
      const response = await client.createUser(user);
      if (response === 200) {
        alert("Duplicate username, try again.");
        setUser({
          username: "",
          password: "",
          role: "USER",
          firstName: "",
          lastName: "",
        });
      } else {
        setUsers([response, ...users]);
        alert("User created successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    console.log(users);
    setUsers(users);
  };

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
      alert("User deleted successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to delete user.");
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <hr />
      <h1>Users</h1>
      <hr />
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Password (for new user)</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={user.firstName}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />
              </td>
              <td>
                <select
                  className="form-control"
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </select>
              </td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <BsPlusCircleFill
                    onClick={createUser}
                    className="text-primary"
                    style={{ cursor: "pointer", fontSize: "1.5em" }}
                  />
                  <span>Add</span>
                </div>
                <div
                  className="ms-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BsCheckCircleFill
                    onClick={updateUser}
                    className="text-success"
                    style={{ cursor: "pointer", fontSize: "1.5em" }}
                  />
                  <span>Update</span>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <Link to={`/Labs/a6/account/${user._id}`}>
                    {user.username}
                  </Link>
                </td>
                <td>******</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role}</td>
                <td>
                  <BsTrashFill
                    onClick={() => deleteUser(user)}
                    className="text-danger ms-5"
                    style={{ cursor: "pointer", fontSize: "1.2em" }}
                  />
                  <BsPencilSquare
                    onClick={() => selectUser(user)}
                    className="text-warning ms-4"
                    style={{ cursor: "pointer", fontSize: "1.2em" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UserTable;
