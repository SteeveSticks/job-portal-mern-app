import React, { createContext, useContext, useState } from "react";
import jwtDecode from "jwt-decode";
import getBaseURL from "../utils/getBaseURL";

// create the context
const AuthContext = createContext();

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(token ? jwtDecode(token) : null);

  // check if the user is authenticated
  const isAuthenticated = !!token;

  // save token to the localstorage and decode user
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(`${getBaseURL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = response.json();
      if (!response.ok) throw new Error(data.message || "Login Failed");

      // save token and decode user
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser(jwtDecode(data.token));
      console.log("Login Successfull ✅", data);
    } catch (error) {
      console.log("Login error:", error.message);
      throw error;
    }
  };

  const handleRegister = async (email, password) => {
    try {
      const response = await fetch(`${getBaseURL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed");

      console.log("Registration successful", data);
    } catch (error) {
      console.error("Registration error ❌:", error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const value = {
    token,
    user,
    isAuthenticated,
    login: handleLogin,
    register: handleRegister,
    logout,
  }; // export

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// custom hook for easy access
export const useAuth = () => useContext(AuthContext);
