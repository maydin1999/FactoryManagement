import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded); // ✅ Konsola JWT içeriğini yazdırıyoruz

        setUser({
          firstName: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"] || "Bilinmiyor",
          lastName: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"] || "Bilinmiyor",
          email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] || "Bilinmiyor",
          role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || "Bilinmiyor",
          profileImage: decoded.profileImage || "https://www.w3schools.com/howto/img_avatar.png", // Varsayılan avatar
        });
      } catch (error) {
        console.error("Token çözme hatası:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // JWT Token'ı temizle
    setUser(null);
    navigate("/login"); // Giriş sayfasına yönlendir
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Aydın Web</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Ana Sayfa</Link>
            </li>
            {!user ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Giriş</Link>
              </li>
            ) : (
              <li className="nav-item dropdown">
                <button
                  className="btn btn-outline-light d-flex align-items-center gap-2 dropdown-toggle"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{ border: "none", background: "none", padding: "5px" }}
                >
                  <img
                    src={user.profileImage}
                    alt="Profil"
                    className="rounded-circle"
                    width="35"
                    height="35"
                  />
                  <span className="text-light">{user.firstName} {user.lastName}</span>
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu show position-absolute end-0 mt-1">
                    <li>
                      <Link className="dropdown-item" to="/account">Hesap Yönetimi</Link>
                    </li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={handleLogout}>
                        Çıkış Yap
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
