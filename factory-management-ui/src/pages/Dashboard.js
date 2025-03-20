import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5039/api/User", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUsers(response.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>Admin Paneli</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
