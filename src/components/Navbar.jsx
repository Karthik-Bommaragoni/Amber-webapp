import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="nav">
      {/* LEFT: Logo */}
      <div className="nav-left">
        <Link to="/" className="logo">
          AmberClone
        </Link>
      </div>

     

      {/* RIGHT: Auth buttons */}
      <div className="nav-right">
        {user ? (
          <>
            <span className="user-email">{user.email}</span>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn login">
              Login
            </Link>
            <Link to="/signup" className="btn signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;