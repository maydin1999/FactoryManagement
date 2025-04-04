import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5039/api/User", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setUsers(res.data);
    })
    .catch(err => {
      console.error("Kullanıcıları çekerken hata:", err);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Kullanıcı Listesi</h2>
      <table className="table table-bordered table-hover mt-4">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Email</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
