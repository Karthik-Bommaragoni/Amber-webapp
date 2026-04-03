import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ FIX

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ FIX

  const handleSubmit = () => {
    const success = login(email, password);

    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password"); // ✅ better than alert
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-card">
          <h2>Login</h2>

          {error && <p className="error">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>Login</button>

          <p>
            Don’t have an account? <Link to="/signup">Signup</Link>
          </p>

         
        </div>
      </div>
    </>
  );
}

export default Login;