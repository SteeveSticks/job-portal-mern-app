import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // save to localStorage
      localStorage.setItem("token", token);
      //navigate to protected route
      navigate("/all-jobs");
    } else {
      alert("Google sign in failed!");
      navigate("/");
    }
  });
  return <p>Signing you in...</p>;
};

export default GoogleCallback;
