import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5039/api/Auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      toast.success("Giriş başarılı!");
      navigate("/"); // Giriş yaptıktan sonra ana sayfaya yönlendir
      window.location.reload(); // Navbar'daki kullanıcı bilgisinin anında güncellenmesi için sayfayı yenile
    } catch (error) {
      toast.error("Giriş başarısız! E-posta veya şifre hatalı.");
    }
  };

  return (
    <div className="container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>E-Posta:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Şifre:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;
