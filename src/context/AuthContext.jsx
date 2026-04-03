import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load logged-in user on refresh
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // ✅ LOGIN (check from users array)
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUser(foundUser);
      return true;
    }

    return false;
  };

  // ✅ SIGNUP (store multiple users + prevent duplicates)
  const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check if user already exists
    const userExists = users.find((u) => u.email === userData.email);

    if (userExists) {
      alert("User already exists");
      return false;
    }

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  // ✅ LOGOUT
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};