import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Signup() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const success = signup({ email, password });

    if (success) {
      navigate("/login");
    } else {
      setError("User already exists");
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-card">
          <h2>Create Account</h2>

          {error && <p className="error">{error}</p>}

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-box">
            <input
              type={show ? "text" : "password"}
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>

          <input
            type="password"
            placeholder="Retype Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>Signup</button>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>

          
        </div>
      </div>
    </>
  );
}

export default Signup;