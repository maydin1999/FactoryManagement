import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded);
        setUser({
          firstName: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"] || "Bilinmiyor",
          lastName: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"] || "Bilinmiyor",
          email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] || "Bilinmiyor",
          role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || "Bilinmiyor",
          profileImage: decoded.profileImage || "https://www.w3schools.com/howto/img_avatar.png",
        });
      } catch (error) {
        console.error("Token çözme hatası:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <Link className="navbar-brand" to="/">Aydın Web</Link>

          {user?.role === "Admin" && (
            <div className="nav-item dropdown position-relative">
              <button
                className="btn btn-outline-light dropdown-toggle"
                onClick={() => setAdminDropdownOpen(!adminDropdownOpen)}
                style={{ border: "none", background: "none", padding: "5px" }}
              >
                Admin İşlemleri
              </button>
              {adminDropdownOpen && (
                <ul
                  className="dropdown-menu show mt-2"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: 1050,
                  }}
                >
                  <li>
                    <Link className="dropdown-item" to="/admin/users" onClick={() => setAdminDropdownOpen(false)}>
                      Kullanıcı Listele
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>

        <div className="d-flex align-items-center gap-3">
          <Link className="nav-link text-light" to="/">Ana Sayfa</Link>

          {!user ? (
            <Link className="nav-link text-light" to="/login">Giriş</Link>
          ) : (
            <div className="nav-item dropdown position-relative">
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
                <ul
                  className="dropdown-menu show position-absolute end-0 mt-2"
                  style={{ top: "100%", zIndex: 1050 }}
                >
                  <li>
                    <Link className="dropdown-item" to="/account" onClick={() => setDropdownOpen(false)}>
                      Hesap Yönetimi
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      Çıkış Yap
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
